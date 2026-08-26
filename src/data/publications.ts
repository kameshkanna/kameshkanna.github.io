export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "workshop" | "preprint" | "conference";
  links?: { arxiv?: string; paper?: string; poster?: string };
  selected?: boolean;
}

export const publications: Publication[] = [
  {
    title:
      "Conversational Hallucination Drift: An Episodic Retrieval Framework and Error Taxonomy for Long-Term Memory Evaluation",
    authors: "Kamesh R, Sivadhanushya P",
    venue: "ICML 2026, Workshop on Failure Modes of Agentic AI",
    year: 2026,
    type: "workshop",
    selected: true,
  },
  {
    title:
      "Global PIQA: Evaluating Physical Commonsense Reasoning Across 100+ Languages and Cultures",
    authors: "Kamesh R",
    venue: "NeurIPS 2026, Under review",
    year: 2026,
    type: "preprint",
    selected: true,
  },
  {
    title:
      "Probing Reasoning Flaws and Safety Hierarchies with Chain-of-Thought Difference Amplification",
    authors: "Kamesh R",
    venue: "NeurIPS 2025, LLM-Evals Workshop",
    year: 2025,
    type: "workshop",
    selected: true,
  },
  {
    title:
      "Indian Grammatical Tradition-Inspired Universal Semantic Representation Bank (USR Bank 1.0)",
    authors: "Kamesh R et al.",
    venue: "AACL-IJCNLP 2025, BHASHA Workshop",
    year: 2025,
    type: "workshop",
    selected: true,
  },
];
