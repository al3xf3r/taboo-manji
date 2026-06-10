"use client";

import Image from "next/image";
import FadeImage from "./FadeImage";
import {
  MenuCategory,
  MenuItem,
  Lang,
  getItemName,
  getItemDescription,
} from "@/data/menu";

interface CategoryViewProps {
  category: MenuCategory;
  lang: Lang;
}

function formatPrice(price: number) {
  return `€${price.toFixed(2)}`;
}

function ItemCard({ item, lang }: { item: MenuItem; lang: Lang }) {
  const name = getItemName(item, lang);
  const desc = getItemDescription(item, lang);
  const hasDualPrice = !!item.prices;
  const hasSizes = !!item.sizes;

  return (
    <div className="py-4 border-b border-ink/6 last:border-0 animate-slide-up">
      <div className="flex items-start justify-between gap-4">
        {/* Name + description */}
        <div className="min-w-0 flex-1">
          {item.badge && (
            <span className="badge-label block mb-1">{item.badge}</span>
          )}
          <h3 className="font-display text-xl font-medium leading-tight text-ink">
            {name}
          </h3>
          {desc && (
            <p className="font-body text-xs text-muted mt-1 leading-relaxed">
              {desc}
            </p>
          )}
        </div>

        {/* Price(s) */}
        <div className="shrink-0 text-right mt-0.5">
          {item.price !== undefined && (
            <span className="price-pill font-semibold text-base">
              {formatPrice(item.price)}
            </span>
          )}

          {hasDualPrice && item.prices && (
            <div className="flex flex-col items-end gap-0.5">
              <div className="flex items-center gap-1.5">
                <span className="badge-label">
                  {lang === "it" ? "Panino" : "Sandwich"}
                </span>
                <span className="price-pill font-medium">
                  {formatPrice(item.prices.panino)}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="badge-label">Piadina</span>
                <span className="price-pill font-medium">
                  {formatPrice(item.prices.piadina)}
                </span>
              </div>
            </div>
          )}

          {hasSizes && item.sizes && (
            <div className="flex flex-col items-end gap-0.5">
              <div className="flex items-center gap-1.5">
                <span className="badge-label">
                  {lang === "it" ? "Piccola" : "Small"}
                </span>
                <span className="price-pill font-medium">
                  {formatPrice(item.sizes.piccola)}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="badge-label">
                  {lang === "it" ? "Grande" : "Large"}
                </span>
                <span className="price-pill font-medium">
                  {formatPrice(item.sizes.grande)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Group sandwiches by type for better readability
const sandwichGroups: Record<string, { it: string; en: string }> = {
  toast: { it: "Big Toast", en: "Big Toast" },
  panozzo: { it: "Panozzi di Pizza", en: "Pizza Rolls" },
  burger: { it: "Panini al Piatto", en: "Plate Burgers" },
};

// Group kitchen items by badge
function groupByBadge(items: MenuItem[]): Record<string, MenuItem[]> {
  return items.reduce<Record<string, MenuItem[]>>((acc, item) => {
    const key = item.badge ?? "—";
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}

const badgeOrder = ["Antipasto", "Primo", "Secondo", "Insalata", "—"];
const badgeLabels: Record<string, { it: string; en: string }> = {
  Antipasto: { it: "Antipasti", en: "Starters" },
  Primo: { it: "Primi Piatti", en: "First Courses" },
  Secondo: { it: "Secondi Piatti", en: "Main Courses" },
  Insalata: { it: "Insalate", en: "Salads" },
};

// Group drinks by type
const drinkGroups: Record<string, { it: string; en: string }> = {
  coffee: { it: "Caffetteria", en: "Coffee" },
  soft: { it: "Analcolici", en: "Soft Drinks" },
  aperitif: { it: "Aperitivi", en: "Aperitifs" },
  energy: { it: "Energy", en: "Energy" },
  beer: { it: "Birre in Bottiglia", en: "Bottled Beers" },
  draft: { it: "Birre alla Spina", en: "Draught Beers" },
  wine: { it: "Vini", en: "Wines" },
  sparkling: { it: "Bollicine", en: "Sparkling" },
  champagne: { it: "Champagne & Spumanti", en: "Champagne & Sparkling" },
};

// Group desserts by type
const dessertGroups: Record<string, { it: string; en: string }> = {
  crepe: { it: "Crepes", en: "Crêpes" },
  dessert: { it: "Dessert", en: "Desserts" },
};

export default function CategoryView({ category, lang }: CategoryViewProps) {
  const { slug, items, extras, notes, notes_en } = category;
  const displayNotes = lang === "en" ? (notes_en ?? notes) : notes;

  // ---- KITCHEN: grouped by badge ----
  if (slug === "kitchen") {
    const grouped = groupByBadge(items);
    return (
      <main className="max-w-lg mx-auto pb-24 animate-fade-in">
        {/* Category hero image */}
        <CategoryHero category={category} lang={lang} />

        {badgeOrder.map((badge) => {
          const group = grouped[badge];
          if (!group?.length) return null;
          const label = badgeLabels[badge];
          return (
            <section key={badge} className="px-4 mt-6">
              {label && (
                <h2 className="font-display text-2xl font-light text-ink border-b border-ink/8 pb-2 mb-0">
                  {lang === "en" ? label.en : label.it}
                </h2>
              )}
              <div>
                {group.map((item, i) => (
                  <ItemCard key={i} item={item} lang={lang} />
                ))}
              </div>
            </section>
          );
        })}

        {displayNotes && displayNotes.length > 0 && (
          <div className="px-4 mt-4">
            {displayNotes.map((note, i) => (
              <p key={i} className="font-body text-xs text-muted italic">
                * {note}
              </p>
            ))}
          </div>
        )}
      </main>
    );
  }

  // ---- SANDWICHES: grouped by type ----
  if (slug === "sandwiches-toasts") {
    const grouped = items.reduce<Record<string, MenuItem[]>>((acc, item) => {
      const key = item.type ?? "other";
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});

    // items without type → panini/piadine
    const typeOrder = ["toast", "panozzo", "burger", "other"];

    return (
      <main className="max-w-lg mx-auto pb-24 animate-fade-in">
        <CategoryHero category={category} lang={lang} />

        {typeOrder.map((type) => {
          const group = grouped[type];
          if (!group?.length) return null;
          // "other" = panini/piadine
          const label =
            type === "other"
              ? { it: "Panini & Piadine", en: "Sandwiches & Flatbreads" }
              : sandwichGroups[type];
          if (!label) return null;
          return (
            <section key={type} className="px-4 mt-6">
              <h2 className="font-display text-2xl font-light text-ink border-b border-ink/8 pb-2 mb-0">
                {lang === "en" ? label.en : label.it}
              </h2>
              <div>
                {group.map((item, i) => (
                  <ItemCard key={i} item={item} lang={lang} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    );
  }

  // ---- DRINKS: grouped by type ----
  if (slug === "drinks") {
    const grouped = items.reduce<Record<string, MenuItem[]>>((acc, item) => {
      const key = item.type ?? "other";
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});

    return (
      <main className="max-w-lg mx-auto pb-24 animate-fade-in">
        <CategoryHero category={category} lang={lang} />
        {Object.entries(drinkGroups).map(([type, label]) => {
          const group = grouped[type];
          if (!group?.length) return null;
          return (
            <section key={type} className="px-4 mt-6">
              <h2 className="font-display text-2xl font-light text-ink border-b border-ink/8 pb-2 mb-0">
                {lang === "en" ? label.en : label.it}
              </h2>
              <div>
                {group.map((item, i) => (
                  <ItemCard key={i} item={item} lang={lang} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    );
  }

  // ---- DESSERTS: grouped by type ----
  if (slug === "desserts-crepes") {
    const grouped = items.reduce<Record<string, MenuItem[]>>((acc, item) => {
      const key = item.type ?? "other";
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});

    return (
      <main className="max-w-lg mx-auto pb-24 animate-fade-in">
        <CategoryHero category={category} lang={lang} />
        {Object.entries(dessertGroups).map(([type, label]) => {
          const group = grouped[type];
          if (!group?.length) return null;
          return (
            <section key={type} className="px-4 mt-6">
              <h2 className="font-display text-2xl font-light text-ink border-b border-ink/8 pb-2 mb-0">
                {lang === "en" ? label.en : label.it}
              </h2>
              <div>
                {group.map((item, i) => (
                  <ItemCard key={i} item={item} lang={lang} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    );
  }

  // ---- DEFAULT: flat list (pizzas, snacks) ----
  return (
    <main className="max-w-lg mx-auto pb-24 animate-fade-in">
      <CategoryHero category={category} lang={lang} />

      <section className="px-4 mt-4">
        <div>
          {items.map((item, i) => (
            <ItemCard key={i} item={item} lang={lang} />
          ))}
        </div>
      </section>

      {/* Pizza extras */}
      {extras && extras.length > 0 && (
        <section className="px-4 mt-8">
          <div className="bg-bg-card border border-ink/8 p-4">
            <h3 className="font-display text-lg font-medium text-ink mb-3">
              {lang === "it" ? "Supplementi" : "Extra Toppings"}
            </h3>
            <div className="space-y-2">
              {extras.map((extra, i) => (
                <div key={i} className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-body text-sm font-medium text-ink">
                      {lang === "en" && extra.name_en ? extra.name_en : extra.name}
                    </p>
                    {(extra.description || extra.description_en) && (
                      <p className="font-body text-xs text-muted mt-0.5">
                        {lang === "en" && extra.description_en
                          ? extra.description_en
                          : extra.description}
                      </p>
                    )}
                  </div>
                  <span className="price-pill shrink-0 text-sm font-semibold">
                    +{formatPrice(extra.price)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {displayNotes && displayNotes.length > 0 && (
        <div className="px-4 mt-4">
          {displayNotes.map((note, i) => (
            <p key={i} className="font-body text-xs text-muted italic">
              * {note}
            </p>
          ))}
        </div>
      )}
    </main>
  );
}

// Category hero image banner
function CategoryHero({ category, lang }: { category: MenuCategory; lang: Lang }) {
  return (
    <div className="relative h-40 sm:h-52 overflow-hidden bg-ink/5">
      <FadeImage
        src={category.image}
        alt={lang === "en" ? category.name_en : category.name_it}
        fill
        sizes="(max-width: 512px) 100vw, 512px"
        className="object-cover"
        priority
        duration={600}
        onError={(e) => {
          (e.target as HTMLImageElement).parentElement!.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
        <h1 className="font-display text-3xl sm:text-4xl font-medium text-white drop-shadow-sm">
          {lang === "en" ? category.name_en : category.name_it}
        </h1>
      </div>
    </div>
  );
}
