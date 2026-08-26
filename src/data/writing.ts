export interface WritingPost {
  title: string;
  summary: string;
  date: string;
  url: string;
}

export const writing: WritingPost[] = [
  {
    title: "Exploring Generalization in NLA's",
    summary:
      "Reproduction and follow-on experiments on Anthropic's neural network activation work, focused on training architecture and generalization as they relate to steering.",
    date: "2026-06-25",
    url: "https://www.lesswrong.com/posts/tkiSQBuA8yj2tHNdv/exploring-generalization-in-nla-s",
  },
  {
    title: "Calibrating Activation Vectors using Norm",
    summary:
      "Activation steering usually hand-tunes injection magnitude. This post looks at calibrating vector norms directly instead of applying a uniform scale across layers.",
    date: "2026-06-12",
    url: "https://www.lesswrong.com/posts/JwQpzdk4kQsYdhg4N/calibrating-activation-vectors-using-norm",
  },
];
