"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface IntroLoaderProps {
  onDone: () => void;
}

export default function IntroLoader({ onDone }: IntroLoaderProps) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(onDone, 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg ${
        exiting ? "loader-exit" : ""
      }`}
      aria-hidden="true"
    >
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

      <div className="flex flex-col items-center gap-6 px-8">
        {/* Logo */}
        <div className="logo-animate w-52 sm:w-64 relative">
          <Image
            src="/logo.png"
            alt="Taboo"
            width={520}
            height={280}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Tagline */}
        <p className="tagline-animate font-display text-xl tracking-[0.25em] text-muted uppercase font-light">
          Bar · Pizzeria · Pub
        </p>
      </div>

      {/* Loading bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-16">
        <div className="h-px bg-ink/10 relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-accent"
            style={{
              animation: "loadBar 1.8s ease forwards",
              width: "100%",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes loadBar {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
