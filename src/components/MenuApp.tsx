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
  const [showLoader, setShowLoader] = useState(false);

  // Check sessionStorage for intro
  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("taboo_intro_seen");
    if (!seen) {
      setShowLoader(true);
    }
  }, []);

  const handleLoaderDone = useCallback(() => {
    setShowLoader(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("taboo_intro_seen", "1");
    }
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

  return (
    <>
      {/* Intro loader (first visit) */}
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

      {/* Main layout */}
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
