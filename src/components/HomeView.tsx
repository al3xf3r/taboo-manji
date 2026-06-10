"use client";

import Image from "next/image";
import { categories, restaurantInfo, getCategoryName, Lang } from "@/data/menu";

interface HomeViewProps {
  lang: Lang;
  onSelectCategory: (slug: string) => void;
}

const phoneIcon = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M3 3.5C3 3.5 3 6.5 5.5 9C8 11.5 11 12 11 12L13.5 9.5L15.5 11.5C15.5 11.5 13 14.5 10 13.5C7 12.5 4 9.5 3 6.5C2 3.5 5 1.5 5 1.5L7 3.5L5 5.5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const mapPinIcon = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M9 1.5C6.515 1.5 4.5 3.515 4.5 6C4.5 9.375 9 16.5 9 16.5C9 16.5 13.5 9.375 13.5 6C13.5 3.515 11.485 1.5 9 1.5Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
);

const instagramIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="2" y="2" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.4"/>
    <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
    <circle cx="14.5" cy="5.5" r="1" fill="currentColor"/>
  </svg>
);

const facebookIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M11.5 7H13V5h-1.5C10.12 5 9 6.12 9 7.5V9H7.5v2H9v6h2v-6h1.5L13 9h-2V7.5c0-.276.224-.5.5-.5z" fill="currentColor"/>
  </svg>
);

const theforkIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M7 2v5c0 1.1.9 2 2 2v9M11 2v9M13 2v4c0 .55-.45 1-1 1h-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function HomeView({ lang, onSelectCategory }: HomeViewProps) {
  const info = restaurantInfo;
  const labels = {
    cta: lang === "it" ? "Chiama" : "Call",
    directions: lang === "it" ? "Indicazioni" : "Directions",
    reserve: lang === "it" ? "Prenota" : "Book",
    poweredBy: lang === "it" ? "Sviluppato da" : "Powered by",
    manji: lang === "it" ? "Scopri MANJI" : "Explore MANJI",
  };

  return (
    <main className="max-w-lg mx-auto pb-24">
      {/* Hero strip */}
      <div className="px-4 pt-6 pb-5">
        <h1 className="font-display text-4xl sm:text-5xl font-light tracking-wide text-ink leading-none">
          {info.name}
        </h1>
        <p className="font-body text-sm tracking-[0.2em] uppercase text-muted mt-1.5">
          {info.tagline_it}
        </p>
        <div className="mt-4 h-px bg-ink/8" />
      </div>

      {/* Category grid 2x2 */}
      <section className="px-4">
        <div className="grid grid-cols-2 gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => onSelectCategory(cat.slug)}
              className="category-card group"
              aria-label={getCategoryName(cat, lang)}
            >
              {/* Image */}
              <Image
                src={cat.image}
                alt={getCategoryName(cat, lang)}
                fill
                sizes="(max-width: 512px) 50vw, 256px"
                className="card-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Overlay */}
              <div className="card-overlay" />
              {/* Label */}
              <div className="absolute inset-0 flex items-end p-3">
                <span className="font-display text-white text-xl sm:text-2xl font-medium leading-tight drop-shadow-sm">
                  {getCategoryName(cat, lang)}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Quick actions */}
      <section className="px-4 mt-6 flex gap-2">
        <a
          href={`tel:${info.phone}`}
          className="flex-1 flex items-center justify-center gap-2 h-11 border border-ink/12 bg-bg-card font-body text-sm font-medium text-ink hover:text-accent hover:border-accent/30 transition-colors"
          aria-label={labels.cta}
        >
          {phoneIcon}
          <span>{labels.cta}</span>
        </a>
        <a
          href={info.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 h-11 border border-ink/12 bg-bg-card font-body text-sm font-medium text-ink hover:text-accent hover:border-accent/30 transition-colors"
          aria-label={labels.directions}
        >
          {mapPinIcon}
          <span>{labels.directions}</span>
        </a>
      </section>

      {/* Address */}
      <div className="px-4 mt-3">
        <p className="font-body text-xs text-muted text-center">
          {info.address} — {info.city}
        </p>
      </div>

      {/* Social links */}
      <section className="px-4 mt-6 flex items-center justify-center gap-4">
        <a
          href={info.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-muted hover:text-accent transition-colors"
          aria-label="Instagram"
        >
          {instagramIcon}
        </a>
        <a
          href={info.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-muted hover:text-accent transition-colors"
          aria-label="Facebook"
        >
          {facebookIcon}
        </a>
        <a
          href={info.theforkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-muted hover:text-accent transition-colors"
          aria-label="TheFork"
        >
          {theforkIcon}
        </a>
      </section>

      {/* Divider */}
      <div className="mx-4 mt-8 h-px bg-ink/8" />

      {/* MANJI CTA */}
      <div className="px-4 mt-6 flex flex-col items-center gap-3">
        <a
          href="https://manji.hash42.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent inline-flex items-center gap-2"
        >
          <span>{labels.manji}</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Footer credit */}
      <footer className="mt-8 px-4 pb-6 text-center">
        <p className="font-body text-xs text-muted/50 tracking-wide">
          {labels.poweredBy}{" "}
          <a
            href="https://hash42.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Hash42
          </a>
        </p>
      </footer>
    </main>
  );
}
