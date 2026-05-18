import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://winnieli.dev"),
  title: "Winnie Li — Data Scientist · UW",
  description:
    "Data Scientist and UW Master's candidate. I turn 1.1M data points into stories people actually understand.",
  keywords: [
    "Winnie Li",
    "Wenqing Li",
    "Data Scientist",
    "University of Washington",
    "Machine Learning",
    "Recommendation System",
    "Portfolio",
  ],
  authors: [{ name: "Wenqing (Winnie) Li" }],
  openGraph: {
    title: "Winnie Li — Data Scientist · UW",
    description: "I turn 1.1M data points into stories people actually understand.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winnie Li — Data Scientist · UW",
    description: "I turn 1.1M data points into stories people actually understand.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
