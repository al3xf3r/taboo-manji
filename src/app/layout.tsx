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
    "Menù digitale di Taboo Bar Pizzeria Pub — Via Antonio Gramsci 19, Francavilla di Sicilia (ME)",
  keywords: ["taboo", "pizzeria", "bar", "pub", "francavilla di sicilia", "menu"],
  openGraph: {
    title: "Taboo — Bar · Pizzeria · Pub",
    description: "Scopri il menù completo di Taboo a Francavilla di Sicilia",
    type: "website",
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
