export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Languages & Tools",
    items: ["Python", "C++", "SQL", "JAX", "Linux", "WandB", "Modal"],
  },
  {
    label: "ML Frameworks",
    items: ["PyTorch", "JAX", "Transformers (HF)", "DeepSpeed", "vLLM", "TRL", "Unsloth"],
  },
  {
    label: "Libraries",
    items: [
      "NumPy",
      "SciPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Datasets (HF)",
    ],
  },
];
