"use client";

import { useState, useEffect, useCallback } from "react";
import { categories, getCategoryName, Lang } from "@/data/menu";
import IntroLoader from "./IntroLoader";
import TopBar from "./TopBar";
import HomeView from "./HomeView";
import CategoryView from "./CategoryView";
import SearchOverlay from "./SearchOverlay";

type View = "home" | "category";

export default function MenuApp() {
  const [lang, setLang] = useState<Lang>("it");
  const [view, setView] = useState<View>("home");
  const [activeCategorySlug, setActiveCategorySlug] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  // null = non ancora controllato (blocca render), true = mostra loader, false = skip
  const [showLoader, setShowLoader] = useState<boolean | null>(null);

  // Controlla sessionStorage una sola volta al mount
  useEffect(() => {
    const seen = sessionStorage.getItem("taboo_intro_seen");
    setShowLoader(!seen);
  }, []);

  const handleLoaderDone = useCallback(() => {
    setShowLoader(false);
    sessionStorage.setItem("taboo_intro_seen", "1");
  }, []);

  const handleSelectCategory = useCallback((slug: string) => {
    setActiveCategorySlug(slug);
    setView("category");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleHome = useCallback(() => {
    setView("home");
    setActiveCategorySlug(null);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const activeCategory = activeCategorySlug
    ? categories.find((c) => c.slug === activeCategorySlug) ?? null
    : null;

  // Browser back button support
  useEffect(() => {
    const handlePopState = () => {
      if (view === "category") handleHome();
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [view, handleHome]);

  useEffect(() => {
    if (view === "category" && activeCategorySlug) {
      window.history.pushState({ category: activeCategorySlug }, "");
    }
  }, [view, activeCategorySlug]);

  // Aspetta il check sessionStorage prima di renderizzare qualsiasi cosa
  if (showLoader === null) return null;

  return (
    <>
      {/* Intro loader (prima visita) */}
      {showLoader && <IntroLoader onDone={handleLoaderDone} />}

      {/* Search overlay */}
      {searchOpen && (
        <SearchOverlay
          lang={lang}
          onClose={() => setSearchOpen(false)}
          onSelectCategory={(slug) => {
            setSearchOpen(false);
            handleSelectCategory(slug);
          }}
        />
      )}

      {/* Main layout — nascosto mentre il loader è attivo */}
      <div className={showLoader ? "invisible" : ""}>
        <TopBar
          lang={lang}
          onLangToggle={() => setLang((l) => (l === "it" ? "en" : "it"))}
          onSearchOpen={() => setSearchOpen(true)}
          onHome={handleHome}
          showBack={view === "category"}
          title={
            view === "category" && activeCategory
              ? getCategoryName(activeCategory, lang)
              : undefined
          }
        />

        {view === "home" && (
          <HomeView lang={lang} onSelectCategory={handleSelectCategory} />
        )}

        {view === "category" && activeCategory && (
          <CategoryView category={activeCategory} lang={lang} />
        )}
      </div>
    </>
  );
}