"use client";

import { useState, useEffect, useCallback } from "react";
import { getCategoryName, Lang } from "@/data/menu";
import type { MenuCategory } from "@/data/menu";
import IntroLoader from "./IntroLoader";
import TopBar from "./TopBar";
import HomeView from "./HomeView";
import CategoryView from "./CategoryView";
import SearchOverlay from "./SearchOverlay";

type View = "home" | "category";

interface MenuAppProps {
  initialCategories: MenuCategory[];
}

export default function MenuApp({ initialCategories }: MenuAppProps) {
  const [lang, setLang] = useState<Lang>("it");
  const [view, setView] = useState<View>("home");
  const [activeCategorySlug, setActiveCategorySlug] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showLoader, setShowLoader] = useState<boolean | null>(null);

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
    ? initialCategories.find((c) => c.slug === activeCategorySlug) ?? null
    : null;

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

  if (showLoader === null) return null;

  return (
    <>
      {showLoader && <IntroLoader onDone={handleLoaderDone} />}

      {searchOpen && (
        <SearchOverlay
          lang={lang}
          categories={initialCategories}
          onClose={() => setSearchOpen(false)}
          onSelectCategory={(slug) => {
            setSearchOpen(false);
            handleSelectCategory(slug);
          }}
        />
      )}

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
          <HomeView
            lang={lang}
            categories={initialCategories}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {view === "category" && activeCategory && (
          <CategoryView category={activeCategory} lang={lang} />
        )}
      </div>
    </>
  );
}