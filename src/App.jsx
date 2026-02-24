import Graph from './components/Graph';

export default function App() {
  return (
    <>
      <div id="header">
        <h1>Neuromodulator Network</h1>
        <span>v2 — drag nodes · hover for details · scroll to zoom</span>
      </div>

      <div id="legend">
        <div className="legend-item" data-type="neurotransmitter">
          <div className="legend-dot" style={{ background: 'var(--nt)' }} />
          Neurotransmitter
        </div>
        <div className="legend-item" data-type="hormone">
          <div className="legend-dot" style={{ background: 'var(--hm)' }} />
          Hormone
        </div>
        <div className="legend-item" data-type="activity">
          <div className="legend-dot" style={{ background: 'var(--act)' }} />
          Activity
        </div>
        <div className="legend-item" data-type="receptor">
          <div className="legend-dot" style={{ background: 'var(--rec)' }} />
          Receptor System
        </div>
      </div>

      <div id="info-panel" />

      <div id="tooltip">
        <div className="tt-name" />
        <div className="tt-type" />
        <div className="tt-desc" />
        <div className="tt-connections" />
      </div>

      <div id="controls">
        <button className="ctrl-btn active" data-filter="all">All</button>
        <button className="ctrl-btn" data-filter="excitatory">Stimulates ↑</button>
        <button className="ctrl-btn" data-filter="inhibitory">Inhibits ↓</button>
        <button className="ctrl-btn" data-filter="modulatory">Modulates ~</button>
        <button className="ctrl-btn" data-filter="converts">Converts →</button>
      </div>

      <div id="edge-legend">
        <div className="edge-legend-item">
          <div className="edge-legend-line" style={{ background: 'var(--edge-ex)' }} />
          <span>Stimulates / Increases</span>
        </div>
        <div className="edge-legend-item">
          <div className="edge-legend-line" style={{ background: 'var(--edge-in)' }} />
          <span>Inhibits / Decreases</span>
        </div>
        <div className="edge-legend-item">
          <div
            className="edge-legend-line"
            style={{
              background: 'var(--edge-mod)',
              borderTop: '1px dashed rgba(192,132,228,0.6)',
              height: 0,
            }}
          />
          <span>Modulates / Converts</span>
        </div>
      </div>

      <div id="sources-panel">
        <div
          className="sp-title"
          tabIndex={0}
          role="button"
          aria-expanded="false"
          aria-controls="sp-list"
          aria-label="Sources"
        >
          📚 Sources
        </div>
        <div className="sp-list" id="sp-list" role="region" />
      </div>

      <div id="edge-tooltip" role="tooltip" aria-live="polite">
        <div className="et-label" />
        <div className="et-source" />
        <div className="et-book" />
      </div>

      <Graph />
    </>
  );
}
