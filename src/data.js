export const nodes = [
  // ── Neurotransmitters ──
  { id: "dopamine", label: "Dopamine", type: "neurotransmitter", size: 30, desc: "Reward prediction, motivation, motor control. Central hub of nearly all behavioral circuits. Acts via D1 (excitatory) and D2 (inhibitory) receptor families." },
  { id: "serotonin", label: "Serotonin\n(5-HT)", type: "neurotransmitter", size: 28, desc: "Mood, satiety, impulse control, patience. ~95% produced in gut enterochromaffin cells. 14+ receptor subtypes with varied functions." },
  { id: "norepinephrine", label: "Norepinephrine", type: "neurotransmitter", size: 24, desc: "Alertness, vigilance, focused attention, fight-or-flight. Synthesized from dopamine via dopamine β-hydroxylase." },
  { id: "gaba", label: "GABA", type: "neurotransmitter", size: 26, desc: "Primary inhibitory neurotransmitter. Reduces neuronal excitability. GABA-A (fast ionotropic) and GABA-B (slow metabotropic) subtypes." },
  { id: "glutamate", label: "Glutamate", type: "neurotransmitter", size: 24, desc: "Primary excitatory neurotransmitter. Learning, memory, synaptic plasticity via LTP. Excess causes excitotoxicity." },
  { id: "acetylcholine", label: "Acetylcholine\n(ACh)", type: "neurotransmitter", size: 22, desc: "Focused attention, memory encoding, neuromuscular junction, parasympathetic activation. Degraded by acetylcholinesterase." },
  { id: "endorphins", label: "β-Endorphin", type: "neurotransmitter", size: 22, desc: "Endogenous opioid peptide. Pain relief, euphoria, stress buffering. Primarily activates μ-opioid receptors." },
  { id: "anandamide", label: "Anandamide", type: "neurotransmitter", size: 18, desc: "Endocannabinoid ('bliss molecule'). Partial CB1 agonist. Modulates pain, mood, appetite. Rapidly broken down by FAAH enzyme." },
  { id: "dynorphin", label: "Dynorphin", type: "neurotransmitter", size: 18, desc: "Endogenous κ-opioid agonist. Counterbalances dopamine-driven reward, mediates dysphoria and aversion." },
  { id: "adenosine", label: "Adenosine", type: "neurotransmitter", size: 22, desc: "Sleep pressure molecule. Accumulates during wakefulness as ATP byproduct. Promotes sleepiness, vasodilation. Antagonized by caffeine." },
  { id: "substanceP", label: "Substance P", type: "neurotransmitter", size: 16, desc: "Neuropeptide for pain transmission and neurogenic inflammation. Works with opioid system in pain gating." },
  { id: "histamine", label: "Histamine", type: "neurotransmitter", size: 18, desc: "Wakefulness, immune response, gastric acid secretion. Tuberomammillary nucleus fires during waking, silent during sleep." },

  // ── Hormones ──
  { id: "melatonin", label: "Melatonin", type: "hormone", size: 22, desc: "Circadian rhythm signal. Synthesized from serotonin via NAT and HIOMT in pineal gland. Suppressed by blue light via ipRGCs." },
  { id: "cortisol", label: "Cortisol", type: "hormone", size: 26, desc: "Primary glucocorticoid stress hormone. Follows diurnal rhythm (peaks at waking). Metabolic regulation, immune modulation, memory consolidation." },
  { id: "oxytocin", label: "Oxytocin", type: "hormone", size: 22, desc: "Social bonding, trust, empathy, uterine contraction, milk letdown. Hypothalamic paraventricular nucleus." },
  { id: "vasopressin", label: "Vasopressin\n(ADH)", type: "hormone", size: 18, desc: "Pair bonding, territorial behavior, water retention, blood pressure. Closely related to oxytocin. Modulates aggression." },
  { id: "testosterone", label: "Testosterone", type: "hormone", size: 20, desc: "Motivation, confidence, muscle growth, competitive drive. Influences dopamine receptor density." },
  { id: "estrogen", label: "Estrogen", type: "hormone", size: 20, desc: "Neuroprotection, serotonin receptor upregulation, BDNF potentiation, dopamine modulation. Fluctuations drive mood changes." },
  { id: "adrenaline", label: "Adrenaline\n(Epinephrine)", type: "hormone", size: 22, desc: "Acute stress: heart rate, bronchodilation, energy mobilization. Synthesized from norepinephrine in adrenal medulla." },
  { id: "insulin", label: "Insulin", type: "hormone", size: 18, desc: "Glucose regulation. Promotes tryptophan transport across BBB → serotonin synthesis. Resistance impairs dopamine signaling." },
  { id: "bdnf", label: "BDNF", type: "hormone", size: 22, desc: "Brain-derived neurotrophic factor. Neuron survival, synaptic plasticity, LTP, neurogenesis. The 'fertilizer' for the brain." },
  { id: "prolactin", label: "Prolactin", type: "hormone", size: 18, desc: "Post-orgasm refractory period, lactation, immune modulation. Tonically suppressed by dopamine; released when dopamine drops." },
  { id: "thyroid", label: "T3 / T4\n(Thyroid)", type: "hormone", size: 18, desc: "Metabolic rate, neuronal excitability, dopamine/serotonin receptor sensitivity. Hypothyroidism mimics depression." },
  { id: "crh", label: "CRH", type: "hormone", size: 16, desc: "Corticotropin-releasing hormone. Initiates the HPA stress axis cascade → ACTH → cortisol. Drives anxiety behavior." },

  // ── Receptor Systems ──
  { id: "opioid_r", label: "Opioid\nReceptors\n(μ/δ/κ)", type: "receptor", size: 22, desc: "μ: analgesia, euphoria, dependence. δ: mood, analgesia. κ: dysphoria, diuresis. Endogenous ligands: endorphins, enkephalins, dynorphin." },
  { id: "cb1_r", label: "CB1 / CB2\nReceptors", type: "receptor", size: 18, desc: "CB1: presynaptic in brain, retrograde signaling. CB2: immune cells, anti-inflammatory. Endocannabinoid system." },
  { id: "nmda_r", label: "NMDA\nReceptors", type: "receptor", size: 18, desc: "Glutamate receptor. Voltage-gated Mg²⁺ block, Ca²⁺ permeable. Coincidence detector for LTP / Hebbian learning." },
  { id: "gabaa_r", label: "GABA-A\nReceptors", type: "receptor", size: 18, desc: "Fast inhibitory ionotropic receptor. Cl⁻ channel. Target of benzodiazepines, barbiturates, alcohol, neurosteroids." },

  // ── Activities ──
  { id: "exercise", label: "Exercise", type: "activity", size: 26, desc: "Aerobic and resistance training. Cascading neurochemical release. Duration and intensity modulate different pathways." },
  { id: "sleep", label: "Sleep", type: "activity", size: 26, desc: "NREM: glymphatic clearance, memory consolidation, growth hormone. REM: emotional processing, ACh-driven dreaming." },
  { id: "meditation", label: "Meditation", type: "activity", size: 20, desc: "Focused attention or open monitoring. Prefrontal regulation of amygdala, vagal tone, stress axis modulation." },
  { id: "social", label: "Social\nBonding", type: "activity", size: 22, desc: "Positive social interaction, touch, eye contact, deep conversation. Activates reward and affiliation circuits." },
  { id: "sunlight", label: "Sunlight\nExposure", type: "activity", size: 22, desc: "Morning light via ipRGCs → SCN. Cortisol awakening response, melatonin suppression, serotonin synthesis." },
  { id: "cold", label: "Cold\nExposure", type: "activity", size: 18, desc: "Cold water/air. Sympathetic activation, norepinephrine 2-3x, sustained dopamine elevation. Brown fat thermogenesis." },
  { id: "eating", label: "Eating", type: "activity", size: 20, desc: "Macronutrient-dependent effects. Carbs → insulin → tryptophan → serotonin. Palatable food → dopamine. Protein → tyrosine." },
  { id: "sex", label: "Sexual\nActivity", type: "activity", size: 18, desc: "Dopamine ramp during arousal → oxytocin/endorphin at climax → prolactin refractory → serotonin satisfaction." },
  { id: "music", label: "Music", type: "activity", size: 16, desc: "Anticipation/resolution cycles activate reward prediction. 'Chills' correlate with striatal dopamine release." },
  { id: "stress", label: "Chronic\nStress", type: "activity", size: 24, desc: "Sustained HPA axis. Hippocampal atrophy, prefrontal impairment, amygdala hypertrophy. Distinct from acute stress." },
  { id: "breathing", label: "Breathwork", type: "activity", size: 16, desc: "Slow breathing → vagal afferents → NTS → locus coeruleus modulation. Physiological sighs reset CO₂ sensitivity." },
  { id: "caffeine", label: "Caffeine", type: "activity", size: 20, desc: "Adenosine A1/A2A receptor antagonist. Blocks sleep pressure signal. Downstream: increased dopamine, norepinephrine, cortisol." },
  { id: "alcohol", label: "Alcohol", type: "activity", size: 20, desc: "GABA-A potentiator, glutamate/NMDA antagonist, dopamine releaser, endorphin trigger. Acute anxiolysis, chronic neuroadaptation." },
];

export const textbooks = {
  purves: {
    short: "Purves et al., Neuroscience 2e",
    title: "Neuroscience, 2nd edition",
    authors: "Purves, Augustine, Fitzpatrick, Katz, LaMantia, McNamara, Williams",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK10799/",
    license: "Free via NCBI Bookshelf"
  },
  uth: {
    short: "UTH Neuroscience Online",
    title: "Neuroscience Online: An Electronic Textbook for the Neurosciences",
    authors: "Byrne JH et al., Dept. of Neurobiology & Anatomy, UTHealth Houston",
    url: "https://nba.uth.tmc.edu/neuroscience/",
    license: "Open access"
  },
  openstax_ap: {
    short: "OpenStax A&P 2e",
    title: "Anatomy and Physiology 2e",
    authors: "OpenStax",
    url: "https://openstax.org/details/books/anatomy-and-physiology-2e",
    license: "CC BY 4.0"
  },
};

export const edges = [
  // ═══ ACTIVITIES → NEUROCHEMICALS ═══

  // Exercise
  { source: "exercise", target: "dopamine", type: "excitatory", label: "increases", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "exercise", target: "serotonin", type: "excitatory", label: "increases", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "exercise", target: "endorphins", type: "excitatory", label: "releases", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "exercise", target: "norepinephrine", type: "excitatory", label: "increases", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "exercise", target: "bdnf", type: "excitatory", label: "upregulates", cite: "uth|S1 Ch 7: Synaptic Plasticity" },
  { source: "exercise", target: "anandamide", type: "excitatory", label: "runner's high", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "exercise", target: "testosterone", type: "excitatory", label: "acute boost", cite: "openstax_ap|Ch 17.8: Gonadal Hormones" },
  { source: "exercise", target: "cortisol", type: "modulatory", label: "acute↑ chronic↓", cite: "openstax_ap|Ch 17.6: The Adrenal Glands" },
  // Feedback: dopamine motivates exercise
  { source: "dopamine", target: "exercise", type: "excitatory", label: "motivates", cite: "uth|S1 Ch 12: Biogenic Amines" },

  // Sleep
  { source: "sleep", target: "melatonin", type: "modulatory", label: "consolidates", cite: "openstax_ap|Ch 17.7: The Pineal Gland" },
  { source: "sleep", target: "cortisol", type: "inhibitory", label: "resets rhythm", cite: "openstax_ap|Ch 17.6: The Adrenal Glands" },
  { source: "sleep", target: "gaba", type: "excitatory", label: "NREM drive", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "sleep", target: "acetylcholine", type: "modulatory", label: "REM bursts", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "sleep", target: "bdnf", type: "excitatory", label: "restores", cite: "uth|S1 Ch 7: Synaptic Plasticity" },
  { source: "sleep", target: "adenosine", type: "inhibitory", label: "clears", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "sleep", target: "histamine", type: "inhibitory", label: "suppresses", cite: "uth|S1 Ch 12: Biogenic Amines" },
  // Feedback: adenosine drives sleep
  { source: "adenosine", target: "sleep", type: "excitatory", label: "sleep pressure", cite: "purves|Ch 6: Neurotransmitters" },
  // Melatonin promotes sleep
  { source: "melatonin", target: "sleep", type: "excitatory", label: "promotes", cite: "openstax_ap|Ch 17.7: The Pineal Gland" },

  // Meditation
  { source: "meditation", target: "gaba", type: "excitatory", label: "increases", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "meditation", target: "serotonin", type: "excitatory", label: "increases", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "meditation", target: "cortisol", type: "inhibitory", label: "reduces", cite: "openstax_ap|Ch 17.6: The Adrenal Glands" },
  { source: "meditation", target: "norepinephrine", type: "inhibitory", label: "calms", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "meditation", target: "acetylcholine", type: "excitatory", label: "attention", cite: "uth|S1 Ch 11: Acetylcholine" },

  // Social bonding
  { source: "social", target: "oxytocin", type: "excitatory", label: "releases", cite: "openstax_ap|Ch 17.3: The Pituitary Gland" },
  { source: "social", target: "serotonin", type: "excitatory", label: "increases", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "social", target: "dopamine", type: "excitatory", label: "reward", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "social", target: "endorphins", type: "excitatory", label: "laughter/touch", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "social", target: "vasopressin", type: "excitatory", label: "bonding", cite: "openstax_ap|Ch 17.3: The Pituitary Gland" },
  // Feedback: oxytocin promotes social behavior
  { source: "oxytocin", target: "social", type: "excitatory", label: "approach", cite: "openstax_ap|Ch 17.3: The Pituitary Gland" },

  // Sunlight
  { source: "sunlight", target: "serotonin", type: "excitatory", label: "synthesis", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "sunlight", target: "melatonin", type: "inhibitory", label: "suppresses", cite: "openstax_ap|Ch 17.7: The Pineal Gland" },
  { source: "sunlight", target: "cortisol", type: "excitatory", label: "CAR pulse", cite: "openstax_ap|Ch 17.6: The Adrenal Glands" },
  { source: "sunlight", target: "dopamine", type: "excitatory", label: "retinal DA", cite: "uth|S1 Ch 12: Biogenic Amines" },

  // Cold
  { source: "cold", target: "norepinephrine", type: "excitatory", label: "2-3× spike", cite: "openstax_ap|Ch 14: The Autonomic Nervous System" },
  { source: "cold", target: "dopamine", type: "excitatory", label: "sustained ↑", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "cold", target: "adrenaline", type: "excitatory", label: "triggers", cite: "openstax_ap|Ch 17.6: The Adrenal Glands" },

  // Eating
  { source: "eating", target: "insulin", type: "excitatory", label: "triggers", cite: "openstax_ap|Ch 17.9: The Endocrine Pancreas" },
  { source: "eating", target: "dopamine", type: "excitatory", label: "palatability", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "eating", target: "serotonin", type: "excitatory", label: "tryptophan", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "eating", target: "histamine", type: "excitatory", label: "gut release", cite: "uth|S1 Ch 12: Biogenic Amines" },
  // Feedback: dopamine/serotonin regulate appetite
  { source: "serotonin", target: "eating", type: "inhibitory", label: "satiety signal", cite: "uth|S4 Ch 4: Central Control of Feeding" },

  // Sex
  { source: "sex", target: "dopamine", type: "excitatory", label: "arousal ramp", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "sex", target: "oxytocin", type: "excitatory", label: "orgasm release", cite: "openstax_ap|Ch 17.3: The Pituitary Gland" },
  { source: "sex", target: "endorphins", type: "excitatory", label: "releases", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "sex", target: "prolactin", type: "excitatory", label: "post-orgasm", cite: "openstax_ap|Ch 17.3: The Pituitary Gland" },
  { source: "sex", target: "vasopressin", type: "excitatory", label: "pair bonding", cite: "openstax_ap|Ch 17.3: The Pituitary Gland" },

  // Music
  { source: "music", target: "dopamine", type: "excitatory", label: "reward prediction", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "music", target: "endorphins", type: "excitatory", label: "releases", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "music", target: "cortisol", type: "inhibitory", label: "reduces", cite: "openstax_ap|Ch 17.6: The Adrenal Glands" },

  // Chronic stress
  { source: "stress", target: "crh", type: "excitatory", label: "activates HPA", cite: "openstax_ap|Ch 17.6: The Adrenal Glands" },
  { source: "stress", target: "cortisol", type: "excitatory", label: "elevates", cite: "openstax_ap|Ch 17.6: The Adrenal Glands" },
  { source: "stress", target: "norepinephrine", type: "excitatory", label: "elevates", cite: "openstax_ap|Ch 14: The Autonomic Nervous System" },
  { source: "stress", target: "adrenaline", type: "excitatory", label: "triggers", cite: "openstax_ap|Ch 17.6: The Adrenal Glands" },
  { source: "stress", target: "serotonin", type: "inhibitory", label: "depletes", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "stress", target: "dopamine", type: "inhibitory", label: "blunts", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "stress", target: "bdnf", type: "inhibitory", label: "suppresses", cite: "uth|S1 Ch 7: Synaptic Plasticity" },
  { source: "stress", target: "dynorphin", type: "excitatory", label: "dysphoria", cite: "uth|S1 Ch 14: Neuropeptides" },
  { source: "stress", target: "histamine", type: "excitatory", label: "immune ↑", cite: "uth|S1 Ch 12: Biogenic Amines" },
  // Feedback: cortisol perpetuates stress
  { source: "cortisol", target: "stress", type: "excitatory", label: "sensitizes", cite: "openstax_ap|Ch 17.6: The Adrenal Glands" },

  // Breathwork
  { source: "breathing", target: "gaba", type: "excitatory", label: "increases", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "breathing", target: "norepinephrine", type: "inhibitory", label: "vagal calming", cite: "openstax_ap|Ch 14: The Autonomic Nervous System" },
  { source: "breathing", target: "acetylcholine", type: "excitatory", label: "vagal tone", cite: "openstax_ap|Ch 14: The Autonomic Nervous System" },

  // Caffeine
  { source: "caffeine", target: "adenosine", type: "inhibitory", label: "blocks A1/A2A", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "caffeine", target: "dopamine", type: "excitatory", label: "disinhibits", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "caffeine", target: "norepinephrine", type: "excitatory", label: "increases", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "caffeine", target: "cortisol", type: "excitatory", label: "elevates", cite: "openstax_ap|Ch 17.6: The Adrenal Glands" },
  { source: "caffeine", target: "adrenaline", type: "excitatory", label: "triggers", cite: "openstax_ap|Ch 17.6: The Adrenal Glands" },

  // Alcohol
  { source: "alcohol", target: "gabaa_r", type: "excitatory", label: "potentiates", cite: "purves|Ch 7: Neurotransmitter Receptors" },
  { source: "alcohol", target: "gaba", type: "excitatory", label: "enhances", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "alcohol", target: "glutamate", type: "inhibitory", label: "suppresses", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "alcohol", target: "dopamine", type: "excitatory", label: "acute release", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "alcohol", target: "endorphins", type: "excitatory", label: "releases", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "alcohol", target: "cortisol", type: "excitatory", label: "elevates", cite: "openstax_ap|Ch 17.6: The Adrenal Glands" },
  { source: "alcohol", target: "serotonin", type: "modulatory", label: "acute↑ chronic↓", cite: "uth|S1 Ch 12: Biogenic Amines" },

  // ═══ BIOCHEMICAL CONVERSIONS ═══
  { source: "serotonin", target: "melatonin", type: "converts", label: "NAT + HIOMT", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "dopamine", target: "norepinephrine", type: "converts", label: "DβH enzyme", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "norepinephrine", target: "adrenaline", type: "converts", label: "PNMT enzyme", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "glutamate", target: "gaba", type: "converts", label: "GAD enzyme", cite: "uth|S1 Ch 13: Amino Acid Neurotransmitters" },
  { source: "crh", target: "cortisol", type: "converts", label: "HPA cascade", cite: "openstax_ap|Ch 17.6: The Adrenal Glands" },

  // ═══ HORMONE → NEUROTRANSMITTER ═══
  { source: "cortisol", target: "serotonin", type: "inhibitory", label: "suppresses", cite: "openstax_ap|Ch 17.6: The Adrenal Glands" },
  { source: "cortisol", target: "dopamine", type: "inhibitory", label: "impairs", cite: "openstax_ap|Ch 17.6: The Adrenal Glands" },
  { source: "cortisol", target: "gaba", type: "inhibitory", label: "reduces", cite: "openstax_ap|Ch 17.6: The Adrenal Glands" },
  { source: "cortisol", target: "glutamate", type: "excitatory", label: "excitotoxicity", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "cortisol", target: "bdnf", type: "inhibitory", label: "suppresses", cite: "uth|S1 Ch 7: Synaptic Plasticity" },
  { source: "cortisol", target: "acetylcholine", type: "inhibitory", label: "impairs", cite: "uth|S1 Ch 11: Acetylcholine" },
  
  { source: "testosterone", target: "dopamine", type: "excitatory", label: "receptor density", cite: "openstax_ap|Ch 17.8: Gonadal Hormones" },
  { source: "testosterone", target: "vasopressin", type: "excitatory", label: "enhances", cite: "openstax_ap|Ch 17.8: Gonadal Hormones" },
  
  { source: "estrogen", target: "serotonin", type: "excitatory", label: "upregulates 5-HT", cite: "openstax_ap|Ch 17.8: Gonadal Hormones" },
  { source: "estrogen", target: "dopamine", type: "modulatory", label: "modulates D2", cite: "openstax_ap|Ch 17.8: Gonadal Hormones" },
  { source: "estrogen", target: "bdnf", type: "excitatory", label: "potentiates", cite: "openstax_ap|Ch 17.8: Gonadal Hormones" },
  { source: "estrogen", target: "acetylcholine", type: "excitatory", label: "enhances", cite: "openstax_ap|Ch 17.8: Gonadal Hormones" },
  { source: "estrogen", target: "gaba", type: "modulatory", label: "neurosteroid", cite: "openstax_ap|Ch 17.8: Gonadal Hormones" },

  { source: "oxytocin", target: "serotonin", type: "excitatory", label: "enhances", cite: "openstax_ap|Ch 17.3: The Pituitary Gland" },
  { source: "oxytocin", target: "dopamine", type: "excitatory", label: "VTA pathway", cite: "openstax_ap|Ch 17.3: The Pituitary Gland" },
  { source: "oxytocin", target: "cortisol", type: "inhibitory", label: "buffers stress", cite: "openstax_ap|Ch 17.3: The Pituitary Gland" },
  { source: "oxytocin", target: "gaba", type: "excitatory", label: "anxiolytic", cite: "openstax_ap|Ch 17.3: The Pituitary Gland" },

  { source: "vasopressin", target: "cortisol", type: "excitatory", label: "HPA potentiation", cite: "openstax_ap|Ch 17.3: The Pituitary Gland" },
  { source: "vasopressin", target: "norepinephrine", type: "excitatory", label: "arousal", cite: "openstax_ap|Ch 17.3: The Pituitary Gland" },

  { source: "insulin", target: "serotonin", type: "excitatory", label: "tryptophan BBB", cite: "openstax_ap|Ch 17.9: The Endocrine Pancreas" },
  { source: "insulin", target: "dopamine", type: "modulatory", label: "resistance impairs", cite: "openstax_ap|Ch 17.9: The Endocrine Pancreas" },

  { source: "prolactin", target: "dopamine", type: "inhibitory", label: "suppresses", cite: "openstax_ap|Ch 17.3: The Pituitary Gland" },
  // Feedback: dopamine tonically suppresses prolactin
  { source: "dopamine", target: "prolactin", type: "inhibitory", label: "tonic inhibition", cite: "openstax_ap|Ch 17.3: The Pituitary Gland" },

  { source: "thyroid", target: "dopamine", type: "excitatory", label: "receptor sensitivity", cite: "openstax_ap|Ch 17.4: The Thyroid Gland" },
  { source: "thyroid", target: "serotonin", type: "excitatory", label: "receptor sensitivity", cite: "openstax_ap|Ch 17.4: The Thyroid Gland" },
  { source: "thyroid", target: "norepinephrine", type: "excitatory", label: "potentiates", cite: "openstax_ap|Ch 17.4: The Thyroid Gland" },
  { source: "thyroid", target: "gaba", type: "modulatory", label: "modulates", cite: "openstax_ap|Ch 17.4: The Thyroid Gland" },

  { source: "bdnf", target: "glutamate", type: "excitatory", label: "LTP support", cite: "uth|S1 Ch 7: Synaptic Plasticity" },
  { source: "bdnf", target: "serotonin", type: "excitatory", label: "neurogenesis", cite: "uth|S1 Ch 7: Synaptic Plasticity" },
  { source: "bdnf", target: "dopamine", type: "excitatory", label: "neuron survival", cite: "uth|S1 Ch 7: Synaptic Plasticity" },
  { source: "bdnf", target: "gaba", type: "excitatory", label: "interneuron health", cite: "uth|S1 Ch 7: Synaptic Plasticity" },

  { source: "melatonin", target: "gaba", type: "excitatory", label: "enhances", cite: "openstax_ap|Ch 17.7: The Pineal Gland" },
  { source: "melatonin", target: "dopamine", type: "inhibitory", label: "suppresses", cite: "openstax_ap|Ch 17.7: The Pineal Gland" },
  { source: "melatonin", target: "cortisol", type: "inhibitory", label: "counterphase", cite: "openstax_ap|Ch 17.7: The Pineal Gland" },

  // ═══ NEUROTRANSMITTER → RECEPTOR ═══
  { source: "endorphins", target: "opioid_r", type: "excitatory", label: "μ/δ agonist", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "dynorphin", target: "opioid_r", type: "modulatory", label: "κ agonist", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "substanceP", target: "opioid_r", type: "modulatory", label: "pain gating", cite: "purves|Ch 10: Pain" },
  { source: "anandamide", target: "cb1_r", type: "excitatory", label: "partial agonist", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "glutamate", target: "nmda_r", type: "excitatory", label: "co-agonist", cite: "purves|Ch 7: Neurotransmitter Receptors" },
  { source: "gaba", target: "gabaa_r", type: "excitatory", label: "Cl⁻ channel", cite: "purves|Ch 7: Neurotransmitter Receptors" },

  // ═══ RECEPTOR → DOWNSTREAM ═══
  { source: "opioid_r", target: "dopamine", type: "excitatory", label: "VTA disinhibition", cite: "purves|Ch 7: Neurotransmitter Receptors" },
  { source: "opioid_r", target: "gaba", type: "inhibitory", label: "interneuron inhibition", cite: "purves|Ch 7: Neurotransmitter Receptors" },
  { source: "opioid_r", target: "substanceP", type: "inhibitory", label: "pain suppression", cite: "purves|Ch 10: Pain" },

  { source: "cb1_r", target: "gaba", type: "inhibitory", label: "presynaptic", cite: "purves|Ch 7: Neurotransmitter Receptors" },
  { source: "cb1_r", target: "glutamate", type: "inhibitory", label: "presynaptic", cite: "purves|Ch 7: Neurotransmitter Receptors" },
  { source: "cb1_r", target: "dopamine", type: "modulatory", label: "indirect", cite: "purves|Ch 7: Neurotransmitter Receptors" },

  { source: "nmda_r", target: "bdnf", type: "excitatory", label: "Ca²⁺ → CREB", cite: "uth|S1 Ch 7: Synaptic Plasticity" },

  { source: "gabaa_r", target: "glutamate", type: "inhibitory", label: "network inhibition", cite: "purves|Ch 7: Neurotransmitter Receptors" },
  { source: "gabaa_r", target: "norepinephrine", type: "inhibitory", label: "sedation", cite: "purves|Ch 7: Neurotransmitter Receptors" },
  { source: "gabaa_r", target: "histamine", type: "inhibitory", label: "sedation", cite: "purves|Ch 7: Neurotransmitter Receptors" },

  // ═══ NEUROTRANSMITTER CROSS-TALK ═══
  { source: "gaba", target: "dopamine", type: "inhibitory", label: "VTA inhibition", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "serotonin", target: "dopamine", type: "inhibitory", label: "DRN → VTA", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "dopamine", target: "serotonin", type: "modulatory", label: "reciprocal", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "acetylcholine", target: "dopamine", type: "excitatory", label: "striatal mod", cite: "uth|S1 Ch 11: Acetylcholine" },
  { source: "dopamine", target: "dynorphin", type: "excitatory", label: "rebound signal", cite: "uth|S1 Ch 14: Neuropeptides" },
  { source: "dopamine", target: "acetylcholine", type: "inhibitory", label: "D2 suppression", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "histamine", target: "acetylcholine", type: "excitatory", label: "cortical arousal", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "histamine", target: "norepinephrine", type: "excitatory", label: "wakefulness", cite: "uth|S1 Ch 12: Biogenic Amines" },
  { source: "adenosine", target: "dopamine", type: "inhibitory", label: "A2A-D2 hetero", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "adenosine", target: "glutamate", type: "inhibitory", label: "presynaptic", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "adenosine", target: "acetylcholine", type: "inhibitory", label: "reduces", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "adenosine", target: "histamine", type: "inhibitory", label: "sleep drive", cite: "purves|Ch 6: Neurotransmitters" },
  { source: "norepinephrine", target: "acetylcholine", type: "excitatory", label: "arousal", cite: "uth|S1 Ch 12: Biogenic Amines" },
];
