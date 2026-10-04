import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TechSpark 2026 | School Innovation Hackathon",
  description:
    "TechSpark is a school-level innovation hackathon where students identify a real problem, choose a technology track — Web Development, Android App or AI & Innovation — build a prototype in 7 days and present it to a judging panel.",
  keywords: [
    "TechSpark",
    "school hackathon",
    "innovation hackathon",
    "web development",
    "android app",
    "AI hackathon",
    "student hackathon",
    "prototype",
    "school students",
    "technology",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${urbanist.className} min-h-screen antialiased selection:bg-[#8B5CF6]/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
