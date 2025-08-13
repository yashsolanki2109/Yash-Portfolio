import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import dynamic from "next/dynamic";

const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
  ssr: false,
});
const Spotlight = dynamic(() => import("@/components/Spotlight"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio",
  description:
    "A modern portfolio showcasing frontend development skills with React, Next.js, and modern web technologies.",
  keywords: [
    "frontend developer",
    "react",
    "next.js",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Frontend Developer" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} pt-24`}>
        <ThreeBackground />
        <Spotlight />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
