import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "HACKATHON 2026 | Birla Institute of Applied Sciences x Coding Blocks",
  description:
    "The premier school & college level hackathon organized by Birla Institute of Applied Sciences in collaboration with Coding Blocks. 24 hours of innovation, building, and ₹25,000 in prizes.",
  keywords: [
    "hackathon",
    "coding",
    "BIAS",
    "Birla Institute of Applied Sciences",
    "Coding Blocks",
    "2026",
    "school hackathon",
    "college hackathon",
    "AI",
    "web development",
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
      <body className={`${inter.className} min-h-screen antialiased selection:bg-[#8B5CF6]/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
