// data/menu.ts — Taboo Bar Pizzeria Pub — Francavilla di Sicilia

export type Lang = "it" | "en";

export interface MenuItemSize {
  piccola: number;
  grande: number;
}

export interface MenuItemPrices {
  panino: number;
  piadina: number;
}

export interface MenuItem {
  name: string;
  name_en?: string;
  description?: string;
  description_en?: string;
  price?: number;
  prices?: MenuItemPrices;
  sizes?: MenuItemSize;
  type?: string;
  badge?: string;
}

export interface MenuExtra {
  name: string;
  name_en?: string;
  description?: string;
  description_en?: string;
  price: number;
}

export interface MenuCategory {
  slug: string;
  name_it: string;
  name_en: string;
  image: string;
  items: MenuItem[];
  extras?: MenuExtra[];
  notes?: string[];
  notes_en?: string[];
}

export interface RestaurantInfo {
  name: string;
  tagline_it: string;
  tagline_en: string;
  address: string;
  city: string;
  phone: string;
  mapsUrl: string;
  theforkUrl: string;
  quandooUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  coperto: number;
}

export const restaurantInfo: RestaurantInfo = {
  name: "Taboo",
  tagline_it: "Bar · Pizzeria · Pub",
  tagline_en: "Bar · Pizzeria · Pub",
  address: "Via Antonio Gramsci, 19",
  city: "Francavilla di Sicilia (ME)",
  phone: "+393801022310",
  mapsUrl: "https://maps.app.goo.gl/8wmgv8qqwwGKyLAg6",
  theforkUrl: "https://www.thefork.it/ristorante/taboo-pizzeria-pub-r631773",
  quandooUrl: "https://www.quandoo.it/place/taboo-bar-pizzeria-pub-108057/menu",
  instagramUrl: "https://www.instagram.com/taboofrancavilla",
  facebookUrl: "https://www.facebook.com/share/1DRU59MG5i/",
  coperto: 1.0,
};

export const categories: MenuCategory[] = [
  {
    slug: "kitchen",
    name_it: "Cucina",
    name_en: "Kitchen",
    image: "/images/categories/cucina.webp",
    items: [
      // Antipasti
      {
        name: "Siciliano",
        description: "Affettati, pomodori secchi, funghi, olive nere, formaggio, fritturine miste",
        description_en: "Cured meats, sun-dried tomatoes, mushrooms, black olives, cheese, mixed fritters",
        price: 10.0,
        badge: "Antipasto",
      },
      {
        name: "Delicato",
        description: "Salmone, philadelphia, pomodorini, rucola",
        description_en: "Salmon, cream cheese, cherry tomatoes, rocket",
        price: 8.0,
        badge: "Antipasto",
      },
      {
        name: "Caprese",
        description: "Pomodoro, mozzarella, olive nere, basilico, olio, origano",
        description_en: "Tomato, mozzarella, black olives, basil, oil, oregano",
        price: 6.0,
        badge: "Antipasto",
      },
      {
        name: "Dietetico",
        description: "Rucola, bresaola, scaglie di parmigiano, origano, olio",
        description_en: "Rocket, bresaola, parmesan shavings, oregano, oil",
        price: 7.0,
        badge: "Antipasto",
      },
      // Primi
      {
        name: "Pennette Diavola",
        description: "Pomodoro, pancetta, cipolla, peperoncino",
        description_en: "Tomato, pancetta, onion, chilli",
        price: 7.5,
        badge: "Primo",
      },
      {
        name: "Spaghetti Carbonara",
        description: "Pancetta, panna, uova, cipolla, parmigiano, pepe nero",
        description_en: "Pancetta, cream, eggs, onion, parmesan, black pepper",
        price: 7.5,
        badge: "Primo",
      },
      {
        name: "Farfalle Taboo",
        description: "Pesto di pistacchio, panna, cipolla, prosciutto cotto, parmigiano",
        description_en: "Pistachio pesto, cream, onion, cooked ham, parmesan",
        price: 9.5,
        badge: "Primo",
      },
      {
        name: "Pennette Salmone",
        description: "Salmone norvegese affumicato, panna, prezzemolo",
        description_en: "Smoked Norwegian salmon, cream, parsley",
        price: 9.5,
        badge: "Primo",
      },
      {
        name: "Farfalle al Pesto",
        description: "Pancetta, pomodorini, parmigiano, pesto di basilico",
        description_en: "Pancetta, cherry tomatoes, parmesan, basil pesto",
        price: 7.5,
        badge: "Primo",
      },
      // Secondi
      {
        name: "Arizona",
        description: "Petto di pollo, lattuga, pomodorini, patatine, salsa speciale",
        description_en: "Chicken breast, lettuce, cherry tomatoes, fries, special sauce",
        price: 8.0,
        badge: "Secondo",
      },
      {
        name: "California",
        description: "Hamburger di carne, hamburger di pollo, petto di pollo, salsiccia, patatine",
        description_en: "Beef burger, chicken burger, chicken breast, sausage, fries",
        price: 10.0,
        badge: "Secondo",
      },
      {
        name: "Texas",
        description: "2 hamburger di carne/pollo con formaggio fuso, bacon, patatine",
        description_en: "2 beef/chicken burgers with melted cheese, bacon, fries",
        price: 8.0,
        badge: "Secondo",
      },
      {
        name: "Mykonos",
        description: "Kebab, pomodoro, lattuga, cipolla, patatine, salsa speciale",
        description_en: "Kebab, tomato, lettuce, onion, fries, special sauce",
        price: 8.0,
        badge: "Secondo",
      },
      // Insalate
      {
        name: "Verde",
        description: "Lattuga, radicchio, rucola",
        description_en: "Lettuce, radicchio, rocket",
        price: 4.0,
        badge: "Insalata",
      },
      {
        name: "Ricca",
        description: "Pomodoro, tonno, mais, lattuga, olio",
        description_en: "Tomato, tuna, sweetcorn, lettuce, oil",
        price: 6.0,
        badge: "Insalata",
      },
      {
        name: "Gustosa",
        description: "Pomodoro, mozzarella, mais, cipolla, olive nere, lattuga, radicchio, olio",
        description_en: "Tomato, mozzarella, sweetcorn, onion, black olives, lettuce, radicchio, oil",
        price: 6.5,
        badge: "Insalata",
      },
      {
        name: "Super",
        description: "Pomodoro, salsa allo yogurt, petto di pollo, lattuga, radicchio, mais, olive nere",
        description_en: "Tomato, yogurt dressing, chicken breast, lettuce, radicchio, sweetcorn, black olives",
        price: 8.5,
        badge: "Insalata",
      },
      {
        name: "Taboo",
        description:
          "Pomodoro, lattuga, radicchio, mozzarella di bufala, melanzane grigliate, tonno, mais, uova, cipolla, olive nere, basilico, origano, olio",
        description_en:
          "Tomato, lettuce, radicchio, buffalo mozzarella, grilled aubergine, tuna, sweetcorn, egg, onion, black olives, basil, oregano, oil",
        price: 8.5,
        badge: "Insalata",
      },
    ],
    notes: ["Supplemento focaccia disponibile"],
    notes_en: ["Focaccia supplement available"],
  },
  {
    slug: "pizzas",
    name_it: "Pizze",
    name_en: "Pizzas",
    image: "/images/categories/pizza.webp",
    extras: [
      {
        name: "Supplementi Vari",
        name_en: "Various Toppings",
        price: 1.0,
      },
      {
        name: "Supplementi Special",
        name_en: "Special Toppings",
        description: "Bresaola, prosciutto crudo, patatine, philadelphia",
        description_en: "Bresaola, Parma ham, fries, cream cheese",
        price: 2.0,
      },
      {
        name: "Supplementi Prestige",
        name_en: "Prestige Toppings",
        description: "Mozzarella di bufala, salmone, funghi porcini, pesto di pistacchio di Bronte, pesto di basilico",
        description_en: "Buffalo mozzarella, salmon, porcini mushrooms, Bronte pistachio pesto, basil pesto",
        price: 3.0,
      },
    ],
    items: [
      { name: "Focaccia", description: "Sale, pepe, olio, origano", description_en: "Salt, pepper, oil, oregano", price: 4.0 },
      { name: "Biancaneve", description: "Mozzarella, origano", description_en: "Mozzarella, oregano", price: 4.5 },
      { name: "Bruschetta", description: "Pomodoro fresco, cipolla, basilico, olio, origano", description_en: "Fresh tomato, onion, basil, oil, oregano", price: 6.0 },
      { name: "Margherita", description: "Pomodoro, mozzarella, olio, origano", description_en: "Tomato, mozzarella, oil, oregano", price: 5.5 },
      { name: "Napoli", description: "Pomodoro, mozzarella, acciughe, olive, olio, origano", description_en: "Tomato, mozzarella, anchovies, olives, oil, oregano", price: 6.5 },
      { name: "Infernale", description: "Pomodoro, mozzarella, salame piccante, peperoncino, olio, origano", description_en: "Tomato, mozzarella, spicy salami, chilli, oil, oregano", price: 6.5 },
      { name: "Primavera", description: "Pomodoro, mozzarella, prosciutto cotto, funghi, olio, origano", description_en: "Tomato, mozzarella, cooked ham, mushrooms, oil, oregano", price: 6.5 },
      { name: "Calzone", description: "Pomodoro, mozzarella, prosciutto cotto, funghi, olio, origano", description_en: "Tomato, mozzarella, cooked ham, mushrooms, oil, oregano", price: 7.0 },
      { name: "Norma", description: "Pomodoro, mozzarella, melanzane, ricotta al forno, basilico, olio", description_en: "Tomato, mozzarella, aubergine, baked ricotta, basil, oil", price: 7.0 },
      { name: "Tonnata", description: "Pomodoro, mozzarella, tonno, cipolla, olio, origano", description_en: "Tomato, mozzarella, tuna, onion, oil, oregano", price: 7.0 },
      { name: "Sfiziosa", description: "Pomodoro, mozzarella, tonno, mais, origano", description_en: "Tomato, mozzarella, tuna, sweetcorn, oregano", price: 7.0 },
      { name: "Capricciosa", description: "Pomodoro, mozzarella, prosciutto cotto, funghi, uovo, piselli, olio, origano", description_en: "Tomato, mozzarella, cooked ham, mushrooms, egg, peas, oil, oregano", price: 8.0 },
      { name: "Quattro Stagioni", description: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, uovo, olive, olio, origano", description_en: "Tomato, mozzarella, cooked ham, mushrooms, artichokes, egg, olives, oil, oregano", price: 8.0 },
      { name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, parmigiano, svizzero, olio", description_en: "Mozzarella, gorgonzola, parmesan, swiss cheese, oil", price: 7.0 },
      { name: "Tedesca", description: "Pomodoro, mozzarella, wurstel, patatine", description_en: "Tomato, mozzarella, frankfurter, fries", price: 7.0 },
      { name: "Vegetariana", description: "Pomodoro, mozzarella, melanzane, peperoni, zucchine, funghi", description_en: "Tomato, mozzarella, aubergine, peppers, courgette, mushrooms", price: 7.5 },
      { name: "Bufala", description: "Pomodorini, mozzarella di bufala, basilico, olio", description_en: "Cherry tomatoes, buffalo mozzarella, basil, oil", price: 8.0 },
      { name: "Messinese", description: "Pomodorini, mozzarella, scarola riccia, acciughe, olive", description_en: "Cherry tomatoes, mozzarella, curly endive, anchovies, olives", price: 7.0 },
      { name: "Parmigiana", description: "Pomodoro, mozzarella, prosciutto cotto, melanzane, piselli, uovo, parmigiano", description_en: "Tomato, mozzarella, cooked ham, aubergine, peas, egg, parmesan", price: 8.0 },
      { name: "Porcini", description: "Pomodoro, mozzarella, funghi porcini, speck", description_en: "Tomato, mozzarella, porcini mushrooms, speck", price: 9.0 },
      { name: "Rucola", description: "Pomodoro, mozzarella, rucola, scaglie di parmigiano, prosciutto crudo", description_en: "Tomato, mozzarella, rocket, parmesan shavings, Parma ham", price: 7.5 },
      { name: "Salmone", description: "Mozzarella, salmone norvegese, pepe, olio", description_en: "Mozzarella, Norwegian salmon, pepper, oil", price: 8.0 },
      { name: "Speck & Mascarpone", description: "Pomodoro, mozzarella, speck, mascarpone", description_en: "Tomato, mozzarella, speck, mascarpone", price: 7.5 },
      { name: "Bresaola", description: "Pomodorini, mozzarella, bresaola, rucola, scaglie di parmigiano", description_en: "Cherry tomatoes, mozzarella, bresaola, rocket, parmesan shavings", price: 8.0 },
      { name: "Mia Moglie", description: "Pomodoro, mozzarella, funghi, rucola, prosciutto crudo, scaglie di parmigiano, glassa di aceto balsamico", description_en: "Tomato, mozzarella, mushrooms, rocket, Parma ham, parmesan shavings, balsamic glaze", price: 8.0 },
      { name: "Carbonara", description: "Mozzarella, pancetta, panna, uova, bacon, parmigiano", description_en: "Mozzarella, pancetta, cream, eggs, bacon, parmesan", price: 8.0 },
      { name: "Pepe Verde", description: "Pomodoro, mozzarella, formaggio al pepe verde, speck", description_en: "Tomato, mozzarella, green pepper cheese, speck", price: 8.5 },
      { name: "Regina", description: "Pomodoro, mozzarella di bufala, parmigiano fuso, basilico", description_en: "Tomato, buffalo mozzarella, melted parmesan, basil", price: 8.5 },
      { name: "Zizza & Peper", description: "Pomodoro, mozzarella, salsiccia, peperoni, cipolla", description_en: "Tomato, mozzarella, sausage, peppers, onion", price: 8.5 },
      { name: "Fantasiosa", description: "Pomodorini, mozzarella, salmone norvegese, rucola, fiocchi di philadelphia", description_en: "Cherry tomatoes, mozzarella, Norwegian salmon, rocket, cream cheese flakes", price: 9.5 },
      { name: "Salsiccia", description: "Pomodoro, mozzarella, salsiccia, funghi, cipolla, olive", description_en: "Tomato, mozzarella, sausage, mushrooms, onion, olives", price: 9.0 },
      { name: "Trevigiana", description: "Mozzarella, radicchio, funghi porcini, speck, gorgonzola", description_en: "Mozzarella, radicchio, porcini mushrooms, speck, gorgonzola", price: 9.5 },
      { name: "Genovese", description: "Mozzarella, pesto di basilico, pomodorini, prosciutto crudo, scaglie di parmigiano", description_en: "Mozzarella, basil pesto, cherry tomatoes, Parma ham, parmesan shavings", price: 8.0 },
      { name: "Cime di Rapa", description: "Mozzarella, cime di rapa, olive, salsiccia", description_en: "Mozzarella, turnip tops, olives, sausage", price: 8.0 },
      { name: "Golosa", description: "Mozzarella, pesto di pistacchio, mortadella, fiocchi di philadelphia", description_en: "Mozzarella, pistachio pesto, mortadella, cream cheese flakes", price: 9.0 },
      { name: "Bufala House", description: "Pomodorini, mozzarella di bufala, funghi porcini, rucola", description_en: "Cherry tomatoes, buffalo mozzarella, porcini mushrooms, rocket", price: 10.0 },
      { name: "Taboo", description: "Pomodorini, mozzarella, pesto di pistacchio di Bronte, bacon", description_en: "Cherry tomatoes, mozzarella, Bronte pistachio pesto, bacon", price: 9.0 },
    ],
  },
  {
    slug: "sandwiches-toasts",
    name_it: "Panini e Toast",
    name_en: "Sandwiches & Toasts",
    image: "/images/categories/panini.webp",
    items: [
      // Big Toast
      { name: "Big Toast Solito", description: "Prosciutto crudo, formaggio, pomodoro", description_en: "Parma ham, cheese, tomato", price: 4.5, type: "toast" },
      { name: "Big Toast Classico", description: "Prosciutto cotto, formaggio, pomodoro", description_en: "Cooked ham, cheese, tomato", price: 4.5, type: "toast" },
      { name: "Big Toast Taboo", description: "Prosciutto crudo, mozzarella, pomodoro, lattuga, maionese", description_en: "Parma ham, mozzarella, tomato, lettuce, mayo", price: 5.0, type: "toast" },
      { name: "Big Toast Tonnato", description: "Tonno, mozzarella, maionese, pomodoro, lattuga", description_en: "Tuna, mozzarella, mayo, tomato, lettuce", price: 5.0, type: "toast" },
      // Panozzi
      { name: "Michelangelo", description: "Pomodoro, mozzarella, prosciutto cotto, funghi, olive", description_en: "Tomato, mozzarella, cooked ham, mushrooms, olives", price: 7.0, type: "panozzo" },
      { name: "Donatello", description: "Pomodoro, mozzarella, acciughe, olive", description_en: "Tomato, mozzarella, anchovies, olives", price: 7.0, type: "panozzo" },
      { name: "Raffaello", description: "Pomodoro, mozzarella, tonno, cipolla, olive", description_en: "Tomato, mozzarella, tuna, onion, olives", price: 7.0, type: "panozzo" },
      { name: "Leonardo", description: "Pomodorini, mozzarella, prosciutto crudo, rucola, parmigiano", description_en: "Cherry tomatoes, mozzarella, Parma ham, rocket, parmesan", price: 7.5, type: "panozzo" },
      { name: "Cimabue", description: "Pomodoro, mozzarella, speck, olive, pomodori secchi, pepe verde", description_en: "Tomato, mozzarella, speck, olives, sun-dried tomatoes, green pepper", price: 7.5, type: "panozzo" },
      { name: "Botticelli", description: "Pomodoro, mozzarella, salame piccante, funghi, olive", description_en: "Tomato, mozzarella, spicy salami, mushrooms, olives", price: 7.0, type: "panozzo" },
      // Burger al piatto
      { name: "Ta Burger", description: "Hamburger di carne, formaggio, bacon, ketchup, maionese, patatine", description_en: "Beef burger, cheese, bacon, ketchup, mayo, fries", price: 8.0, type: "burger" },
      { name: "Boo Burger", description: "Hamburger di carne, formaggio, lattuga, pomodoro, patatine", description_en: "Beef burger, cheese, lettuce, tomato, fries", price: 8.0, type: "burger" },
      { name: "Ta Chicken", description: "Hamburger di pollo, formaggio, lattuga, pomodoro, maionese, patatine", description_en: "Chicken burger, cheese, lettuce, tomato, mayo, fries", price: 8.0, type: "burger" },
      // Panini / Piadine
      { name: "Praga", description: "Prosciutto cotto, mozzarella, pomodoro", description_en: "Cooked ham, mozzarella, tomato", prices: { panino: 4.0, piadina: 5.0 } },
      { name: "Barcellona", description: "Prosciutto crudo, mozzarella, pomodoro", description_en: "Parma ham, mozzarella, tomato", prices: { panino: 4.0, piadina: 5.0 } },
      { name: "Malta", description: "Salame piccante, formaggio, funghi, patatine", description_en: "Spicy salami, cheese, mushrooms, fries", prices: { panino: 4.5, piadina: 5.5 } },
      { name: "Las Vegas", description: "Wurstel, patatine, cipolla, ketchup, maionese", description_en: "Frankfurter, fries, onion, ketchup, mayo", prices: { panino: 4.5, piadina: 5.5 } },
      { name: "Chicago", description: "Bresaola, philadelphia, rucola", description_en: "Bresaola, cream cheese, rocket", prices: { panino: 4.5, piadina: 5.5 } },
      { name: "Miami", description: "Prosciutto crudo, mozzarella, pomodoro, lattuga, maionese", description_en: "Parma ham, mozzarella, tomato, lettuce, mayo", prices: { panino: 4.5, piadina: 5.0 } },
      { name: "Parigi", description: "Tonno, mozzarella, maionese, pomodoro, lattuga", description_en: "Tuna, mozzarella, mayo, tomato, lettuce", prices: { panino: 4.5, piadina: 5.0 } },
      { name: "Philadelphia", description: "Prosciutto crudo, philadelphia, pomodoro, rucola", description_en: "Parma ham, cream cheese, tomato, rocket", prices: { panino: 5.0, piadina: 6.0 } },
      { name: "Roma", description: "Speck, mozzarella, funghi", description_en: "Speck, mozzarella, mushrooms", prices: { panino: 4.5, piadina: 5.5 } },
      { name: "Los Angeles", description: "Mozzarella, rucola, melanzane grigliate, funghi, pomodoro", description_en: "Mozzarella, rocket, grilled aubergine, mushrooms, tomato", prices: { panino: 4.5, piadina: 5.5 } },
      { name: "San Francisco", description: "Speck, pepe verde, pomodori secchi, rucola", description_en: "Speck, green pepper, sun-dried tomatoes, rocket", prices: { panino: 5.5, piadina: 6.5 } },
      { name: "Amsterdam", description: "Petto di pollo, formaggio, lattuga, pomodoro, maionese", description_en: "Chicken breast, cheese, lettuce, tomato, mayo", prices: { panino: 6.0, piadina: 7.0 } },
      { name: "Istanbul", description: "Kebab, pomodoro, cipolla, lattuga, salsa yogurt", description_en: "Kebab, tomato, onion, lettuce, yogurt sauce", prices: { panino: 6.0, piadina: 7.0 } },
      { name: "Bolognese", description: "Mortadella, philadelphia, pesto di pistacchio, radicchio", description_en: "Mortadella, cream cheese, pistachio pesto, radicchio", prices: { panino: 6.0, piadina: 7.0 } },
      { name: "Norvegese", description: "Philadelphia, salmone, pomodorini, rucola", description_en: "Cream cheese, salmon, cherry tomatoes, rocket", prices: { panino: 6.0, piadina: 7.0 } },
      { name: "New York", description: "Hamburger di vitello, formaggio, ketchup, maionese", description_en: "Veal burger, cheese, ketchup, mayo", prices: { panino: 6.0, piadina: 7.0 } },
      { name: "Manhattan", description: "Hamburger di pollo, formaggio, pomodoro, lattuga, bacon, uovo fritto, salsa barbecue, salsa yogurt", description_en: "Chicken burger, cheese, tomato, lettuce, bacon, fried egg, BBQ sauce, yogurt sauce", prices: { panino: 7.0, piadina: 8.0 } },
      { name: "Dallas", description: "Hamburger di vitello, cheddar, pomodori secchi, lattuga, cipolla, uovo, salsa yogurt", description_en: "Veal burger, cheddar, sun-dried tomatoes, lettuce, onion, egg, yogurt sauce", prices: { panino: 7.0, piadina: 8.0 } },
    ],
  },
  {
    slug: "snacks-sides",
    name_it: "Snack e Contorni",
    name_en: "Snacks & Sides",
    image: "/images/categories/snack.webp",
    items: [
      { name: "Patatine", name_en: "Fries", sizes: { piccola: 2.5, grande: 5.0 } },
      { name: "Crocchette", name_en: "Croquettes", sizes: { piccola: 3.5, grande: 6.0 } },
      { name: "Patatine e Crocchette", name_en: "Fries & Croquettes", sizes: { piccola: 3.5, grande: 6.0 } },
      { name: "Patatine e Wurstel", name_en: "Fries & Frankfurter", sizes: { piccola: 3.5, grande: 6.0 } },
      { name: "Sfizi di Pollo", name_en: "Chicken Bites", sizes: { piccola: 4.5, grande: 8.5 } },
      { name: "Ali di Pollo", name_en: "Chicken Wings", sizes: { piccola: 4.0, grande: 8.0 } },
      { name: "Anelli di Cipolla", name_en: "Onion Rings", sizes: { piccola: 3.0, grande: 6.0 } },
      { name: "Misto Fritto", name_en: "Mixed Fried Basket", price: 9.0 },
    ],
  },
  {
    slug: "desserts-crepes",
    name_it: "Dolci e Crepes",
    name_en: "Desserts & Crepes",
    image: "/images/categories/dessert.webp",
    items: [
      { name: "Crepes Nutella", description: "Nutella, zucchero a velo", description_en: "Nutella, icing sugar", price: 4.0, type: "crepe" },
      { name: "Crepes Taboo", description: "Nutella, nocciole, panna, zucchero a velo", description_en: "Nutella, hazelnuts, cream, icing sugar", price: 5.0, type: "crepe" },
      { name: "Cococrepes", description: "Nutella, cacao, farina di cocco", description_en: "Nutella, cocoa, coconut flour", price: 4.0, type: "crepe" },
      { name: "Pistacchiosa", description: "Crema al pistacchio di Bronte, granella di pistacchio, zucchero a velo", description_en: "Bronte pistachio cream, pistachio crumble, icing sugar", price: 5.0, type: "crepe" },
      { name: "Pan di Stelle", description: "Crema Pan di Stelle, granella di biscotto, panna, zucchero a velo", description_en: "Pan di Stelle cream, biscuit crumble, cream, icing sugar", price: 5.0, type: "crepe" },
      { name: "Tartufo Nero", name_en: "Dark Truffle Ice Cream", price: 4.0, type: "dessert" },
      { name: "Tartufo Bianco", name_en: "White Truffle Ice Cream", price: 4.0, type: "dessert" },
      { name: "Tiramisù", price: 4.0, type: "dessert" },
      { name: "Affogato al Caffè", name_en: "Affogato", description: "Gelato con espresso", description_en: "Ice cream with espresso", price: 5.0, type: "dessert" },
    ],
  },
  {
    slug: "drinks",
    name_it: "Bevande",
    name_en: "Drinks",
    image: "/images/categories/bevande.webp",
    items: [
      // Coffee
      { name: "Caffè", name_en: "Espresso", price: 1.0, type: "coffee" },
      { name: "Caffè Decaffeinato", name_en: "Decaf Espresso", price: 1.0, type: "coffee" },
      { name: "Cappuccino", price: 2.5, type: "coffee" },
      // Soft drinks
      { name: "Acqua Naturale", name_en: "Still Water", price: 1.0, type: "soft" },
      { name: "Acqua Frizzante", name_en: "Sparkling Water", price: 1.0, type: "soft" },
      { name: "Ferrarelle", price: 1.0, type: "soft" },
      { name: "Coca Cola", price: 2.5, type: "soft" },
      { name: "Fanta", price: 2.5, type: "soft" },
      { name: "Sprite", price: 2.5, type: "soft" },
      { name: "Chinotto", price: 2.5, type: "soft" },
      { name: "Thè Pesca", name_en: "Peach Iced Tea", price: 2.5, type: "soft" },
      { name: "Thè Limone", name_en: "Lemon Iced Tea", price: 2.5, type: "soft" },
      { name: "Succhi di Frutta", name_en: "Fruit Juice", price: 2.5, type: "soft" },
      { name: "Acqua Tonica Schweppes", name_en: "Schweppes Tonic Water", price: 2.5, type: "soft" },
      { name: "Schweppes Lemon", price: 2.5, type: "soft" },
      // Aperitivi
      { name: "Bitter Bianco", price: 2.0, type: "aperitif" },
      { name: "Bitter Rosso", price: 2.0, type: "aperitif" },
      { name: "Aperol Soda", price: 2.5, type: "aperitif" },
      { name: "Campari Soda", price: 2.5, type: "aperitif" },
      { name: "Crodino", price: 2.0, type: "aperitif" },
      { name: "Campari Gin", price: 3.0, type: "aperitif" },
      { name: "Red Bull", price: 3.0, type: "energy" },
      // Birre in bottiglia
      { name: "Messina 33cl", price: 2.0, type: "beer" },
      { name: "Nastro Azzurro 33cl", price: 2.5, type: "beer" },
      { name: "Heineken 33cl", price: 2.5, type: "beer" },
      { name: "Beck's 33cl", price: 2.5, type: "beer" },
      { name: "Dello Stretto 33cl", price: 2.5, type: "beer" },
      { name: "Budweiser 33cl", price: 4.0, type: "beer" },
      { name: "Corona 33cl", price: 4.0, type: "beer" },
      { name: "Ceres 33cl", price: 4.0, type: "beer" },
      { name: "Tennent's 33cl", price: 4.0, type: "beer" },
      { name: "Moretti 66cl", price: 4.0, type: "beer" },
      // Birre alla spina
      { name: "Stella Artois 40cl", name_en: "Stella Artois 40cl (draft)", price: 5.0, type: "draft" },
      { name: "Leffe Rossa 33cl", name_en: "Leffe Rouge 33cl (draft)", price: 5.0, type: "draft" },
      { name: "Franziskaner Bianca 40cl", name_en: "Franziskaner Weiss 40cl (draft)", price: 5.0, type: "draft" },
      // Vini
      { name: "Barbazale Cottanera Etna Rosso", price: 20.0, type: "wine" },
      { name: "Barbazale Cottanera Cataratto", price: 20.0, type: "wine" },
      { name: "Cantine Paolini Rosso", price: 15.0, type: "wine" },
      { name: "Cantine Paolini Bianco", price: 15.0, type: "wine" },
      { name: "Antichi Vinai Nerello Mascalese", price: 15.0, type: "wine" },
      { name: "Bicchiere di Vino", name_en: "Glass of Wine", price: 3.0, type: "wine" },
      // Bollicine
      { name: "Prosecco Flute", price: 3.0, type: "sparkling" },
      { name: "Prosecco Bottiglia", name_en: "Prosecco Bottle", price: 14.0, type: "sparkling" },
      { name: "Ferrari / Berlucchi", price: 50.0, type: "champagne" },
      { name: "Moët & Chandon", price: 70.0, type: "champagne" },
      { name: "Dom Pérignon", price: 170.0, type: "champagne" },
    ],
  },
];

// Helper: get display name for lang
export function getCategoryName(cat: MenuCategory, lang: Lang): string {
  return lang === "en" ? cat.name_en : cat.name_it;
}

export function getItemName(item: MenuItem, lang: Lang): string {
  return lang === "en" && item.name_en ? item.name_en : item.name;
}

export function getItemDescription(item: MenuItem, lang: Lang): string | undefined {
  return lang === "en" && item.description_en ? item.description_en : item.description;
}

// Flat list for global search
export interface SearchResult {
  item: MenuItem;
  category: MenuCategory;
}

export function getAllItems(): SearchResult[] {
  return categories.flatMap((cat) =>
    cat.items.map((item) => ({ item, category: cat }))
  );
}
