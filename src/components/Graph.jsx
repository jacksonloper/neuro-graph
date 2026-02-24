import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { nodes as rawNodes, edges as rawEdges, textbooks } from '../data';

export default function Graph() {
  const svgRef = useRef(null);

  useEffect(() => {
    const nodes = rawNodes.map(n => ({...n}));
    const edges = rawEdges.map(e => ({...e}));

    const colorMap = {
      neurotransmitter: "#e8546e",
      hormone: "#4da6e8",
      activity: "#45c488",
      receptor: "#c084e4",
    };

    const edgeColors = {
      excitatory: { base: "rgba(69, 196, 136, 0.40)", hi: "rgba(69, 196, 136, 0.90)" },
      inhibitory: { base: "rgba(232, 84, 110, 0.35)", hi: "rgba(232, 84, 110, 0.85)" },
      modulatory: { base: "rgba(192, 132, 228, 0.30)", hi: "rgba(192, 132, 228, 0.80)" },
      converts:   { base: "rgba(77, 166, 232, 0.35)", hi: "rgba(77, 166, 232, 0.85)" },
    };

    const W = window.innerWidth;
    const H = window.innerHeight;

    const svg = d3.select(svgRef.current).attr("width", W).attr("height", H);

    const defs = svg.append("defs");

    // Arrowheads for each edge type, normal and highlighted
    Object.entries(edgeColors).forEach(([type, colors]) => {
      ["base", "hi"].forEach(variant => {
        const id = variant === "base" ? `arr-${type}` : `arr-${type}-hi`;
        defs.append("marker")
          .attr("id", id)
          .attr("viewBox", "0 -5 12 10")
          .attr("refX", 12)
          .attr("refY", 0)
          .attr("markerWidth", variant === "hi" ? 10 : 8)
          .attr("markerHeight", variant === "hi" ? 10 : 8)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M0,-4.5L12,0L0,4.5L3,0Z")
          .attr("fill", colors[variant]);
      });
    });

    // Glow
    const glow = defs.append("filter").attr("id", "glow");
    glow.append("feGaussianBlur").attr("stdDeviation", "4").attr("result", "b");
    glow.append("feMerge").selectAll("feMergeNode").data(["b","SourceGraphic"]).enter().append("feMergeNode").attr("in", d => d);

    // Subtle grain
    const grain = defs.append("filter").attr("id", "grain").attr("x", "0%").attr("y", "0%").attr("width", "100%").attr("height", "100%");
    grain.append("feTurbulence").attr("type","fractalNoise").attr("baseFrequency","0.7").attr("numOctaves","3").attr("stitchTiles","stitch");
    grain.append("feColorMatrix").attr("type","saturate").attr("values","0");

    svg.append("rect").attr("width", W).attr("height", H).attr("fill","#08090d").attr("opacity",0.3).attr("filter","url(#grain)");

    const g = svg.append("g");

    svg.call(d3.zoom().scaleExtent([0.15, 5]).on("zoom", e => g.attr("transform", e.transform)));

    // Build edge pair lookup for curvature
    const edgePairCounts = {};
    edges.forEach(e => {
      const k1 = `${e.source}-${e.target}`;
      if (!edgePairCounts[k1]) edgePairCounts[k1] = 0;
      edgePairCounts[k1]++;
    });
    // Check if reverse exists
    const hasBidirectional = {};
    edges.forEach(e => {
      const rev = `${e.target}-${e.source}`;
      if (edgePairCounts[rev]) {
        hasBidirectional[`${e.source}-${e.target}`] = true;
      }
    });

    // Simulation
    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(edges).id(d => d.id).distance(130).strength(0.25))
      .force("charge", d3.forceManyBody().strength(-500))
      .force("center", d3.forceCenter(W/2, H/2))
      .force("collision", d3.forceCollide().radius(d => d.size + 16))
      .force("x", d3.forceX(W/2).strength(0.035))
      .force("y", d3.forceY(H/2).strength(0.035));

    // Links
    const linkG = g.append("g");
    const link = linkG.selectAll("path")
      .data(edges)
      .enter().append("path")
      .attr("fill", "none")
      .attr("stroke", d => edgeColors[d.type].base)
      .attr("stroke-width", 1.3)
      .attr("marker-end", d => `url(#arr-${d.type})`)
      .attr("stroke-dasharray", d => d.type === "modulatory" ? "5,3" : d.type === "converts" ? "2,3" : "none")
      .attr("opacity", 0.75);

    // Edge labels (hidden by default)
    const edgeLabelG = g.append("g");
    const edgeLabel = edgeLabelG.selectAll("text")
      .data(edges)
      .enter().append("text")
      .attr("font-size", "7.5px")
      .attr("fill", "rgba(255,255,255,0.0)")
      .attr("text-anchor", "middle")
      .attr("font-family", "'DM Sans',sans-serif")
      .attr("font-weight", 300)
      .attr("pointer-events", "none")
      .text(d => d.label);

    // Nodes
    const nodeG = g.append("g");
    const node = nodeG.selectAll("g")
      .data(nodes)
      .enter().append("g")
      .attr("cursor", "grab")
      .call(d3.drag()
        .on("start", (e,d) => { if(!e.active) simulation.alphaTarget(0.3).restart(); d.fx=d.x; d.fy=d.y; })
        .on("drag", (e,d) => { d.fx=e.x; d.fy=e.y; })
        .on("end", (e,d) => { if(!e.active) simulation.alphaTarget(0); d.fx=null; d.fy=null; }));

    // Glow ring
    node.append("circle")
      .attr("r", d => d.size + 5)
      .attr("fill", d => colorMap[d.type])
      .attr("opacity", 0.06)
      .attr("filter", "url(#glow)");

    // Main circle
    node.append("circle")
      .attr("class", "main-circle")
      .attr("r", d => d.size)
      .attr("fill", d => `color-mix(in srgb, ${colorMap[d.type]} 12%, #0c0e14)`)
      .attr("stroke", d => colorMap[d.type])
      .attr("stroke-width", 1.5)
      .attr("stroke-opacity", 0.55);

    // Labels
    node.each(function(d) {
      const el = d3.select(this);
      const lines = d.label.split("\n");
      const fs = d.size < 17 ? 7 : d.size < 21 ? 8 : d.size < 25 ? 9 : 10;
      lines.forEach((line, i) => {
        el.append("text")
          .attr("text-anchor", "middle")
          .attr("dy", `${(i - (lines.length-1)/2) * 1.15}em`)
          .attr("fill", "#e2e0dc")
          .attr("font-size", fs + "px")
          .attr("font-weight", 500)
          .attr("font-family", "'DM Sans',sans-serif")
          .attr("pointer-events", "none")
          .text(line);
      });
    });

    // Count connections per node for tooltip
    const connectionCounts = {};
    nodes.forEach(n => connectionCounts[n.id] = { out: 0, in: 0 });
    edges.forEach(e => {
      const sid = typeof e.source === "object" ? e.source.id : e.source;
      const tid = typeof e.target === "object" ? e.target.id : e.target;
      if (connectionCounts[sid]) connectionCounts[sid].out++;
      if (connectionCounts[tid]) connectionCounts[tid].in++;
    });

    // Tooltip
    const tooltip = d3.select("#tooltip");

    node.on("mouseenter", (event, d) => {
      const cc = connectionCounts[d.id];
      tooltip.style("display", "block")
        .style("left", (event.clientX + 18) + "px")
        .style("top", (event.clientY - 12) + "px");
      tooltip.select(".tt-name").text(d.label.replace(/\n/g, " ")).style("color", colorMap[d.type]);
      tooltip.select(".tt-type").text(d.type);
      tooltip.select(".tt-desc").text(d.desc);
      tooltip.select(".tt-connections").html(`${cc.out} outgoing · ${cc.in} incoming · ${cc.out + cc.in} total`);

      // Highlight connected
      const connected = new Set([d.id]);
      edges.forEach(e => {
        const sid = e.source.id || e.source;
        const tid = e.target.id || e.target;
        if (sid === d.id) connected.add(tid);
        if (tid === d.id) connected.add(sid);
      });

      link
        .attr("opacity", l => (l.source.id===d.id || l.target.id===d.id) ? 1 : 0.04)
        .attr("stroke-width", l => (l.source.id===d.id || l.target.id===d.id) ? 2.5 : 0.6)
        .attr("stroke", l => (l.source.id===d.id || l.target.id===d.id) ? edgeColors[l.type].hi : edgeColors[l.type].base)
        .attr("marker-end", l => (l.source.id===d.id || l.target.id===d.id) ? `url(#arr-${l.type}-hi)` : `url(#arr-${l.type})`);

      edgeLabel
        .attr("fill", l => (l.source.id===d.id || l.target.id===d.id) ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.0)");

      node.select(".main-circle").attr("opacity", n => connected.has(n.id) ? 1 : 0.1);
      node.selectAll("text").attr("opacity", function() {
        return connected.has(d3.select(this.parentNode).datum().id) ? 1 : 0.1;
      });
    })
    .on("mousemove", event => {
      tooltip.style("left", (event.clientX+18)+"px").style("top", (event.clientY-12)+"px");
    })
    .on("mouseleave", () => {
      tooltip.style("display","none");
      link.attr("opacity",0.75).attr("stroke-width",1.3)
        .attr("stroke", d => edgeColors[d.type].base)
        .attr("marker-end", d => `url(#arr-${d.type})`);
      edgeLabel.attr("fill","rgba(255,255,255,0.0)");
      node.select(".main-circle").attr("opacity",1);
      node.selectAll("text").attr("opacity",1);
    });

    // Link path with curvature for bidirectional edges
    function linkPath(d) {
      const dx = d.target.x - d.source.x;
      const dy = d.target.y - d.source.y;
      const dist = Math.sqrt(dx*dx + dy*dy) || 1;
      const key = `${d.source.id}-${d.target.id}`;
      const isBi = hasBidirectional[key];

      // Offset for bidirectional
      const curveAmount = isBi ? 0.25 : 0.12;
      const dr = dist / (2 * curveAmount);

      // Shorten arrow to not overlap with node
      const targetR = d.target.size + 8;
      const ratio = (dist - targetR) / dist;
      const tx = d.source.x + dx * ratio;
      const ty = d.source.y + dy * ratio;

      const sourceR = d.source.size + 4;
      const sRatio = sourceR / dist;
      const sx = d.source.x + dx * sRatio;
      const sy = d.source.y + dy * sRatio;

      return `M${sx},${sy}A${dr},${dr} 0 0,1 ${tx},${ty}`;
    }

    // Edge label positioning along curve
    function edgeLabelPos(d) {
      const mx = (d.source.x + d.target.x) / 2;
      const my = (d.source.y + d.target.y) / 2;
      const dx = d.target.x - d.source.x;
      const dy = d.target.y - d.source.y;
      const dist = Math.sqrt(dx*dx + dy*dy) || 1;
      const key = `${d.source.id}-${d.target.id}`;
      const isBi = hasBidirectional[key];
      const offset = isBi ? 18 : 10;
      // Perpendicular offset
      const nx = -dy / dist * offset;
      const ny = dx / dist * offset;
      return { x: mx + nx, y: my + ny };
    }

    simulation.on("tick", () => {
      link.attr("d", linkPath);
      edgeLabel.each(function(d) {
        const p = edgeLabelPos(d);
        d3.select(this).attr("x", p.x).attr("y", p.y);
      });
      node.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    // Update stats
    const totalEdges = edges.length;
    // Each bidirectional pair is recorded twice (A→B and B→A), so divide by 2
    const biEdges = Object.keys(hasBidirectional).length / 2;
    document.getElementById("info-panel").innerHTML =
      `${nodes.length} nodes · ${totalEdges} cited connections<br>${Math.round(biEdges)} bidirectional pairs`;

    // ═══════════════════════════════════════════════
    // EDGE TOOLTIP & SOURCES
    // ═══════════════════════════════════════════════

    const edgeTooltip = d3.select("#edge-tooltip");

    // Wider invisible hit area for edges
    const linkHitArea = linkG.selectAll("path.hit-area")
      .data(edges)
      .enter().append("path")
      .attr("fill", "none")
      .attr("stroke", "transparent")
      .attr("stroke-width", 14)
      .attr("pointer-events", "stroke")
      .attr("cursor", "pointer");

    linkHitArea.on("mouseenter", (event, d) => {
      if (!d.cite) return;
      const [bookKey, chapter] = d.cite.split("|");
      const book = textbooks[bookKey];
      if (!book) return;

      const srcLabel = (typeof d.source === "object" ? d.source.label || d.source.id : d.source).replace(/\n/g, " ");
      const tgtLabel = (typeof d.target === "object" ? d.target.label || d.target.id : d.target).replace(/\n/g, " ");

      edgeTooltip.style("display", "block")
        .style("left", (event.clientX + 14) + "px")
        .style("top", (event.clientY - 10) + "px");
      edgeTooltip.select(".et-label").text(`${srcLabel} → ${tgtLabel}: ${d.label}`)
        .style("color", edgeColors[d.type].hi);
      edgeTooltip.select(".et-source").text(chapter);
      edgeTooltip.select(".et-book").text(book.short);
    })
    .on("mousemove", event => {
      edgeTooltip.style("left", (event.clientX + 14) + "px")
        .style("top", (event.clientY - 10) + "px");
    })
    .on("mouseleave", () => {
      edgeTooltip.style("display", "none");
    });

    // Update hit area paths on tick
    simulation.on("tick.hitarea", () => {
      linkHitArea.attr("d", linkPath);
    });

    // Filter controls
    let activeFilter = "all";
    d3.selectAll(".ctrl-btn").on("click", function() {
      d3.selectAll(".ctrl-btn").classed("active", false);
      d3.select(this).classed("active", true);
      activeFilter = this.dataset.filter;
      link.attr("display", d => (activeFilter === "all" || d.type === activeFilter) ? "block" : "none");
      linkHitArea.attr("display", d => (activeFilter === "all" || d.type === activeFilter) ? "block" : "none");
    });

    // Legend type highlight
    d3.selectAll(".legend-item").on("click", function() {
      const type = this.dataset.type;
      node.select(".main-circle").transition().duration(300).attr("opacity", d => d.type===type ? 1 : 0.08);
      node.selectAll("text").transition().duration(300).attr("opacity", function() {
        return d3.select(this.parentNode).datum().type===type ? 1 : 0.08;
      });
      setTimeout(() => {
        node.select(".main-circle").transition().duration(500).delay(2500).attr("opacity",1);
        node.selectAll("text").transition().duration(500).delay(2500).attr("opacity",1);
      }, 0);
    });

    // Resize
    const handleResize = () => {
      const w = window.innerWidth, h = window.innerHeight;
      svg.attr("width",w).attr("height",h);
      simulation.force("center", d3.forceCenter(w/2,h/2)).alpha(0.1).restart();
    };
    window.addEventListener("resize", handleResize);

    // Populate sources panel
    const spList = document.querySelector("#sources-panel .sp-list");
    Object.values(textbooks).forEach(book => {
      const item = document.createElement("div");
      item.className = "sp-item";
      item.innerHTML = `<a href="${book.url}" target="_blank" rel="noopener">${book.short}</a> — ${book.license}`;
      spList.appendChild(item);
    });

    const spTitle = document.querySelector("#sources-panel .sp-title");
    function toggleSources() {
      const isOpen = spList.classList.toggle("open");
      spTitle.setAttribute("aria-expanded", isOpen);
    }
    const handleSpKeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleSources(); }
    };
    spTitle.addEventListener("click", toggleSources);
    spTitle.addEventListener("keydown", handleSpKeydown);

    // Cleanup
    return () => {
      simulation.stop();
      d3.select(svgRef.current).selectAll("*").remove();
      window.removeEventListener("resize", handleResize);
      if (spTitle) {
        spTitle.removeEventListener("click", toggleSources);
        spTitle.removeEventListener("keydown", handleSpKeydown);
      }
    };
  }, []);

  return <svg ref={svgRef} id="graph" />;
}
