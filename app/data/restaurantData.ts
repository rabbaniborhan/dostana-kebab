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
  { id: "all", label: "🔥 All Menu" },
  { id: "rollo", label: "🌯 Rollo Kebabs" },
  { id: "box", label: "📦 Kebab Boxes" },
  { id: "plates", label: "🍽️ Feast Plates" },
  { id: "pita", label: "🥙 Pita & Buns" },
  { id: "veggie", label: "🌱 Vegetarian" },
  { id: "sides", label: "🍟 Sides & Drinks" },
];

export const MEAT_OPTIONS = [
  "Chicken (100% Flame Grilled)",
  "Seasoned Premium Beef",
  "Mixed Meat (Beef & Chicken)",
  "Crispy Falafel",
];

export const SAUCE_OPTIONS = [
  "Creamy Signature Garlic Dip",
  "Fiery Harissa Chilli Dip",
  "Mild Herb Yoghurt Dip",
  "Mix Garlic & Harissa",
];

export const EXTRA_TOPPINGS = [
  { id: "extra-meat", name: "Extra Meat portion (+50g)", price: 7.0 },
  { id: "melted-cheese", name: "Double Melted Mozzarella", price: 4.5 },
  { id: "jalapenos", name: "Spicy Pickled Jalapeños", price: 3.0 },
  { id: "feta", name: "Crumbled Greek Feta", price: 4.0 },
  { id: "fries-inside", name: "Golden Crispy Fries Inside", price: 5.0 },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "rollo-classic",
    name: "Classic Rollo Kebab",
    category: "rollo",
    price: 24.9,
    description:
      "Charcoal-roasted succulent meat wrapped in a hot crispy tortilla lavash with iceberg lettuce, red cabbage, fresh cucumbers, ripe tomatoes & homemade sauce.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/b75529f5-94e3-4439-b736-d6a4e724895c.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
    badge: "Bestseller ⭐",
    availableMeats: MEAT_OPTIONS,
    availableSizes: [
      { name: "Regular (35cm)", extraPrice: 0 },
      { name: "Large (+100g Meat)", extraPrice: 8 },
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
      "The ultimate hunger destroyer! Huge 50cm toasted lavash loaded with 350g of meat, golden fries inside, melted double cheese, crisp veggies and double sauce dip.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/8e6c32d9-d4ce-49a1-b51d-26394b3d128f.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
    badge: "Chef's Heavyweight 👑",
    spicyLevel: 2,
    availableMeats: MEAT_OPTIONS,
    availableSauces: SAUCE_OPTIONS,
  },
  {
    id: "rollo-cheese-melt",
    name: "Triple Cheese Lovers Rollo",
    category: "rollo",
    price: 29.9,
    description:
      "Flame-broiled kebab meat smothered in melted cheddar, mozzarella, and creamy feta cheese, wrapped with crispy onions and house garlic sauce.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/aee8865c-3344-4fb8-93d1-e3661bf1072b.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
    badge: "Cheesy Goodness 🧀",
    availableMeats: MEAT_OPTIONS,
    availableSauces: SAUCE_OPTIONS,
  },
  {
    id: "box-classic",
    name: "Kebab Box Classic",
    category: "box",
    price: 26.9,
    description:
      "Bed of salted crispy fries topped with a mountain of hot flame-grilled meat, fresh chopped veggies, and generous pour of signature dips.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/47d722b2-8df1-40db-b7c0-bc5c3f22f812.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
    badge: "Most Popular 📦",
    availableMeats: MEAT_OPTIONS,
    availableSizes: [
      { name: "Regular Box (450g)", extraPrice: 0 },
      { name: "Large Box (650g)", extraPrice: 9 },
    ],
    availableSauces: SAUCE_OPTIONS,
  },
  {
    id: "box-deluxe-loaded",
    name: "Loaded Jalapeño Cheese Box",
    category: "box",
    price: 34.9,
    description:
      "Double meat portion over golden fries, loaded with spicy jalapeno slices, melted cheddar cheese sauce, garlic drizzle, and fresh red onions.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/e90c9620-1264-4dbf-a8b5-7ead9e945bdb.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
    badge: "Fiery Hot 🌶️",
    spicyLevel: 3,
    availableMeats: MEAT_OPTIONS,
    availableSauces: SAUCE_OPTIONS,
  },
  {
    id: "plate-dostana-royal",
    name: "Dostana Royal Feast Plate",
    category: "plates",
    price: 38.9,
    description:
      "Full diner plate packed with generous seasoned grilled meat, crisp stealth-cut fries or aromatic rice, garden salad trio, and warm flatbread pita slices.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/6e38ccb3-b983-48aa-a3b0-81fe09721131.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
    badge: "Full Feast 🍽️",
    availableMeats: MEAT_OPTIONS,
    availableSauces: SAUCE_OPTIONS,
  },
  {
    id: "plate-mix-grill",
    name: "Supreme Mix Grill & Falafel Plate",
    category: "plates",
    price: 45.9,
    description:
      "Combination of sliced beef, juicy chicken shish, 2 crispy falafels, fries, fresh parsley salad, warm toasted pita, and all 4 specialty dipping sauces.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/afde8b8a-9774-4745-8380-2f4df0139f65.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
    badge: "Meat Lover's Choice 🔥",
    availableSauces: SAUCE_OPTIONS,
  },

  {
    id: "veggie-greek-feta",
    name: "Greek Feta & Salad Wrap",
    category: "veggie",
    price: 22.9,
    description:
      "Rich block of authentic Greek feta cheese, black olives, crisp cucumbers, sweet bell peppers, red onion & herbal garlic vinaigrette.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/b75529f5-94e3-4439-b736-d6a4e724895c.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
    isVegetarian: true,
    availableSauces: SAUCE_OPTIONS,
  },
  {
    id: "sides-french-fries",
    name: "Crispy Golden French Fries",
    category: "sides",
    price: 11.9,
    description: "Portion of stealth-cut extra crispy seasoned potato fries.",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/47d722b2-8df1-40db-b7c0-bc5c3f22f812.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=600",
  },

];

export const PROMOTIONS: Promotion[] = [
  {
    id: "new-customer",
    title: "5% OFF Your First Online Order",
    tagline: "Exclusive Welcome Gift 🎁",
    description:
      "Get 5% instant discount on your first online delivery or takeaway order of 70 PLN or more! Use coupon code DOSTANA5 at checkout.",
    code: "DOSTANA5",
    discountDisplay: "5% OFF",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/imageye___-_imgi_32_d4cdebe687ae8357ddbd0422f5d84230-1-6f516b90be782e231d1e1dfe082d3819.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&max-h=625&max-w=800",
    badge: "NEW CUSTOMERS",
  },
  {
    id: "loyalty-stamps",
    title: "Collect Stamps & Get FREE Rollo!",
    tagline: "Loyalty Rewards Program 🎟️",
    description:
      "Earn 1 digital stamp with every online order. Collect 5 stamps and receive a FREE Small Rollo Kebab with your 6th order!",
    code: "STAMP5",
    discountDisplay: "FREE ROLLO",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/imageye___-_imgi_31_5fb241fb6377e060e75bb960e11c4cc9-1-ac48b6f9294dd70f0360ca5743faa3e0.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&max-h=625&max-w=800",
    badge: "LOYALTY CARD",
  },
  {
    id: "free-delivery",
    title: "FREE Express Delivery on Orders 150+ PLN",
    tagline: "Hot & Fresh to Your Door 🛵",
    description:
      "Order food for your office, friends, or family gathering over 150 PLN and we will deliver it anywhere in Lublin completely free of charge!",
    code: "FREEDEL150",
    discountDisplay: "FREE DELIVERY",
    image:
      "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/imageye___-_imgi_30_65e0cea829fe4acd3e3ff508bd30d5f8-1-e58f399429647cbce366334758f1110e.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&max-h=625&max-w=800",
    badge: "FAST DELIVERY",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Iwona S.",
    location: "Lublin Center",
    rating: 5,
    comment:
      "Ordering online is super fast and smooth! The meat is cooked to perfection and the garlic sauce is addictive!",
    date: "2 days ago",
  },
  {
    id: "r2",
    author: "Jakub K.",
    location: "Krakowskie Przedmieście",
    rating: 5,
    comment:
      "Hands down the best Rollo Monster XL in Lublin. It weighs over a kilo and feeds 2 people easily. Arrived piping hot!",
    date: "3 days ago",
  },
  {
    id: "r3",
    author: "Grzegorz M.",
    location: "Lipowa branch",
    rating: 5,
    comment:
      "Super friendly staff, fresh crunchy salads and authentic charcoal flame flavor. 10/10 recommendation!",
    date: "1 week ago",
  },
  {
    id: "r4",
    author: "Elena B.",
    location: "Turystyczna branch",
    rating: 5,
    comment:
      "The Falafel wrap is so crispy and flavorful. Love that they have real vegan options that taste heavenly!",
    date: "2 weeks ago",
  },
];

export const GALLERY_PHOTOS = [
  {
    url: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/b75529f5-94e3-4439-b736-d6a4e724895c.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&h=600&w=800",
    title: "Crispy Charcoal Rollo Kebab",
  },
  {
    url: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/8e6c32d9-d4ce-49a1-b51d-26394b3d128f.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&h=600&w=800",
    title: "Dostana Monster XL Feast",
  },
  {
    url: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/aee8865c-3344-4fb8-93d1-e3661bf1072b.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&h=600&w=800",
    title: "Triple Melted Cheese Rollo",
  },
  {
    url: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/47d722b2-8df1-40db-b7c0-bc5c3f22f812.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&h=600&w=800",
    title: "Loaded Kebab Box & Fries",
  },
  {
    url: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/e90c9620-1264-4dbf-a8b5-7ead9e945bdb.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&h=600&w=800",
    title: "Spicy Jalapeño Cheese Deluxe",
  },
  {
    url: "https://restaumatic-production.imgix.net/uploads/accounts/308281/media_library/6e38ccb3-b983-48aa-a3b0-81fe09721131.jpg?auto=compress%2Cformat&blur=0&crop=focalpoint&fit=crop&h=600&w=800",
    title: "Dostana Royal Dinner Plate",
  },
];
