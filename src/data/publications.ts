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
      "Probing Reasoning Flaws and Safety Hierarchies with Chain-of-Thought Difference Amplification",
    authors: "Kamesh R",
    venue: "NeurIPS 2025, LLM-Evals Workshop",
    year: 2025,
    type: "workshop",
    selected: true,
  },
  {
    title:
      "Global PIQA: Evaluating Physical Commonsense Reasoning Across 100+ Languages and Cultures",
    authors: "Kamesh R",
    venue: "Preprint",
    year: 2025,
    type: "preprint",
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
  {
    title: "PerplexMATH: Steering LLMs Toward Mathematical Reasoning",
    authors: "Jerome Francis, Kamesh R, Serena Pei",
    venue: "ICML 2025, NewInML Workshop (Poster)",
    year: 2025,
    type: "workshop",
    links: { poster: "#" },
    selected: false,
  },
];
