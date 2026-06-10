"use client";

import Image from "next/image";
import { Lang } from "@/data/menu";

interface TopBarProps {
  lang: Lang;
  onLangToggle: () => void;
  onSearchOpen: () => void;
  onHome: () => void;
  showBack?: boolean;
  title?: string;
}

export default function TopBar({
  lang,
  onLangToggle,
  onSearchOpen,
  onHome,
  showBack = false,
  title,
}: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 bg-bg border-b border-ink/8">
      <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between gap-3">
        {/* Left: back or logo */}
        <div className="flex items-center gap-3 min-w-0">
          {showBack ? (
            <button
              onClick={onHome}
              className="flex items-center gap-2 text-ink/70 hover:text-accent transition-colors shrink-0"
              aria-label="Torna alla home"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M12 15l-5-5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {title && (
                <span className="font-display text-lg font-medium text-ink leading-none truncate max-w-[180px]">
                  {title}
                </span>
              )}
            </button>
          ) : (
            <button onClick={onHome} className="shrink-0" aria-label="Home">
              <Image
                src="/logo.png"
                alt="Taboo"
                width={80}
                height={42}
                className="h-8 w-auto object-contain"
                priority
              />
            </button>
          )}
        </div>

        {/* Right: search + lang */}
        <div className="flex items-center gap-1 shrink-0">
          {/* Search */}
          <button
            onClick={onSearchOpen}
            className="w-9 h-9 flex items-center justify-center text-ink/60 hover:text-accent transition-colors"
            aria-label="Cerca nel menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Lang toggle */}
          <button
            onClick={onLangToggle}
            className="h-9 px-2.5 font-body text-xs font-medium tracking-widest uppercase text-ink/50 hover:text-accent transition-colors"
            aria-label={lang === "it" ? "Switch to English" : "Passa all'Italiano"}
          >
            {lang === "it" ? "EN" : "IT"}
          </button>
        </div>
      </div>
    </header>
  );
}
