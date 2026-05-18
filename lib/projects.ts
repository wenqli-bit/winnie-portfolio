export type ProjectCategory = "ml-ai" | "data-analytics" | "entrepreneurial" | "coursework";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  featured?: boolean;
  cover?: string; // path under /public
  stack: string[];
  summary: string;
  // Long-form fields (used on project detail page)
  when?: string;
  why?: string;
  what?: string;
  how?: string;
  insights?: string[];
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    slug: "news-recommender",
    title: "News Recommendation System",
    tagline: "LSTM + Attention · 90.77% Top-50 Accuracy",
    category: "ml-ai",
    categoryLabel: "ML / AI",
    featured: true,
    stack: ["PyTorch", "Pandas", "FastAPI", "D3.js"],
    summary:
      "Modeled 1.1M user click events as a deep-learning sequence prediction problem. Compared baseline LSTM with a Multi-Head Attention variant; the attention-augmented model lifted Top-50 accuracy from 89.70% to 90.77%.",
    when: "Spring 2024",
    why: "Personalized recommendation is the engine behind every modern content platform. I wanted to take a real industrial-scale clickstream and build a recommender end-to-end — from EDA, through model design, to a deployable inference service.",
    what:
      "An end-to-end pipeline that ingests 1.1M user clicks across 31K news articles, fuses item embeddings with user context features (device, OS, locale, source), and trains two sequence models — a vanilla LSTM and an LSTM augmented with Multi-Head Self-Attention — to predict the user's next click.",
    how:
      "Used pandas for cleaning and label-encoding, PyTorch for both models, and a custom Top-K accuracy metric. Trained for 300 / 250 epochs with Adam; sampled negative examples 1:1 to balance training. Wrapped the trained model in a FastAPI service and deployed to HuggingFace Spaces for the live demo.",
    insights: [
      "Multi-Head Attention improved Top-50 accuracy by ~1.07 points (89.70% → 90.77%)",
      "Training accuracy climbed to 99% while test stayed at ~90% — clear over-fitting signal that informed regularization next steps",
      "92% of users came from mobile devices, driving a lightweight-model design decision",
    ],
    links: [
      { label: "Code on GitHub", href: "#" },
      { label: "Live Demo", href: "#demo" },
      { label: "Technical write-up", href: "#" },
    ],
  },
  {
    slug: "briskstarter",
    title: "BriskStarter",
    tagline: "Creative-goods venture I founded",
    category: "entrepreneurial",
    categoryLabel: "Entrepreneurial",
    stack: ["Product", "Branding", "Operations", "Marketing"],
    summary:
      "A campus venture committed to making designers' ideas come alive — organizing creative competitions, running pop-up exhibitions, and producing limited-edition handmade goods.",
    when: "2022 – 2024",
    why: "I love making things with my hands as much as I love analyzing data. BriskStarter started as a way to give other student-designers a stage — and turned into a real micro-business with real revenue.",
    what:
      "Founded and operated a student-led creative venture. Organized competitions, ran exhibitions, produced handmade product lines (illustrations, woven goods, laser-cut wooden boxes), and led a 6-person team.",
    how:
      "Designed brand identity from scratch, coordinated with vendors, ran social campaigns, hosted in-person exhibitions and competitions on campus.",
    insights: [
      "Built a recognizable brand and team of 6+ collaborators",
      "Ran multiple successful campus exhibitions with hundreds of visitors",
      "Bridged creative and analytical sides — same brain, two outputs",
    ],
    links: [{ label: "Press / write-ups", href: "#" }],
  },
  // Placeholder — duplicate this block to add more projects.
  // {
  //   slug: "your-next-project",
  //   title: "Your Next Project",
  //   tagline: "One-liner",
  //   category: "data-analytics",
  //   categoryLabel: "Data Analytics",
  //   stack: ["SQL", "Tableau", "Python"],
  //   summary: "Short description.",
  // },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const categories: { key: ProjectCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ml-ai", label: "ML / AI" },
  { key: "data-analytics", label: "Data Analytics" },
  { key: "entrepreneurial", label: "Entrepreneurial" },
  { key: "coursework", label: "Coursework" },
];
