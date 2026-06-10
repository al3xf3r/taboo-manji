"use client";

import Image from "next/image";
import FadeImage from "./FadeImage";
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
    <path d="M6 2v4c0 1.1.9 2 2 2v10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M6 2v4M8 2v4M10 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M14 2c0 0 2 1.5 2 4s-2 3-2 3v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function HomeView({ lang, onSelectCategory }: HomeViewProps) {
  const info = restaurantInfo;
  const labels = {
    cta: lang === "it" ? "Chiama" : "Call",
    directions: lang === "it" ? "Indicazioni" : "Directions",
    reserve: lang === "it" ? "Prenota" : "Book",
    poweredBy: lang === "it" ? "Sviluppato da" : "Powered by",
    manji: lang === "it" ? "Crea il tuo menù digitale" : "Create your digital menu",
    orari: lang === "it" ? "Orari" : "Hours",
    chiuso: lang === "it" ? "Chiuso" : "Closed",
  };

  const orari = [
    { day: lang === "it" ? "Lunedì" : "Monday",    hours: null },
    { day: lang === "it" ? "Martedì" : "Tuesday",  hours: "18:00 – 01:00" },
    { day: lang === "it" ? "Mercoledì" : "Wednesday", hours: "18:00 – 01:00" },
    { day: lang === "it" ? "Giovedì" : "Thursday", hours: "18:00 – 01:00" },
    { day: lang === "it" ? "Venerdì" : "Friday",   hours: "18:00 – 02:00" },
    { day: lang === "it" ? "Sabato" : "Saturday",  hours: "18:00 – 03:00" },
    { day: lang === "it" ? "Domenica" : "Sunday",  hours: "18:00 – 02:00" },
  ];

  // Determine today
  const todayIndex = new Date().getDay(); // 0=Sun, 1=Mon ...
  const orariIndex = [6, 0, 1, 2, 3, 4, 5]; // map JS day → orari array index
  const todayOrariIdx = orariIndex[todayIndex];

  return (
    <main className="max-w-lg mx-auto">
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
              <FadeImage
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
        <a href={info.instagramUrl} target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-muted hover:text-accent transition-colors"
          aria-label="Instagram">{instagramIcon}</a>
        <a href={info.facebookUrl} target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-muted hover:text-accent transition-colors"
          aria-label="Facebook">{facebookIcon}</a>
        <a href={info.theforkUrl} target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-muted hover:text-accent transition-colors"
          aria-label="TheFork">{theforkIcon}</a>
      </section>

      {/* ── RED FOOTER ── */}
      <footer className="mt-10 bg-accent text-white">
        {/* Orari */}
        <div className="px-6 pt-8 pb-6">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-white/50 mb-4">
            {labels.orari}
          </p>
          <div className="space-y-2">
            {orari.map((row, i) => {
              const isToday = i === todayOrariIdx;
              return (
                <div
                  key={row.day}
                  className={`flex justify-between items-center font-body text-sm ${
                    isToday ? "text-white font-semibold" : "text-white/70"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isToday && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    )}
                    {!isToday && <span className="inline-block w-1.5 h-1.5 shrink-0" />}
                    {row.day}
                  </span>
                  <span>{row.hours ?? labels.chiuso}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-white/15" />

        {/* MANJI CTA */}
        <div className="px-6 py-7 flex flex-col items-center gap-5">
          <a
            href="https://manji.hash42.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-white text-accent font-body font-semibold text-sm tracking-widest uppercase px-6 py-4 transition-all duration-200 hover:bg-white/90 active:scale-95"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M5 7h6M5 10h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            <span>{labels.manji}</span>
          </a>

          {/* Credit */}
          <div className="text-center">
            <p className="font-body text-xs text-white/40 tracking-widest uppercase mb-1">
              {labels.poweredBy}
            </p>
            <a
              href="https://hash42.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xl font-medium text-white/80 hover:text-white transition-colors tracking-wide"
            >
              Hash42
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
