export const profile = {
  name: "Kamesh R",
  email: "kameshrajeshkanna@outlook.com",
  location: "Bengaluru, India",
  bio: [
    `Hi, I'm Kamesh. I'm from Chennai and I study machine learning.`,
    `Right now I'm an ML intern at Glance, working on catalog retrieval — figuring out how to surface the right content to the right people at scale. In August I'm moving to London to start an MSc in Machine Learning at UCL.`,
    `Most of my research is about AI safety and interpretability. I want to understand what's actually happening inside language models — and whether that understanding can help us build systems that stay safe by default, not just at inference time. I've been working on permanently embedding steering vectors into model weights (so safety behaviors don't require runtime overhead), and on scaling experiments for AI control protocols through AI Safety Camp.`,
    `I also work on reasoning and evaluation: benchmarks that test how models handle commonsense reasoning across languages and cultures, and probing where chain-of-thought reasoning breaks down.`,
    `Outside work: I'm Tamil, from Chennai, and I follow Liverpool FC obsessively.`,
  ],
  links: {
    github: "https://github.com/kameshkanna",
    twitter: "https://twitter.com/edkamesh",
    scholar: "https://scholar.google.co.in/citations?user=9TREU28AAAAJ",
    linkedin: "https://www.linkedin.com/in/kamesh-r/",
    lesswrong: "YOUR_LESSWRONG_URL",
    cv: "/cv.pdf",
  },
} as const;
