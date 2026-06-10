# Taboo — Menu Digitale

Menu digitale mobile-first per **Taboo Bar Pizzeria Pub** — Francavilla di Sicilia (ME).

Sviluppato da [Hash42](https://hash42.xyz) · Powered by [MANJI](https://manji.hash42.xyz)

---

## Stack

- **Next.js 15** + TypeScript
- **Tailwind CSS 3**
- **Font:** Cormorant Garamond (titoli) + Jost (body)
- **Deploy:** Vercel → `taboo-manji.vercel.app`

## Struttura

```
src/
  app/            → layout.tsx + page.tsx + globals.css
  components/
    MenuApp.tsx       → SPA orchestrator
    IntroLoader.tsx   → Splash screen (sessionStorage)
    TopBar.tsx        → Header sticky con lingua e ricerca
    HomeView.tsx      → Griglia 2×2 categorie + info
    CategoryView.tsx  → Vista categoria con item cards
    SearchOverlay.tsx → Ricerca globale con highlight
  data/
    menu.ts           → Tutti i dati tipizzati
public/
  logo.png
  images/categories/
    cucina.webp
    pizza.webp
    panini.webp
    snack.webp
    dessert.webp
    bevande.webp
```

## Setup

```bash
npm install
npm run dev
```

## Aggiungere immagini categorie

Posiziona i file `.webp` in `public/images/categories/` con i nomi:
- `cucina.webp`
- `pizza.webp`
- `panini.webp`
- `snack.webp`
- `dessert.webp`
- `bevande.webp`

## Deploy Vercel

```bash
vercel --prod
```

Oppure collega il repo GitHub a Vercel per deploy automatici.

## Aggiornare il menù

Tutti i dati sono in `src/data/menu.ts`. Modifica direttamente le voci, i prezzi e le descrizioni.

---

© Hash42 · [hash42.xyz](https://hash42.xyz)
