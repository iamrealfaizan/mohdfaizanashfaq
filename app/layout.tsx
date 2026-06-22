import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-heading",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Mohammed Faizan Ashfaq | AI Engineer",
  description:
    "Portfolio of Mohammed Faizan Ashfaq, an AI engineer building production-grade LLM systems, RAG pipelines, and AI-powered products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "scroll-smooth",
        barlow.variable,
        barlowCondensed.variable
      )}
    >
      <body>{children}</body>
    </html>
  );
}
