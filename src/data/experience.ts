export interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  period: string;
  upcoming?: boolean;
}

export interface ExperienceEntry {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
  badge?: string;
}

export const education: EducationEntry[] = [
  {
    institution: "University College London (UCL)",
    degree: "Master of Science in Machine Learning",
    location: "London, UK",
    period: "Aug 2026 – Aug 2027",
    upcoming: true,
  },
  {
    institution: "Sathyabama Institute of Science and Technology",
    degree: "Bachelor of Engineering in Computer Science (AI and ML)",
    location: "Chennai, India",
    period: "Sep 2022 – May 2026",
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: "Machine Learning Intern",
    org: "Glance",
    location: "Bengaluru, India",
    period: "Feb 2026 – Present",
    bullets: [
      "Designed an LLM-as-judge evaluation pipeline for catalog recommendations, testing prompting strategies (chain-of-thought, structured rubrics, multi-step verification) to improve judgment reliability and reduce false positives.",
      "Developed a method to distill human annotator and LLM-judge signals into a cross-encoder, enabling recommendation scoring for zero-usage / cold-start users with no behavioral history.",
      "Built and optimized catalog retrieval pipelines, improving content discovery across millions of items; achieved a 2× improvement in retrieval metrics by reimplementing SOTA embedding techniques from recent papers.",
    ],
  },
  {
    role: "Machine Learning Contributor (Contract)",
    org: "Shipd by Datacurve (YC W24)",
    location: "Remote",
    period: "Feb 2026 – Present",
    bullets: [
      "Awarded monetary prizes for top-tier performance in high-stakes predictive modeling and algorithmic problem-solving challenges.",
      "Developed and optimized ML models under strict competitive constraints in a fast-paced environment.",
    ],
    badge: "YC W24",
  },
  {
    role: "Research Fellow",
    org: "AI Safety Camp (AISC)",
    location: "Remote",
    period: "Jan 2026 – March 2026",
    bullets: [
      "Working with Ihor Kendiukhov to evaluate scalability and security guarantees of novel control protocol classes for advanced AI systems.",
      "Extending Greenblatt et al.'s framework by designing hierarchical and parallel control topologies to optimize safety-usefulness trade-offs.",
      "Conducting scaling experiments to verify generalization of control guarantees across diverse model capabilities.",
    ],
  },
  {
    role: "Independent Interpretability Researcher",
    org: "Mentored by David Africa (UK AI Security Institute)",
    location: "Remote",
    period: "Nov 2025 – Feb 2026, Aug 2026 – Present",
    bullets: [
      "Conducted independent research on mechanistic interpretability, with direct technical guidance from a Research Scientist at the UK AI Safety Institute.",
      "Developed a framework to permanently embed steering vectors into model weights, enabling persistent safety behaviors without inference-time compute overhead.",
    ],
  },
  {
    role: "Research Intern",
    org: "International Institute of Information Technology, Hyderabad",
    location: "Hyderabad, India",
    period: "May 2025 – Oct 2025",
    bullets: [
      "Researched Universal Semantic Representations and developed techniques for generating coherent natural language sentences from abstract syntactic-semantic structures.",
      "Worked on Controlled Image-to-Text Generation systems for scientific images to ensure accurate, context-aware, domain-specific textual descriptions.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "Co-build.tech",
    location: "Remote",
    period: "Dec 2024 – Jan 2025",
    bullets: [
      "Enhanced query performance by 25% by optimizing document embedding strategies for semantic similarity retrieval.",
      "Automated mapping of legal clause dependencies, improving analysis efficiency by 30%.",
    ],
  },
];
