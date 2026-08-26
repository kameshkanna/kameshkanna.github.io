export interface Project {
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  links?: { github?: string; paper?: string; demo?: string };
}

export const projects: Project[] = [
  {
    title: "ManifoldSteer: Geometry-Preserving Activation Steering in LLM Residual Streams",
    description:
      "Geometry-preserving steering operators for LLM residual streams, built on an empirical layer-selection criterion derived from mapping Qwen2.5-3B's semantic submanifolds.",
    bullets: [
      "Mapped the Qwen2.5-3B residual stream to identify ~5–6D semantic submanifolds, establishing an empirical layer-selection criterion for safe steering.",
      "Designed geometry-preserving steering operators that eliminate the 20× residual stream norm collapse inherent to standard additive CAA baselines.",
      "Revealed RLHF safety routing occurs 18 layers before peak gradient saliency, proposing an entropy-delta proxy for accurate behavioral targeting.",
    ],
    tags: ["Mechanistic Interpretability", "AI Safety", "PyTorch", "Transformers"],
  },
  {
    title: "Black-Scholes Modelling with Kolmogorov Arnold Networks",
    description:
      "Applying KANs to financial derivatives pricing, exploring whether learnable activation functions improve on classical Black-Scholes approximations.",
    bullets: [
      "Working to improve the 72% accuracy achieved on the Synthetic European dataset by refining KAN architecture.",
      "Tracked and optimized model performance: train loss 2.84, test loss 4.57.",
      "Managed regularization (±2.05) to improve model stability and generalization.",
    ],
    tags: ["KAN", "Financial ML", "PyTorch", "Quantitative Finance"],
  },
];

export interface Grant {
  title: string;
  amount: string;
  description: string;
}

export const grants: Grant[] = [
  {
    title: "Lambda Labs Research Grant",
    amount: "$1,000 (scalable to $5,000)",
    description:
      "Awarded for research on interpretability and routing dynamics of Mixture-of-Experts (MoE) models during inference. Work involves mathematical analysis of expert load balancing, probing memorization vs. generalization through expert usage patterns, and inference-only diagnostic tools.",
  },
];

export interface ServiceEntry {
  role: string;
  venue: string;
}

export const service: ServiceEntry[] = [
  {
    role: "Reviewer",
    venue: "ICML 2026, AI-MATH Workshop",
  },
  {
    role: "Reviewer",
    venue: "ICML 2026, Mechanistic Interpretability Workshop",
  },
  {
    role: "Reviewer",
    venue: "ICML 2026, Failure Modes in Agentic AI Workshop",
  },
  {
    role: "Reviewer",
    venue: "ICML 2026, SCALE Workshop",
  },
  {
    role: "Reviewer",
    venue: "NeurIPS 2025, AI-MATH Workshop",
  },
  {
    role: "Reviewer",
    venue: "AAAI 2026, Workshop on Shaping Responsible Synthetic Data in the Era of Foundation Models",
  },
];
