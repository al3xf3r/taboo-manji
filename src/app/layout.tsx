import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taboo — Bar · Pizzeria · Pub",
  description:
    "Scopri il menù completo di Taboo Bar Pizzeria Pub a Francavilla di Sicilia (ME). Pizza, cucina, panini, bevande e molto altro.",
  keywords: ["taboo", "pizzeria", "bar", "pub", "francavilla di sicilia", "menu", "pizza", "sicilia"],
  openGraph: {
    title: "Taboo — Bar · Pizzeria · Pub",
    description:
      "Scopri il menù completo di Taboo a Francavilla di Sicilia. Pizza, cucina, panini, bevande e molto altro.",
    type: "website",
    url: "https://taboo-manji.vercel.app",
    siteName: "Taboo",
    images: [
      {
        url: "/og-taboo.jpg",
        width: 1280,
        height: 640,
        alt: "Taboo Bar Pizzeria Pub — Francavilla di Sicilia",
      },
    ],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taboo — Bar · Pizzeria · Pub",
    description: "Scopri il menù completo di Taboo a Francavilla di Sicilia.",
    images: ["/og-taboo.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E8E5E0",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-body bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}