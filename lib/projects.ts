export type ProjectCategory = "ml-ai" | "data-analytics" | "entrepreneurial" | "coursework";

export interface Figure {
  src: string;
  caption: string;
  span?: "half" | "full";
}

export interface StarSection {
  key: "overview" | "data" | "model" | "results";
  eyebrow: string;
  title: string;
  body: string[];
  figures?: Figure[];
  callouts?: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  featured?: boolean;
  cover?: string;
  stack: string[];
  summary: string;
  star?: StarSection[];
  insights?: string[];
  links?: { label: string; href: string }[];
  visualGallery?: Figure[];
  heroStats?: { value: string; label: string; accent?: boolean }[];
  comparison?: {
    title: string;
    rows: { metric: string; baseline: string; variant: string; delta?: string }[];
  };
}

export const projects: Project[] = [
  {
    slug: "news-recommender",
    title: "News Recommendation System",
    tagline: "LSTM + Multi-Head Attention - 90.77% Top-50 Accuracy",
    category: "ml-ai",
    categoryLabel: "ML / AI",
    featured: true,
    stack: ["PyTorch", "Pandas", "FastAPI", "HuggingFace", "D3.js"],
    summary:
      "An end-to-end recommender trained on 1,112,623 user clicks and 31,116 news articles, comparing a baseline LSTM with an attention-augmented variant.",
    heroStats: [
      { value: "1.1M+", label: "User clicks" },
      { value: "31,116", label: "News articles" },
      { value: "90.77%", label: "Top-50 accuracy", accent: true },
      { value: "+1.07pp", label: "Attention lift" },
    ],
    star: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Predicting the next article from sparse click histories.",
        body: [
          "This **solo project** builds an **end-to-end news recommender** that ranks likely next-click articles from a user's recent click history and context signals. I handled **preprocessing**, **negative sampling**, **PyTorch modeling**, **evaluation**, and the **FastAPI demo wrapper**.",
        ],
        callouts: ["Solo project", "End-to-end ML pipeline", "FastAPI demo wrapper"],
      },
      {
        key: "data",
        eyebrow: "Data",
        title: "1.1M clicks, 31K articles, and highly uneven user histories.",
        body: [
          "The dataset contains **1,112,623 click events** joined with **250-dimensional article embeddings** and context features including device, operating system, district, country, and source. Because most users clicked only a few articles, I used **1:1 positive/negative sampling** to reduce popularity bias across **31,116 candidate articles**.",
        ],
        figures: [
          {
            src: "/projects/news-rec/eda-user-clicks-hist-en.png",
            caption:
              "User activity is heavily long-tailed, which shaped the sampling strategy and evaluation design.",
            span: "full",
          },
        ],
        callouts: ["1,112,623 clicks", "31,116 articles", "250-dim news embeddings", "1:1 negative sampling"],
      },
      {
        key: "model",
        eyebrow: "Model",
        title: "Baseline LSTM vs. LSTM with multi-head attention.",
        body: [
          "I trained a **baseline LSTM** model, then added **multi-head self-attention** over the LSTM outputs. The final variant used **LSTM(hidden=64)** with **2 attention heads**, **CrossEntropy loss**, and **Adam (lr=1e-3)** so the model could assign different importance to each click before producing ranked recommendations.",
        ],
        callouts: [
          "Baseline: LSTM(hidden=64) -> Linear",
          "Variant: LSTM + MultiHeadAttention(2 heads)",
          "Loss: CrossEntropy",
          "Optimizer: Adam, lr=1e-3",
        ],
      },
      {
        key: "results",
        eyebrow: "Results",
        title: "The attention model improved Top-50 accuracy to 90.77%.",
        body: [
          "The **LSTM + Attention** model improved Top-50 accuracy from **89.70% to 90.77%**, a **+1.07 percentage-point lift** over the baseline. The training curves also highlighted the next engineering step: stronger regularization and a time-aware validation split.",
        ],
        figures: [
          {
            src: "/projects/news-rec/curves-lstm-en.png",
            caption:
              "Baseline LSTM training curves across 300 epochs.",
            span: "half",
          },
          {
            src: "/projects/news-rec/curves-attention-en.png",
            caption:
              "LSTM with multi-head attention converged to a lower loss and achieved the strongest Top-50 accuracy.",
            span: "half",
          },
        ],
        callouts: ["89.70% -> 90.77%", "+1.07pp lift", "Overfitting risk identified"],
      },
    ],
    comparison: {
      title: "Model comparison",
      rows: [
        { metric: "Top-50 accuracy (test)", baseline: "89.70%", variant: "90.77%", delta: "+1.07 pp" },
        { metric: "Final train loss", baseline: "2.46", variant: "1.33", delta: "-46%" },
        { metric: "Epochs to converge", baseline: "about 250", variant: "about 200", delta: "-20%" },
        { metric: "Architecture", baseline: "LSTM only", variant: "LSTM + 2 attention heads" },
      ],
    },
    insights: [
      "Balanced negative sampling prevented popularity-only recommendations.",
      "Attention made the click history more selective instead of treating every click equally.",
      "The train/test gap pointed to the next improvement: time-aware validation and stronger regularization.",
    ],
    links: [
      { label: "Code on GitHub", href: "https://github.com/wenqli-bit/winnie-portfolio" },
      { label: "Try the live demo", href: "/#demo" },
      { label: "Full notebook", href: "https://github.com/wenqli-bit/winnie-portfolio" },
    ],
  },
  {
    slug: "seattle-smart-parking",
    title: "Seattle Smart Parking Initiative",
    tagline: "Tableau analysis for demand-based parking pricing and mobility funding",
    category: "data-analytics",
    categoryLabel: "Data Analytics",
    cover: "/projects/seattle-parking/Seattle_Smart_Parking_Slide.jpg",
    stack: ["Tableau", "CSV", "Geospatial Analysis", "Public Data", "Policy Analytics"],
    summary:
      "A team Tableau project analyzing Seattle paid parking transactions, payment behavior, revenue patterns, and bike infrastructure to propose a demand-based parking rate strategy.",
    heroStats: [
      { value: "157K", label: "Parking transactions" },
      { value: "$633K", label: "Monthly revenue" },
      { value: "$1.3M", label: "Projected annual uplift", accent: true },
      { value: "82.7%", label: "Mobile pay share" },
    ],
    star: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Turning parking demand into mobility funding.",
        body: [
          "This project uses **Seattle paid parking transactions** and **SDOT bike facility data** to evaluate where parking demand is highest and how a targeted rate adjustment could fund broader mobility improvements.",
        ],
        figures: [
          {
            src: "/projects/seattle-parking/Seattle_Smart_Parking_Slide.jpg",
            caption:
              "Final presentation summary: demand-tier pricing, revenue impact, and proposed funding allocation.",
            span: "full",
          },
        ],
      },
      {
        key: "data",
        eyebrow: "Data",
        title: "Parking transactions, revenue, payment type, and bike infrastructure.",
        body: [
          "The Tableau workbook combines **paid parking transactions**, **blockface-level revenue summaries**, **bike facility records**, and a small revenue allocation table. Key fields include amount paid, duration, payment method, blockface, latitude/longitude, day of week, and time of day.",
        ],
      },
      {
        key: "model",
        eyebrow: "Analysis",
        title: "Segmenting demand by parking duration and location.",
        body: [
          "The analysis groups parking activity into **high**, **medium**, and **low demand tiers** based on parking duration. Longer stays were treated as stronger demand signals, then mapped back to blockfaces and revenue to estimate rate-adjustment impact.",
        ],
      },
      {
        key: "results",
        eyebrow: "Outcome",
        title: "A projected $1.3M annual uplift for transit, safety, and bike infrastructure.",
        body: [
          "The proposed pricing scenario applies **+25%** to high-demand sessions and **+10%** to medium-demand sessions, producing an estimated **$1,305,652 annual revenue uplift** and a new annual total of **$8,911,716**. The final recommendation allocates the uplift across **transit**, **security**, **bike infrastructure**, and **administration**.",
        ],
      },
    ],
    comparison: {
      title: "Scenario impact",
      rows: [
        { metric: "Current annual revenue", baseline: "$7,606,068", variant: "$7,606,068" },
        { metric: "High-demand rate change", baseline: "Current rate", variant: "+25%", delta: "7,805 txns" },
        { metric: "Medium-demand rate change", baseline: "Current rate", variant: "+10%", delta: "6,095 txns" },
        { metric: "Projected annual revenue", baseline: "$7,606,068", variant: "$8,911,716", delta: "+$1,305,652" },
      ],
    },
    visualGallery: [
      {
        src: "/projects/seattle-parking/parking-transaction-heatmap.png",
        caption:
          "Transaction heatmap showing when Seattle curb demand concentrates by day and hour.",
        span: "full",
      },
      {
        src: "/projects/seattle-parking/payment-method-mix.png",
        caption:
          "Payment-method mix highlighting mobile payment dominance across paid parking transactions.",
      },
      {
        src: "/projects/seattle-parking/top-revenue-uplift-blockfaces.png",
        caption:
          "Street-level prioritization view ranking blockfaces by estimated incremental revenue.",
      },
      {
        src: "/projects/seattle-parking/bike-facilities-by-district.png",
        caption:
          "Bike facility distribution by district, used to connect parking revenue with mobility reinvestment.",
      },
      {
        src: "/projects/seattle-parking/revenue-uplift-allocation.png",
        caption:
          "Policy-facing allocation graphic translating projected uplift into transit, safety, bike, and admin funding.",
      },
      {
        src: "/projects/seattle-parking/Seattle_Smart_Parking_Slide.jpg",
        caption:
          "Final executive summary slide combining data inputs, pricing tiers, revenue impact, and allocation.",
        span: "full",
      },
    ],
    insights: [
      "Duration-based demand tiers made the pricing recommendation easy to explain.",
      "Mobile payment dominance suggested a strong digital adoption pattern in Seattle parking behavior.",
      "The final recommendation connected revenue analytics to policy outcomes, not just dashboard metrics.",
    ],
    links: [{ label: "Tableau packaged workbook", href: "#" }],
  },
  {
    slug: "briskstarter",
    title: "BriskStarter",
    tagline: "Creative-goods venture I founded",
    category: "entrepreneurial",
    categoryLabel: "Entrepreneurial",
    stack: ["Product", "Branding", "Operations", "Marketing"],
    summary:
      "A campus venture committed to making designers' ideas come alive through competitions, pop-up exhibitions, and handmade goods.",
    star: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Student designers needed a more visible stage.",
        body: [
          "BriskStarter began as a creative outlet and became a small campus venture for showcasing student design work.",
        ],
      },
      {
        key: "data",
        eyebrow: "Goal",
        title: "Build a recognizable brand and operating rhythm.",
        body: [
          "I led branding, vendor coordination, event planning, and team operations for a six-person student team.",
        ],
      },
      {
        key: "model",
        eyebrow: "Action",
        title: "Turned creative ideas into physical products and events.",
        body: [
          "We organized competitions, ran exhibitions, produced handmade product lines, and marketed them through campus channels.",
        ],
      },
      {
        key: "results",
        eyebrow: "Result",
        title: "Built a bridge between creative work and product execution.",
        body: [
          "The project grew into a real team with repeated events, campus visibility, and a stronger sense of creative leadership.",
        ],
      },
    ],
    insights: [
      "Built a recognizable brand and team of 6+ collaborators",
      "Ran multiple campus exhibitions with hundreds of visitors",
      "Connected creative judgment with product and operations discipline",
    ],
    links: [{ label: "Press / write-ups", href: "#" }],
  },
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
