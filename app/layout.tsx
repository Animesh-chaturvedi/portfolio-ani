import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animesh Chaturvedi | Full-Stack & AI Engineer",
  description: "Tech Lead with 4+ years building scalable mobile and web apps. React Native, Next.js, Node.js, Firebase, AWS, LLMs.",
  openGraph: {
    title: "Animesh Chaturvedi | Full-Stack & AI Engineer",
    description: "Tech Lead with 4+ years building scalable mobile and web apps.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
