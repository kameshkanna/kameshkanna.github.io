export interface Talk {
  title: string;
  venue: string;
  location: string;
  year: number;
  type: "presentation" | "workshop" | "lecture" | "panel" | "talk";
}

export const talks: Talk[] = [
  {
    title: "Controlled Image Generation",
    venue: "Language Technologies Research Center (LTRC), IIIT Hyderabad",
    location: "Hyderabad, India",
    year: 2025,
    type: "presentation",
  },
  {
    title: "Prompt Engineering for Linguistic Research",
    venue: "Language Technologies Research Center (LTRC), IIIT Hyderabad",
    location: "Hyderabad, India",
    year: 2025,
    type: "workshop",
  },
  {
    title: "Safety and Alignment of LLMs",
    venue: "Sathyabama Institute of Science and Technology",
    location: "Chennai, India",
    year: 2025,
    type: "lecture",
  },
  {
    title: "Impact and Application of Generative AI",
    venue: "Google Developer Summit",
    location: "Chennai, India",
    year: 2024,
    type: "panel",
  },
  {
    title: "Introduction to Machine Learning and Scopes",
    venue: "Sathyabama Institute of Science and Technology",
    location: "Chennai, India",
    year: 2024,
    type: "talk",
  },
];
