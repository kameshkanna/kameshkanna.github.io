export const profile = {
  name: "Kamesh R",
  tagline: "ML Researcher & Engineer",
  bio: `I'm a machine learning researcher broadly interested in AI safety, mechanistic interpretability,
and reasoning in language models. Currently a Machine Learning Intern at Glance, working on catalog
retrieval at scale, and an incoming MSc student in Machine Learning at UCL (Aug 2026).
I'm particularly drawn to questions about how models represent and manipulate concepts internally —
and how we might use that understanding to build safer, more reliable systems.`,
  email: "kameshrajeshkanna@outlook.com",
  location: "Bengaluru, India",
  links: {
    github: "https://github.com/kameshkanna",
    twitter: "https://twitter.com/edkamesh",
    scholar: "https://scholar.google.co.in/citations?user=9TREU28AAAAJ",
    linkedin: "YOUR_LINKEDIN_URL",
    lesswrong: "YOUR_LESSWRONG_URL",
    cv: "/cv.pdf",
  },
  currentFocus: [
    "Catalog retrieval pipelines and embedding techniques at Glance",
    "Scaling experiments on AI control protocol topologies (AI Safety Camp)",
    "MoE interpretability and routing dynamics (Lambda Labs grant)",
  ],
} as const;
