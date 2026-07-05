"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  getItemName,
  getItemDescription,
  getCategoryName,
  Lang,
  MenuCategory,
  MenuItem,
} from "@/data/menu";

interface SearchOverlayProps {
  categories: MenuCategory[];
  lang: Lang;
  onClose: () => void;
  onSelectCategory: (slug: string) => void;
}

function highlight(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="highlight-match">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function SearchOverlay({ lang, categories, onClose, onSelectCategory }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const allItems = categories.flatMap(cat => cat.items.map(item => ({ item, category: cat })));

  useEffect(() => {
    inputRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  const filtered = query.trim().length >= 2
    ? allItems.filter(({ item, category }) => {
        const q = query.toLowerCase();
        const name = getItemName(item, lang).toLowerCase();
        const desc = (getItemDescription(item, lang) ?? "").toLowerCase();
        const cat = getCategoryName(category, lang).toLowerCase();
        return name.includes(q) || desc.includes(q) || cat.includes(q);
      })
    : [];

  // Group by category
  const grouped = filtered.reduce<Record<string, { cat: MenuCategory; items: MenuItem[] }>>(
    (acc, { item, category }) => {
      if (!acc[category.slug]) acc[category.slug] = { cat: category, items: [] };
      acc[category.slug].items.push(item);
      return acc;
    },
    {}
  );

  const placeholders = {
    it: "Cerca pizza, pasta, birra…",
    en: "Search pizza, pasta, beer…",
  };

  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-bg animate-fade-in">
      {/* Header */}
      <div className="border-b border-ink/8 px-4 py-3 flex items-center gap-3">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-muted shrink-0" aria-hidden="true">
          <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholders[lang]}
          className="flex-1 bg-transparent font-body text-base text-ink placeholder:text-muted outline-none"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
        />
        <button
          onClick={onClose}
          className="font-body text-sm text-muted hover:text-accent transition-colors shrink-0"
          aria-label="Chiudi"
        >
          {lang === "it" ? "Chiudi" : "Close"}
        </button>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto">
        {query.trim().length >= 2 && filtered.length === 0 && (
          <div className="px-4 py-12 text-center">
            <p className="font-display text-2xl text-muted font-light">
              {lang === "it" ? "Nessun risultato" : "No results"}
            </p>
            <p className="font-body text-sm text-muted/60 mt-2">
              {lang === "it" ? `Nulla trovato per "${query}"` : `Nothing found for "${query}"`}
            </p>
          </div>
        )}

        {query.trim().length >= 2 && filtered.length > 0 && (
          <div className="divide-y divide-ink/6">
            {Object.values(grouped).map(({ cat, items }) => (
              <div key={cat.slug}>
                <button
                  onClick={() => { onSelectCategory(cat.slug); onClose(); }}
                  className="w-full text-left px-4 pt-4 pb-1 flex items-center gap-2 group"
                >
                  <span className="badge-label group-hover:text-accent transition-colors">
                    {getCategoryName(cat, lang)}
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-muted group-hover:text-accent transition-colors">
                    <path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {items.map((item, i) => {
                  const name = getItemName(item, lang);
                  const desc = getItemDescription(item, lang);
                  const price = item.price ?? item.prices?.panino ?? item.sizes?.piccola;
                  return (
                    <button
                      key={i}
                      onClick={() => { onSelectCategory(cat.slug); onClose(); }}
                      className="w-full text-left px-4 py-3 flex items-start justify-between gap-3 hover:bg-bg-card transition-colors"
                    >
                      <div className="min-w-0">
                        <p className="font-display text-lg font-medium leading-tight">
                          {highlight(name, query)}
                        </p>
                        {desc && (
                          <p className="font-body text-xs text-muted mt-0.5 leading-relaxed line-clamp-2">
                            {highlight(desc, query)}
                          </p>
                        )}
                      </div>
                      {price !== undefined && (
                        <span className="price-pill shrink-0 mt-0.5">€{price.toFixed(2)}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        )}

        {query.trim().length < 2 && (
          <div className="px-4 py-10 text-center">
            <p className="font-body text-sm text-muted">
              {lang === "it" ? "Digita almeno 2 caratteri" : "Type at least 2 characters"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}