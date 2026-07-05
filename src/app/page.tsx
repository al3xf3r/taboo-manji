import { createClient } from "@supabase/supabase-js";
import MenuApp from "@/components/MenuApp";
import type { MenuCategory } from "@/data/menu";

export const revalidate = 60;

const CLIENT_ID = "787d44cd-8a59-4561-ade6-5c56fd86bfe7";

const STATIC_IMAGES: Record<string, string> = {
  "kitchen":          "/images/categories/cucina.webp",
  "snacks-sides":     "/images/categories/snack.webp",
  "pizzas-classic":   "/images/categories/pizza.webp",
  "pizzas-special":   "/images/categories/pizzespeciali.webp",
  "sandwiches-toasts":"/images/categories/panini.webp",
  "desserts-crepes":  "/images/categories/dessert.webp",
  "drinks-soft":      "/images/categories/analcol.webp",
  "drinks-alcohol":   "/images/categories/alcool.webp",
};

const PLACEHOLDER_IMAGE =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23B21D1D'/%3E%3Ctext x='200' y='190' font-family='Arial' font-size='28' font-weight='bold' fill='%23FFFFFF' text-anchor='middle'%3ENEW%3C/text%3E%3Ctext x='200' y='225' font-family='Arial' font-size='14' fill='rgba(255,255,255,0.7)' text-anchor='middle'%3EImmagine in arrivo%3C/text%3E%3C/svg%3E";

async function getMenu(): Promise<MenuCategory[]> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from("manji_menus")
    .select("menu_data")
    .eq("client_id", CLIENT_ID)
    .single();

  if (error || !data?.menu_data?.categories) return [];

  const cats = data.menu_data.categories as any[];

  return cats
    .filter((cat: any) => !cat.hidden)
    .map((cat: any) => {
      const slug = cat.id ?? cat.slug;
      const dbImg = cat.image;
      const isPlaceholderPath = dbImg && dbImg.startsWith("/menu/");
      const image = STATIC_IMAGES[slug] ?? (isPlaceholderPath ? PLACEHOLDER_IMAGE : dbImg) ?? PLACEHOLDER_IMAGE;

      return {
        slug,
        name_it: cat.name?.it ?? cat.name_it ?? "",
        name_en: cat.name?.en ?? cat.name_en ?? "",
        image,
        unavailable: cat.unavailable === true,
        notes:    cat.notes    ?? [],
        notes_en: cat.notes_en ?? [],
        extras: (cat.extras ?? []).map((e: any) => ({
          name:         e.name?.it  ?? e.name  ?? "",
          name_en:      e.name?.en  ?? e.name_en ?? "",
          description:  e.desc?.it  ?? e.description ?? "",
          description_en: e.desc?.en ?? e.description_en ?? "",
          price: typeof e.price === "string" ? parseFloat(e.price) : e.price,
        })),
        items: (cat.items ?? []).map((item: any) => ({
          name:        item.name?.it  ?? item.name  ?? "",
          name_en:     item.name?.en  ?? item.name_en ?? "",
          description: item.desc?.it  ?? item.description ?? "",
          description_en: item.desc?.en ?? item.description_en ?? "",
          price:  item.price  != null ? parseFloat(item.price)  : undefined,
          sizes:  item.sizes  ?? undefined,
          prices: item.prices ?? undefined,
          type:   item.type   ?? undefined,
          badge:  item.badge  ?? undefined,
          available: item.available !== false,
        })),
      } as MenuCategory;
    });
}

export default async function Home() {
  const categories = await getMenu();
  return <MenuApp initialCategories={categories} />;
}