export interface Location {
  id: string;
  name: string;
  street: string;
  postCode: string;
  city: string;
  phone: string;
  hours: string;
  isOpen: boolean;
  slug: string;
}

export interface MenuItemOption {
  id: string;
  name: string;
  priceModifier: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  badge?: string;
  spicyLevel?: number;
  availableMeats?: string[];
  availableSizes?: { name: string; extraPrice: number }[];
  availableSauces?: string[];
  isVegetarian?: boolean;
}

export interface Promotion {
  id: string;
  title: string;
  tagline: string;
  description: string;
  code: string;
  discountDisplay: string;
  image: string;
  badge: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

export const LOCATIONS: Location[] = [
  {
    id: "krakowskie",
    name: "Dostana Kebab Krakowskie Przedmieście",
    street: "Krakowskie Przedmieście 8",
    postCode: "20-400",
    city: "Lublin",
    phone: "732 816 154",
    hours: "11:00 AM - 9:30 PM",
    isOpen: true,
    slug: "dostana-kebab-krakowskie-przedmiescie",
  },
  {
    id: "lipowa",
    name: "Dostana Kebab Lipowa",
    street: "Lipowa 11/8",
    postCode: "20-400",
    city: "Lublin",
    phone: "576 491 347",
    hours: "11:00 AM - 9:30 PM",
    isOpen: true,
    slug: "dostana-kebab-lipowa",
  },
  {
    id: "turystyczna",
    name: "Dostana Kebab Turystyczna",
    street: "Turystyczna 9b",
    postCode: "20-207",
    city: "Lublin",
    phone: "512 922 942",
    hours: "10:00 AM - 12:00 AM",
    isOpen: true,
    slug: "dostana-kebab-turystyczna",
  },
  {
    id: "sympatyczna",
    name: "Dostana Kebab Sympatyczna",
    street: "Sympatyczna 5b",
    postCode: "20-530",
    city: "Lublin",
    phone: "729 202 173",
    hours: "11:00 AM - 9:30 PM",
    isOpen: true,
    slug: "dostana-kebab-sympatyczna",
  },
  {
    id: "wrobla",
    name: "Dostana Kebab Wróbla",
    street: "Wróbla 66",
    postCode: "20-719",
    city: "Lublin",
    phone: "791 633 078",
    hours: "11:00 AM - 9:30 PM",
    isOpen: true,
    slug: "dostana-kebab-wrobla",
  },
  {
    id: "nadbystrzycka",
    name: "Dostana Kebab Nadbystrzycka",
    street: "Nadbystrzycka 7",
    postCode: "20-618",
    city: "Lublin",
    phone: "739 465 977",
    hours: "9:00 AM - 11:54 PM",
    isOpen: true,
    slug: "dostana-kebab-nadbystrzycka",
  },
];

export const CATEGORIES = [
  { id: "all", label: "🔥 Wszystkie" },
  { id: "rollo", label: "🌯 Rollo" },
  { id: "box", label: "📦 Kebab Box" },
  { id: "plates", label: "🍽️ Dania na talerzu" },
  { id: "pita", label: "🥙 Pita i Bułka" },
  { id: "veggie", label: "🌱 Wegetariańskie" },
  { id: "sides", label: "🍟 Dodatki i Napoje" },
];

export const MEAT_OPTIONS = [
  "Kurczak (100% z rożna)",
  "Wołowina Premium",
  "Mięso mieszane (Kurczak i Wołowina)",
  "Chrupiący Falafel",
];

export const SAUCE_OPTIONS = [
  "Sos czosnkowy",
  "Sos ostry (Harissa)",
  "Sos łagodny (Ziołowy)",
  "Sos mieszany (Czosnek & Harissa)",
];

export const EXTRA_TOPPINGS = [
  { id: "extra-meat", name: "Dodatkowa porcja mięsa (+50g)", price: 7.0 },
  { id: "melted-cheese", name: "Podwójna roztopiona mozzarella", price: 4.5 },
  { id: "jalapenos", name: "Ostre papryczki jalapeño", price: 3.0 },
  { id: "feta", name: "Grecka Feta", price: 4.0 },
  { id: "fries-inside", name: "Złociste frytki w środku", price: 5.0 },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "rollo-classic",
    name: "Klasyczny Rollo Kebab",
    category: "rollo",
    price: 24.9,
    description:
      "Soczyste mięso pieczone na wglu drzewnym, zawinięte w gorącą chrupiącą tortillę z sałatą lodową, czerwoną kapustą, świeżym ogórkiem, pomidorem i domowym sosem.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/b75529f5-94e3-4439-b736-d6a4e724895c.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
    badge: "Bestseller ⭐",
    availableMeats: MEAT_OPTIONS,
    availableSizes: [
      { name: "Standardowy (35cm)", extraPrice: 0 },
      { name: "Duży (+100g mięsa)", extraPrice: 8 },
      { name: "Monster XL (50cm)", extraPrice: 18 },
    ],
    availableSauces: SAUCE_OPTIONS,
  },
  {
    id: "rollo-monster-xl",
    name: "Dostana Monster XL Rollo",
    category: "rollo",
    price: 42.9,
    description:
      "Pogromca głodu! Ogromna 50-centymetrowa chrupiąca tortilla wypełniona 350g mięsa, frytkami w środku, podwójnym serem, świeżymi warzywami i sosem.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/8e6c32d9-d4ce-49a1-b51d-26394b3d128f.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
    badge: "Specjalność Szefa 👑",
    spicyLevel: 2,
    availableMeats: MEAT_OPTIONS,
    availableSauces: SAUCE_OPTIONS,
  },
  {
    id: "rollo-cheese-melt",
    name: "Potrójnie Serowy Rollo",
    category: "rollo",
    price: 29.9,
    description:
      "Mięso pieczone na rożnie zatopione w roztopionym serze cheddar, mozzarella oraz kremowej fecie, zawinięte z chrupiącą cebulką i sosem czosnkowym.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/aee8865c-3344-4fb8-93d1-e3661bf1072b.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
    badge: "Dla Seromaniaków 🧀",
    availableMeats: MEAT_OPTIONS,
    availableSauces: SAUCE_OPTIONS,
  },
  {
    id: "box-classic",
    name: "Klasyczny Kebab Box",
    category: "box",
    price: 26.9,
    description:
      "Porcja chrupiących frytek z solidną ilością gorącego, soczystego mięsa z rożna, świeżymi warzywami i wybranym sosem.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/47d722b2-8df1-40db-b7c0-bc5c3f22f812.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
    badge: "Popularny 📦",
    availableMeats: MEAT_OPTIONS,
    availableSizes: [
      { name: "Średni Box (450g)", extraPrice: 0 },
      { name: "Duży Box (650g)", extraPrice: 9 },
    ],
    availableSauces: SAUCE_OPTIONS,
  },
  {
    id: "box-deluxe-loaded",
    name: "Serowy Kubełek z Jalapeno",
    category: "box",
    price: 34.9,
    description:
      "Podwójna porcja mięsa na złocistych frytkach, z dodatkiem ostrych papryczek jalapeño, płynnego sosu serowego cheddar i świeżej czerwonej cebuli.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/e90c9620-1264-4dbf-a8b5-7ead9e945bdb.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
    badge: "Bardzo Ostry 🌶️",
    spicyLevel: 3,
    availableMeats: MEAT_OPTIONS,
    availableSauces: SAUCE_OPTIONS,
  },
  {
    id: "plate-dostana-royal",
    name: "Królewski Talerz Dostana",
    category: "plates",
    price: 38.9,
    description:
      "Pełny talerz z solidną porcją grillowanego mięsa kebab, podawany z frytkami lub aromatycznym ryżem, zestawem świeżych surówek oraz ciepłą pitą.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/6e38ccb3-b983-48aa-a3b0-81fe09721131.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
    badge: "Uczta 🍽️",
    availableMeats: MEAT_OPTIONS,
    availableSauces: SAUCE_OPTIONS,
  },
  {
    id: "plate-mix-grill",
    name: "Supreme Mix Grill i Talerz Falafel",
    category: "plates",
    price: 45.9,
    description:
      "Kompozycja soczystego mięsa wołowego i drobiowego, 2 chrupiące falafele, frytki, świeża sałatka, pita i 4 autorskie sosy.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/afde8b8a-9774-4745-8380-2f4df0139f65.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
    badge: "Wybór Smakoszy 🔥",
    availableSauces: SAUCE_OPTIONS,
  },
  {
    id: "veggie-greek-feta",
    name: "Wrap Grecki z Fetą",
    category: "veggie",
    price: 22.9,
    description:
      "Oryginalny grecki ser feta, czarne oliwki, świeży ogórek, papryka, czerwona cebula oraz ziołowy sos winegret.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/b75529f5-94e3-4439-b736-d6a4e724895c.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
    isVegetarian: true,
    availableSauces: SAUCE_OPTIONS,
  },
  {
    id: "sides-french-fries",
    name: "Złociste Frytki Chrupiące",
    category: "sides",
    price: 11.9,
    description: "Porcja bardzo chrupiących, idealnie posolonych frytek ziemniaczanych.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/47d722b2-8df1-40db-b7c0-bc5c3f22f812.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
  },
];

export const PROMOTIONS: Promotion[] = [
  {
    id: "new-customer",
    title: "Promocja dla nowych klientów",
    tagline: "Otrzymaj 5% rabatu na pierwsze zamówienie online",
    description:
      "1. Wejdź w menu i dodaj swoje ulubione dania do koszyka za min. 70 zł. 2. W formularzu zamówienia, podaj swoje dane. 3. Otrzymasz SMS z jednorazowym kodem rabatowym na to zamówienie.",
    code: "DOSTANA5",
    discountDisplay: "5% RABATU",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/imageye___-_imgi_32_d4cdebe687ae8357ddbd0422f5d84230-1-6f516b90be782e231d1e1dfe082d3819.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&max-h=625&max-w=800",
    badge: "NOWI KLIENCI",
  },
  {
    id: "loyalty-stamps",
    title: "Zbieraj pieczątki",
    tagline: "Zbieraj pieczątki i odbierz darmowy Rollo!",
    description:
      "Po każdym zamówieniu otrzymujesz pieczątkę. Uzbieraj 5 pieczątek. Po 5 zamówieniu online otrzymasz kod rabatowy na Rollo Mały Gratis (do koszyka za min. 70 zł). Promocja wymaga zgody marketingowej.",
    code: "STAMP5",
    discountDisplay: "DARMOWE ROLLO",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/imageye___-_imgi_31_5fb241fb6377e060e75bb960e11c4cc9-1-ac48b6f9294dd70f0360ca5743faa3e0.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&max-h=625&max-w=800",
    badge: "KARTA LOJALNOŚCIOWA",
  },
  {
    id: "free-delivery",
    title: "Darmowa dostawa dla zamówień od 150 zł",
    tagline: "Darmowa dostawa na terenie Lublina",
    description:
      "Zamów jedzenie do biura, dla znajomych lub rodziny o wartości powyżej 150 PLN, a dostarczymy je na terenie całego Lublina całkowicie bezpłatnie!",
    code: "FREEDEL150",
    discountDisplay: "DARMOWA DOSTAWA",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/imageye___-_imgi_30_65e0cea829fe4acd3e3ff508bd30d5f8-1-e58f399429647cbce366334758f1110e.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&max-h=625&max-w=800",
    badge: "SZYBKA DOSTAWA",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Iwona S.",
    location: "Lublin Centrum",
    rating: 5,
    comment:
      "Zamawianie online jest super szybkie i wygodne! Mięso jest idealnie upieczone, a sos czosnkowy po prostu uzależnia!",
    date: "2 dni temu",
  },
  {
    id: "r2",
    author: "Jakub K.",
    location: "Krakowskie Przedmieście",
    rating: 5,
    comment:
      "Zdecydowanie najlepszy Rollo Monster XL w Lublinie. Waży ponad kilogram i bez problemu najedzą się dwie osoby. Przyjechał bardzo gorący!",
    date: "3 dni temu",
  },
  {
    id: "r3",
    author: "Grzegorz M.",
    location: "ul. Lipowa",
    rating: 5,
    comment:
      "Super miła obsługa, świeże chrupiące sałatki i autentyczny smak mięsa pieczonego na wglu. Szczerze polecam! 10/10",
    date: "tydzień temu",
  },
  {
    id: "r4",
    author: "Elena B.",
    location: "ul. Turystyczna",
    rating: 5,
    comment:
      "Wrap z falafelem jest niesamowicie chrupki i pełen smaku. Super, że mają porządne wegetariańskie opcje, które smakują wyśmienicie!",
    date: "2 tygodnie temu",
  },
];

export const GALLERY_PHOTOS = [
  {
    url: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/b75529f5-94e3-4439-b736-d6a4e724895c.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&h=600&w=800",
    title: "Chrupiący Rollo Kebab z rożna",
  },
  {
    url: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/8e6c32d9-d4ce-49a1-b51d-26394b3d128f.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&h=600&w=800",
    title: "Uczta Dostana Monster XL",
  },
  {
    url: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/aee8865c-3344-4fb8-93d1-e3661bf1072b.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&h=600&w=800",
    title: "Potrójnie Serowy Rollo",
  },
  {
    url: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/47d722b2-8df1-40db-b7c0-bc5c3f22f812.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&h=600&w=800",
    title: "Kebab Box z frytkami",
  },
  {
    url: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/e90c9620-1264-4dbf-a8b5-7ead9e945bdb.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&h=600&w=800",
    title: "Serowy Box z Jalapeno",
  },
  {
    url: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/6e38ccb3-b983-48aa-a3b0-81fe09721131.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&h=600&w=800",
    title: "Królewski Talerz Dostana",
  },
];
