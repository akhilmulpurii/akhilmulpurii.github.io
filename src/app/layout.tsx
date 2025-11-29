import type { Metadata } from "next";
import { Geist, Geist_Mono, Rozha_One } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rozhaOne = Rozha_One({
  variable: "--font-rozha",
  subsets: ["devanagari", "latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sai Akhil Mulpuri | Creative Web Developer",
  description:
    "Transforming tomorrow with tech-infused narratives—Sai Akhil Mulpuri builds immersive, motion-first web experiences that are fair and fun for all.",
  keywords: [
    "Sai Akhil Mulpuri",
    "Akhil Mulpuri",
    "creative web developer",
    "Next.js",
    "frontend engineer",
    "motion design",
    "shadcn/ui",
    "Framer Motion",
  ],
  authors: [{ name: "Sai Akhil Mulpuri", url: "https://akhilmulpurii.github.io" }],
  metadataBase: new URL("https://akhilmulpurii.github.io"),
  alternates: {
    canonical: "https://akhilmulpurii.github.io",
  },
  openGraph: {
    title: "Sai Akhil Mulpuri | Creative Web Developer",
    description:
      "Transforming tomorrow with tech-infused narratives—Sai Akhil Mulpuri builds immersive, motion-first web experiences that are fair and fun for all.",
    url: "https://akhilmulpurii.github.io",
    siteName: "Sai Akhil Mulpuri Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Akhil Mulpuri Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Akhil Mulpuri | Creative Web Developer",
    description:
      "Immersive, motion-first web experiences with Next.js, Framer Motion, and shadcn/ui.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable,
          rozhaOne.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
