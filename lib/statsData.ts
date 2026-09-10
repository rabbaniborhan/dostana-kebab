// Dedicated mock datasets for Dostana Kebab Admin Statistics Module

// 1. Total Sales Datasets
export const TOTAL_SALES_VENUE_DATASET: Record<string, {
  orders: string;
  ordersChange: string;
  revenue: string;
  revenueChange: string;
  avgOrder: string;
  avgOrderChange: string;
  webPct: number;
  voicePct: number;
  summaryRows: Array<{
    channel: string;
    orders: number;
    shareOrders: string;
    cash: string;
    card: string;
    transfer: string;
    onlinePayment: string;
    revenue: string;
    revenueShare: string;
    avgOrderValue: string;
  }>;
}> = {
  "Wszystkie lokale": {
    orders: "11",
    ordersChange: "288.87",
    revenue: "780,07",
    revenueChange: "887.86",
    avgOrder: "70,92",
    avgOrderChange: "114.81",
    webPct: 91.68,
    voicePct: 8.32,
    summaryRows: [
      { channel: "Suma", orders: 11, shareOrders: "100.00%", cash: "25,00", card: "39,90", transfer: "0,00", onlinePayment: "715,17", revenue: "780,07", revenueShare: "100.00%", avgOrderValue: "70,92" },
      { channel: "Strona WWW", orders: 9, shareOrders: "81.82%", cash: "0,00", card: "0,00", transfer: "0,00", onlinePayment: "715,17", revenue: "715,17", revenueShare: "91.68%", avgOrderValue: "79,46" },
      { channel: "Zamówienie głosowe", orders: 2, shareOrders: "18.18%", cash: "25,00", card: "39,90", transfer: "0,00", onlinePayment: "0,00", revenue: "64,90", revenueShare: "8.32%", avgOrderValue: "32.45" },
    ]
  },
  "Dostana Kebab Wróbla": {
    orders: "4",
    ordersChange: "150.00",
    revenue: "285,40",
    revenueChange: "420.10",
    avgOrder: "71,35",
    avgOrderChange: "108.20",
    webPct: 85.0,
    voicePct: 15.0,
    summaryRows: [
      { channel: "Suma", orders: 4, shareOrders: "100.00%", cash: "10,00", card: "15,00", transfer: "0,00", onlinePayment: "260,40", revenue: "285,40", revenueShare: "100.00%", avgOrderValue: "71,35" },
      { channel: "Strona WWW", orders: 3, shareOrders: "75.00%", cash: "0,00", card: "0,00", transfer: "0,00", onlinePayment: "260,40", revenue: "242,59", revenueShare: "85.00%", avgOrderValue: "80,86" },
      { channel: "Zamówienie głosowe", orders: 1, shareOrders: "25.00%", cash: "10,00", card: "15,00", transfer: "0,00", onlinePayment: "0,00", revenue: "42,81", revenueShare: "15.00%", avgOrderValue: "42,81" },
    ]
  },
  "Dostana Kebab Lipowa": {
    orders: "3",
    ordersChange: "200.00",
    revenue: "210,50",
    revenueChange: "310.40",
    avgOrder: "70,16",
    avgOrderChange: "95.50",
    webPct: 94.2,
    voicePct: 5.8,
    summaryRows: [
      { channel: "Suma", orders: 3, shareOrders: "100.00%", cash: "5,00", card: "10,00", transfer: "0,00", onlinePayment: "195,50", revenue: "210,50", revenueShare: "100.00%", avgOrderValue: "70,16" },
      { channel: "Strona WWW", orders: 3, shareOrders: "100.00%", cash: "0,00", card: "0,00", transfer: "0,00", onlinePayment: "195,50", revenue: "198,29", revenueShare: "94.20%", avgOrderValue: "66,10" },
      { channel: "Zamówienie głosowe", orders: 0, shareOrders: "0.00%", cash: "5,00", card: "10,00", transfer: "0,00", onlinePayment: "0,00", revenue: "12,21", revenueShare: "5.80%", avgOrderValue: "0,00" },
    ]
  },
  "Dostana Kebab Krakowskie Przedmieście": {
    orders: "2",
    ordersChange: "310.00",
    revenue: "154,17",
    revenueChange: "612.00",
    avgOrder: "77,08",
    avgOrderChange: "145.00",
    webPct: 88.5,
    voicePct: 11.5,
    summaryRows: [
      { channel: "Suma", orders: 2, shareOrders: "100.00%", cash: "0,00", card: "14,90", transfer: "0,00", onlinePayment: "139,27", revenue: "154,17", revenueShare: "100.00%", avgOrderValue: "77,08" },
      { channel: "Strona WWW", orders: 2, shareOrders: "100.00%", cash: "0,00", card: "0,00", transfer: "0,00", onlinePayment: "139,27", revenue: "136,44", revenueShare: "88.50%", avgOrderValue: "68,22" },
      { channel: "Zamówienie głosowe", orders: 0, shareOrders: "0.00%", cash: "0,00", card: "14,90", transfer: "0,00", onlinePayment: "0,00", revenue: "17,73", revenueShare: "11.50%", avgOrderValue: "0,00" },
    ]
  },
  "Dostana Kebab Sympatyczna": {
    orders: "1",
    ordersChange: "100.00",
    revenue: "65,00",
    revenueChange: "150.00",
    avgOrder: "65,00",
    avgOrderChange: "50.00",
    webPct: 100.0,
    voicePct: 0.0,
    summaryRows: [
      { channel: "Suma", orders: 1, shareOrders: "100.00%", cash: "0,00", card: "0,00", transfer: "0,00", onlinePayment: "65,00", revenue: "65,00", revenueShare: "100.00%", avgOrderValue: "65,00" },
      { channel: "Strona WWW", orders: 1, shareOrders: "100.00%", cash: "0,00", card: "0,00", transfer: "0,00", onlinePayment: "65,00", revenue: "65,00", revenueShare: "100.00%", avgOrderValue: "65,00" },
      { channel: "Zamówienie głosowe", orders: 0, shareOrders: "0.00%", cash: "0,00", card: "0,00", transfer: "0,00", onlinePayment: "0,00", revenue: "0,00", revenueShare: "0.00%", avgOrderValue: "0,00" },
    ]
  },
  "Dostana Kebab Nadbystrzycka": {
    orders: "1",
    ordersChange: "100.00",
    revenue: "65,00",
    revenueChange: "120.00",
    avgOrder: "65,00",
    avgOrderChange: "40.00",
    webPct: 90.0,
    voicePct: 10.0,
    summaryRows: [
      { channel: "Suma", orders: 1, shareOrders: "100.00%", cash: "10,00", card: "0,00", transfer: "0,00", onlinePayment: "55,00", revenue: "65,00", revenueShare: "100.00%", avgOrderValue: "65,00" },
      { channel: "Strona WWW", orders: 1, shareOrders: "100.00%", cash: "0,00", card: "0,00", transfer: "0,00", onlinePayment: "55,00", revenue: "58,50", revenueShare: "90.00%", avgOrderValue: "58,50" },
      { channel: "Zamówienie głosowe", orders: 0, shareOrders: "0.00%", cash: "10,00", card: "0,00", transfer: "0,00", onlinePayment: "0,00", revenue: "6,50", revenueShare: "10.00%", avgOrderValue: "0,00" },
    ]
  },
  "Dostana Kebab Turystyczna": {
    orders: "0",
    ordersChange: "0.00",
    revenue: "0,00",
    revenueChange: "0.00",
    avgOrder: "0,00",
    avgOrderChange: "0.00",
    webPct: 0.0,
    voicePct: 0.0,
    summaryRows: [
      { channel: "Suma", orders: 0, shareOrders: "0.00%", cash: "0,00", card: "0,00", transfer: "0,00", onlinePayment: "0,00", revenue: "0,00", revenueShare: "0.00%", avgOrderValue: "0,00" },
      { channel: "Strona WWW", orders: 0, shareOrders: "0.00%", cash: "0,00", card: "0,00", transfer: "0,00", onlinePayment: "0,00", revenue: "0,00", revenueShare: "0.00%", avgOrderValue: "0,00" },
      { channel: "Zamówienie głosowe", orders: 0, shareOrders: "0.00%", cash: "0,00", card: "0,00", transfer: "0,00", onlinePayment: "0,00", revenue: "0,00", revenueShare: "0.00%", avgOrderValue: "0,00" },
    ]
  }
};

export const TOTAL_SALES_COMBO_CHART: Record<string, Array<{ date: string; revenue: number; prevRevenue: number; orders: number; prevOrders: number | null; revPct: number; prevRevPct: number }>> = {
  "Wszystkie lokale": [
    { date: "01.9", revenue: 285, prevRevenue: 45, orders: 3.0, prevOrders: 1.0, revPct: 95, prevRevPct: 15 },
    { date: "02.9", revenue: 200, prevRevenue: 25, orders: 3.0, prevOrders: 1.0, revPct: 67, prevRevPct: 8 },
    { date: "03.9", revenue: 250, prevRevenue: 25, orders: 4.0, prevOrders: 1.0, revPct: 83, prevRevPct: 8 },
    { date: "04.9", revenue: 40,  prevRevenue: 25, orders: 1.0, prevOrders: 1.0, revPct: 13, prevRevPct: 8 },
    { date: "05.9", revenue: 100, prevRevenue: 265, orders: 2.0, prevOrders: 3.0, revPct: 33, prevRevPct: 88 },
    { date: "06.9", revenue: 278, prevRevenue: 0,   orders: 3.0, prevOrders: null, revPct: 93, prevRevPct: 0 },
  ],
  "Dostana Kebab Wróbla": [
    { date: "01.9", revenue: 140, prevRevenue: 20, orders: 2.0, prevOrders: 1.0, revPct: 70, prevRevPct: 10 },
    { date: "02.9", revenue: 90, prevRevenue: 10, orders: 1.0, prevOrders: 0.0, revPct: 45, prevRevPct: 5 },
    { date: "03.9", revenue: 120, prevRevenue: 15, orders: 2.0, prevOrders: 1.0, revPct: 60, prevRevPct: 7 },
    { date: "04.9", revenue: 20,  prevRevenue: 10, orders: 1.0, prevOrders: 0.0, revPct: 10, prevRevPct: 5 },
    { date: "05.9", revenue: 50, prevRevenue: 120, orders: 1.0, prevOrders: 2.0, revPct: 25, prevRevPct: 60 },
    { date: "06.9", revenue: 130, prevRevenue: 0,   orders: 2.0, prevOrders: null, revPct: 65, prevRevPct: 0 },
  ],
  "Dostana Kebab Lipowa": [
    { date: "01.9", revenue: 80, prevRevenue: 15, orders: 1.0, prevOrders: 0.0, revPct: 40, prevRevPct: 7 },
    { date: "02.9", revenue: 60, prevRevenue: 10, orders: 1.0, prevOrders: 1.0, revPct: 30, prevRevPct: 5 },
    { date: "03.9", revenue: 80, prevRevenue: 5, orders: 1.0, prevOrders: 0.0, revPct: 40, prevRevPct: 2 },
    { date: "04.9", revenue: 10,  prevRevenue: 10, orders: 0.0, prevOrders: 1.0, revPct: 5, prevRevPct: 5 },
    { date: "05.9", revenue: 30, prevRevenue: 90, orders: 1.0, prevOrders: 1.0, revPct: 15, prevRevPct: 45 },
    { date: "06.9", revenue: 90, prevRevenue: 0,   orders: 1.0, prevOrders: null, revPct: 45, prevRevPct: 0 },
  ],
  "Dostana Kebab Krakowskie Przedmieście": [
    { date: "01.9", revenue: 65, prevRevenue: 10, orders: 1.0, prevOrders: 0.0, revPct: 32, prevRevPct: 5 },
    { date: "02.9", revenue: 50, prevRevenue: 5, orders: 1.0, prevOrders: 0.0, revPct: 25, prevRevPct: 2 },
    { date: "03.9", revenue: 50, prevRevenue: 5, orders: 1.0, prevOrders: 0.0, revPct: 25, prevRevPct: 2 },
    { date: "04.9", revenue: 10,  prevRevenue: 5, orders: 0.0, prevOrders: 0.0, revPct: 5, prevRevPct: 2 },
    { date: "05.9", revenue: 20, prevRevenue: 55, orders: 0.0, prevOrders: 1.0, revPct: 10, prevRevPct: 27 },
    { date: "06.9", revenue: 58, prevRevenue: 0,   orders: 1.0, prevOrders: null, revPct: 29, prevRevPct: 0 },
  ],
  "Dostana Kebab Sympatyczna": [
    { date: "01.9", revenue: 30, prevRevenue: 0, orders: 0.0, prevOrders: 0.0, revPct: 15, prevRevPct: 0 },
    { date: "02.9", revenue: 25, prevRevenue: 0, orders: 0.0, prevOrders: 0.0, revPct: 12, prevRevPct: 0 },
    { date: "03.9", revenue: 25, prevRevenue: 0, orders: 0.0, prevOrders: 0.0, revPct: 12, prevRevPct: 0 },
    { date: "04.9", revenue: 5,  prevRevenue: 0, orders: 0.0, prevOrders: 0.0, revPct: 2, prevRevPct: 0 },
    { date: "05.9", revenue: 10, prevRevenue: 20, orders: 0.0, prevOrders: 0.0, revPct: 5, prevRevPct: 10 },
    { date: "06.9", revenue: 25, prevRevenue: 0,   orders: 1.0, prevOrders: null, revPct: 12, prevRevPct: 0 },
  ],
  "Dostana Kebab Nadbystrzycka": [
    { date: "01.9", revenue: 25, prevRevenue: 0, orders: 0.0, prevOrders: 0.0, revPct: 12, prevRevPct: 0 },
    { date: "02.9", revenue: 20, prevRevenue: 0, orders: 0.0, prevOrders: 0.0, revPct: 10, prevRevPct: 0 },
    { date: "03.9", revenue: 20, prevRevenue: 0, orders: 0.0, prevOrders: 0.0, revPct: 10, prevRevPct: 0 },
    { date: "04.9", revenue: 5,  prevRevenue: 0, orders: 0.0, prevOrders: 0.0, revPct: 2, prevRevPct: 0 },
    { date: "05.9", revenue: 10, prevRevenue: 10, orders: 0.0, prevOrders: 0.0, revPct: 5, prevRevPct: 5 },
    { date: "06.9", revenue: 20, prevRevenue: 0,   orders: 1.0, prevOrders: null, revPct: 10, prevRevPct: 0 },
  ],
  "Dostana Kebab Turystyczna": [
    { date: "01.9", revenue: 0, prevRevenue: 0, orders: 0, prevOrders: 0, revPct: 0, prevRevPct: 0 },
    { date: "02.9", revenue: 0, prevRevenue: 0, orders: 0, prevOrders: 0, revPct: 0, prevRevPct: 0 },
    { date: "03.9", revenue: 0, prevRevenue: 0, orders: 0, prevOrders: 0, revPct: 0, prevRevPct: 0 },
    { date: "04.9", revenue: 0, prevRevenue: 0, orders: 0, prevOrders: 0, revPct: 0, prevRevPct: 0 },
    { date: "05.9", revenue: 0, prevRevenue: 0, orders: 0, prevOrders: 0, revPct: 0, prevRevPct: 0 },
    { date: "06.9", revenue: 0, prevRevenue: 0, orders: 0, prevOrders: 0, revPct: 0, prevRevPct: 0 },
  ]
};

export const TOTAL_SALES_CHANNELS_DATA = [
  {
    date: "01.9",
    incomeWeb: 260,
    incomeVoice: 25,
    prevIncomeWeb: 45,
    prevIncomeVoice: 0,
    ordersWeb: 2,
    ordersVoice: 1,
    prevOrdersWeb: 1,
    prevOrdersVoice: 0,
    incomeWebPct: 87,
    incomeVoicePct: 8,
    prevIncomeWebPct: 15,
    ordersWebPct: 50,
    ordersVoicePct: 25,
    prevOrdersWebPct: 25,
  },
  {
    date: "02.9",
    incomeWeb: 160,
    incomeVoice: 40,
    prevIncomeWeb: 25,
    prevIncomeVoice: 0,
    ordersWeb: 2,
    ordersVoice: 1,
    prevOrdersWeb: 1,
    prevOrdersVoice: 0,
    incomeWebPct: 53,
    incomeVoicePct: 13,
    prevIncomeWebPct: 8,
    ordersWebPct: 50,
    ordersVoicePct: 25,
    prevOrdersWebPct: 25,
  },
  {
    date: "03.9",
    incomeWeb: 250,
    incomeVoice: 0,
    prevIncomeWeb: 25,
    prevIncomeVoice: 0,
    ordersWeb: 4,
    ordersVoice: 0,
    prevOrdersWeb: 1,
    prevOrdersVoice: 0,
    incomeWebPct: 83,
    incomeVoicePct: 0,
    prevIncomeWebPct: 8,
    ordersWebPct: 100,
    ordersVoicePct: 0,
    prevOrdersWebPct: 25,
  },
  {
    date: "04.9",
    incomeWeb: 40,
    incomeVoice: 0,
    prevIncomeWeb: 25,
    prevIncomeVoice: 0,
    ordersWeb: 1,
    ordersVoice: 0,
    prevOrdersWeb: 1,
    prevOrdersVoice: 0,
    incomeWebPct: 13,
    incomeVoicePct: 0,
    prevIncomeWebPct: 8,
    ordersWebPct: 25,
    ordersVoicePct: 0,
    prevOrdersWebPct: 25,
  },
  {
    date: "05.9",
    incomeWeb: 100,
    incomeVoice: 0,
    prevIncomeWeb: 265,
    prevIncomeVoice: 0,
    ordersWeb: 2,
    ordersVoice: 0,
    prevOrdersWeb: 3,
    prevOrdersVoice: 0,
    incomeWebPct: 33,
    incomeVoicePct: 0,
    prevIncomeWebPct: 88,
    ordersWebPct: 50,
    ordersVoicePct: 0,
    prevOrdersWebPct: 75,
  },
  {
    date: "06.9",
    incomeWeb: 278,
    incomeVoice: 0,
    prevIncomeWeb: 0,
    prevIncomeVoice: 0,
    ordersWeb: 3,
    ordersVoice: 0,
    prevOrdersWeb: 0,
    prevOrdersVoice: 0,
    incomeWebPct: 93,
    incomeVoicePct: 0,
    prevIncomeWebPct: 0,
    ordersWebPct: 75,
    ordersVoicePct: 0,
    prevOrdersWebPct: 0,
  },
];


// 2. Products & Categories Datasets
export const PRODUCTS_CATEGORY_SUMMARY_ROWS = [
  { id: "1", category: "Dania fit & vege", sold: 1, shareUnits: "1.69%", income: "19.00 zł", revenueShare: "1.30%" },
  { id: "2", category: "Dodatki", sold: 1, shareUnits: "1.69%", income: "10.00 zł", revenueShare: "0.69%" },
  { id: "4", category: "Rollo Kebab", sold: 6, shareUnits: "10.17%", income: "175.00 zł", revenueShare: "11.99%" },
  { id: "5", category: "Kebab rollo", sold: 4, shareUnits: "6.78%", income: "118.00 zł", revenueShare: "8.09%" },
  { id: "6", category: "Kebab w bułce", sold: 2, shareUnits: "3.39%", income: "61.00 zł", revenueShare: "4.18%" },
  { id: "7", category: "Kebab w picie", sold: 31, shareUnits: "52.54%", income: "746.00 zł", revenueShare: "51.13%" },
  { id: "8", category: "Napoje", sold: 5, shareUnits: "8.47%", income: "35.50 zł", revenueShare: "2.43%" },
  { id: "9", category: "Zestawy na Talerzu", sold: 7, shareUnits: "11.86%", income: "239.50 zł", revenueShare: "16.42%" },
  { id: "10", category: "Zestawy na talerzu", sold: 1, shareUnits: "1.69%", income: "36.00 zł", revenueShare: "2.47%" },
];

export const PRODUCT_SUMMARY_ROWS = [
  { id: "1", product: "Ayran 0.25l", category: "Napoje", parameter: "", sold: 3, shareSold: "5.08%", revenueShare: "1.34%", revenue: "19.50 zł" },
  { id: "2", product: "Mała sałatka box", category: "Kebab Box", parameter: "", sold: 1, shareSold: "1.69%", revenueShare: "1.30%", revenue: "19.00 zł" },
  { id: "3", product: "Duża bułka z frytkami", category: "Kebab w bułce", parameter: "", sold: 2, shareSold: "3.39%", revenueShare: "4.18%", revenue: "61.00 zł" },
  { id: "4", product: "Coca-Cola 0.5l", category: "Napoje", parameter: "", sold: 1, shareSold: "1.69%", revenueShare: "0.62%", revenue: "9.00 zł" },
  { id: "5", product: "Małe frytki", category: "Dodatki", parameter: "", sold: 1, shareSold: "1.69%", revenueShare: "0.69%", revenue: "10.00 zł" },
  { id: "6", product: "Duże frytki z posypką", category: "Zestawy na Talerzu", parameter: "", sold: 1, shareSold: "1.69%", revenueShare: "1.78%", revenue: "26.00 zł" },
  { id: "7", product: "Średnie frytki z posypką", category: "Zestawy na Talerzu", parameter: "", sold: 1, shareSold: "1.69%", revenueShare: "1.51%", revenue: "22.00 zł" },
  { id: "8", product: "Duże frytki z posypką", category: "Zestawy na talerzu", parameter: "", sold: 1, shareSold: "1.69%", revenueShare: "2.47%", revenue: "36.00 zł" },
  { id: "9", product: "Kebab Gigant", category: "Kebab w picie", parameter: "", sold: 1, shareSold: "1.69%", revenueShare: "2.81%", revenue: "41.00 zł" },
  { id: "10", product: "Kebab Grecki", category: "Kebab w picie", parameter: "", sold: 4, shareSold: "6.78%", revenueShare: "6.92%", revenue: "101.00 zł" },
  { id: "11", product: "Mega Kebab", category: "Kebab w picie", parameter: "", sold: 1, shareSold: "1.69%", revenueShare: "2.12%", revenue: "31.00 zł" },
  { id: "12", product: "Duży Rollo Kebab", category: "Kebab rollo", parameter: "", sold: 2, shareSold: "3.39%", revenueShare: "3.84%", revenue: "56.00 zł" },
  { id: "13", product: "Duży Rollo Kebab", category: "Rollo Kebab", parameter: "", sold: 1, shareSold: "1.69%", revenueShare: "2.06%", revenue: "30.00 zł" },
  { id: "14", product: "Duży Rollo Kebab", category: "Rollo Kebab", parameter: "", sold: 3, shareSold: "5.08%", revenueShare: "6.17%", revenue: "90.00 zł" },
  { id: "15", product: "Kebab Rollo Nuggets", category: "Rollo Kebab", parameter: "", sold: 2, shareSold: "3.39%", revenueShare: "3.77%", revenue: "55.00 zł" },
  { id: "16", product: "Kebab Studencki", category: "Kebab w picie", parameter: "", sold: 5, shareSold: "8.47%", revenueShare: "5.48%", revenue: "80.00 zł" },
  { id: "17", product: "XL Kebab", category: "Kebab w picie", parameter: "", sold: 1, shareSold: "1.69%", revenueShare: "1.92%", revenue: "28.00 zł" },
  { id: "18", product: "XXL Kebab", category: "Kebab w picie", parameter: "", sold: 1, shareSold: "1.69%", revenueShare: "2.06%", revenue: "30.00 zł" },
  { id: "19", product: "Duży kebab", category: "Kebab w picie", parameter: "", sold: 5, shareSold: "8.47%", revenueShare: "10.42%", revenue: "152.00 zł" },
  { id: "20", product: "Kebab falafel w picie", category: "Dania fit & vege", parameter: "", sold: 1, shareSold: "1.69%", revenueShare: "1.30%", revenue: "19.00 zł" },
  { id: "21", product: "Kebab rollo z frytkami i serem", category: "Kebab rollo", parameter: "", sold: 1, shareSold: "1.69%", revenueShare: "2.06%", revenue: "30.00 zł" },
  { id: "22", product: "Kebab z frytkami", category: "Kebab w picie", parameter: "", sold: 4, shareSold: "6.78%", revenueShare: "6.44%", revenue: "94.00 zł" },
  { id: "23", product: "Kebab z serem", category: "Kebab w picie", parameter: "", sold: 1, shareSold: "1.69%", revenueShare: "1.58%", revenue: "23.00 zł" },
  { id: "24", product: "Średni kebab", category: "Kebab w picie", parameter: "", sold: 8, shareSold: "13.56%", revenueShare: "10.83%", revenue: "158.00 zł" },
  { id: "25", product: "Pepsi 0.5l", category: "Napoje", parameter: "", sold: 1, shareSold: "1.69%", revenueShare: "0.48%", revenue: "7.00 zł" },
  { id: "26", product: "Duża Tortilla", category: "Kebab rollo", parameter: "", sold: 1, shareSold: "1.69%", revenueShare: "2.19%", revenue: "32.00 zł" },
  { id: "27", product: "Zestaw obiadowy", category: "Zestawy na Talerzu", parameter: "", sold: 1, shareSold: "1.69%", revenueShare: "2.39%", revenue: "34.90 zł" },
  { id: "28", product: "Zestaw obiadowy XXL", category: "Zestawy na Talerzu", parameter: "", sold: 4, shareSold: "6.78%", revenueShare: "10.73%", revenue: "156.60 zł" },
];

export const EXTRAS_SUMMARY_ROWS = [
  { id: "1", product: "Chipotle ostry", sold: 2, participation: "1.85%", revenue: "0.00 zł", revenueShare: "0.00%" },
  { id: "2", product: "baranina", sold: 8, participation: "7.41%", revenue: "16.00 zł", revenueShare: "20.25%" },
  { id: "3", product: "kapusta biała i czerwona", sold: 1, participation: "0.93%", revenue: "2.00 zł", revenueShare: "2.53%" },
  { id: "4", product: "ostry chipotle", sold: 1, participation: "0.93%", revenue: "0.00 zł", revenueShare: "0.00%" },
  { id: "5", product: "dodatkowe mięso 100g", sold: 2, participation: "1.85%", revenue: "18.00 zł", revenueShare: "22.78%" },
  { id: "6", product: "dodatkowe mięso 100g", sold: 1, participation: "0.93%", revenue: "9.00 zł", revenueShare: "11.39%" },
  { id: "7", product: "ser żółty", sold: 2, participation: "1.85%", revenue: "6.00 zł", revenueShare: "7.59%" },
  { id: "8", product: "jalapeno", sold: 1, participation: "0.93%", revenue: "1.00 zł", revenueShare: "1.27%" },
  { id: "9", product: "ketchup", sold: 2, participation: "1.85%", revenue: "0.00 zł", revenueShare: "0.00%" },
  { id: "10", product: "kurczak", sold: 11, participation: "10.19%", revenue: "0.00 zł", revenueShare: "0.00%" },
  { id: "11", product: "mięso mieszane", sold: 17, participation: "15.74%", revenue: "5.00 zł", revenueShare: "6.33%" },
  { id: "12", product: "mięso mieszane 100g", sold: 1, participation: "0.93%", revenue: "9.00 zł", revenueShare: "11.39%" },
  { id: "13", product: "ogórek kiszony", sold: 2, participation: "1.85%", revenue: "2.00 zł", revenueShare: "2.53%" },
  { id: "14", product: "ser żółty", sold: 3, participation: "2.78%", revenue: "9.00 zł", revenueShare: "11.39%" },
  { id: "15", product: "sos czosnkowy", sold: 4, participation: "3.70%", revenue: "0.00 zł", revenueShare: "0.00%" },
  { id: "16", product: "sos mango majo", sold: 1, participation: "0.93%", revenue: "2.00 zł", revenueShare: "2.53%" },
  { id: "17", product: "sos mieszany", sold: 27, participation: "25.00%", revenue: "0.00 zł", revenueShare: "0.00%" },
  { id: "18", product: "sos łagodny", sold: 12, participation: "11.11%", revenue: "0.00 zł", revenueShare: "0.00%" },
  { id: "19", product: "wołowo - barani", sold: 10, participation: "9.26%", revenue: "0.00 zł", revenueShare: "0.00%" },
];

export const PRODUCTS_VENUE_DATASET: Record<string, {
  soldQty: string;
  revenue: string;
  avgOrderQty: string;
  avgOrderRev: string;
  categories: typeof PRODUCTS_CATEGORY_SUMMARY_ROWS;
  products: typeof PRODUCT_SUMMARY_ROWS;
  quantityRankData: Array<{ name: string; qty: number; maxQty: number }>;
  revenueRankData: Array<{ name: string; val: string; pct: number }>;
  donutQuantityData: Array<{ label: string; percentage: number; color: string }>;
  donutRevenueData: Array<{ label: string; percentage: number; color: string }>;
}> = {
  "Wszystkie lokale": {
    soldQty: "59",
    revenue: "1 459,00",
    avgOrderQty: "2,6",
    avgOrderRev: "63,43",
    categories: PRODUCTS_CATEGORY_SUMMARY_ROWS,
    products: PRODUCT_SUMMARY_ROWS,
    quantityRankData: [
      { name: "Kebab Rollo Wołowina (Duży)", qty: 8, maxQty: 8 },
      { name: "Kebab Studencki", qty: 5, maxQty: 8 },
      { name: "Kebab Duży", qty: 5, maxQty: 8 },
      { name: "Kebab z Frytkami", qty: 4, maxQty: 8 },
      { name: "Zestaw Obiadowy XL", qty: 4, maxQty: 8 },
      { name: "Ayran Klasyczny 0.25l", qty: 3, maxQty: 8 },
      { name: "Kebab Rollo Drób", qty: 3, maxQty: 8 },
      { name: "Baklava z Orzechami", qty: 2, maxQty: 8 },
    ],
    revenueRankData: [
      { name: "Kebab Rollo Wołowina (Duży)", val: "180.00 zł", pct: 100 },
      { name: "Zestaw Obiadowy XL", val: "180.00 zł", pct: 100 },
      { name: "Kebab Duży", val: "162.00 zł", pct: 90 },
      { name: "Kebab Studencki", val: "108.00 zł", pct: 60 },
      { name: "Kebab z Frytkami", val: "94.50 zł", pct: 52.5 },
      { name: "Kebab Rollo Drób", val: "88.00 zł", pct: 48.8 },
      { name: "Kebab Box Specjalny", val: "80.00 zł", pct: 44.4 },
      { name: "Baklava z Orzechami", val: "61.00 zł", pct: 33.8 },
    ],
    donutQuantityData: [
      { label: "Rollo Kebab", percentage: 57.6, color: "#f26522" },
      { label: "Zestawy dla 2 osób", percentage: 11.9, color: "#fbbf24" },
      { label: "Kebab Rollo", percentage: 10.2, color: "#38bdf8" },
      { label: "Kebab na talerzu", percentage: 8.5, color: "#34d399" },
      { label: "Kebab w bułce", percentage: 5.1, color: "#a855f7" },
      { label: "Napoje & Dodatki", percentage: 6.7, color: "#ec4899" },
    ],
    donutRevenueData: [
      { label: "Rollo Kebab", percentage: 57.1, color: "#f26522" },
      { label: "Zestawy dla 2 osób", percentage: 13.0, color: "#fbbf24" },
      { label: "Kebab Rollo", percentage: 10.4, color: "#38bdf8" },
      { label: "Kebab na talerzu", percentage: 8.7, color: "#34d399" },
      { label: "Kebab w bułce", percentage: 5.2, color: "#a855f7" },
      { label: "Napoje & Dodatki", percentage: 5.6, color: "#ec4899" },
    ],
  },
  "Dostana Kebab Wróbla": {
    soldQty: "18",
    revenue: "408,40",
    avgOrderQty: "3,0",
    avgOrderRev: "68,07",
    categories: PRODUCTS_CATEGORY_SUMMARY_ROWS.slice(0, 4),
    products: PRODUCT_SUMMARY_ROWS.slice(0, 8),
    quantityRankData: [
      { name: "Kebab Rollo Wołowina (Duży)", qty: 6, maxQty: 6 },
      { name: "Kebab Duży", qty: 4, maxQty: 6 },
      { name: "Kebab z Frytkami", qty: 3, maxQty: 6 },
      { name: "Ayran Klasyczny 0.25l", qty: 3, maxQty: 6 },
      { name: "Baklava z Orzechami", qty: 2, maxQty: 6 },
    ],
    revenueRankData: [
      { name: "Kebab Rollo Wołowina (Duży)", val: "135.00 zł", pct: 100 },
      { name: "Kebab Duży", val: "130.00 zł", pct: 96 },
      { name: "Kebab z Frytkami", val: "70.00 zł", pct: 51 },
      { name: "Ayran Klasyczny 0.25l", val: "19.50 zł", pct: 14 },
    ],
    donutQuantityData: [
      { label: "Rollo Kebab", percentage: 65.0, color: "#f26522" },
      { label: "Kebab w bułce", percentage: 20.0, color: "#38bdf8" },
      { label: "Napoje & Dodatki", percentage: 15.0, color: "#ec4899" },
    ],
    donutRevenueData: [
      { label: "Rollo Kebab", percentage: 68.0, color: "#f26522" },
      { label: "Kebab w bułce", percentage: 18.0, color: "#38bdf8" },
      { label: "Napoje & Dodatki", percentage: 14.0, color: "#ec4899" },
    ],
  },
  "Dostana Kebab Lipowa": {
    soldQty: "14",
    revenue: "314,80",
    avgOrderQty: "2,8",
    avgOrderRev: "62,96",
    categories: PRODUCTS_CATEGORY_SUMMARY_ROWS.slice(2, 6),
    products: PRODUCT_SUMMARY_ROWS.slice(5, 15),
    quantityRankData: [
      { name: "Kebab Studencki", qty: 5, maxQty: 5 },
      { name: "Zestaw Obiadowy XL", qty: 4, maxQty: 5 },
      { name: "Kebab Rollo Drób", qty: 3, maxQty: 5 },
      { name: "Kebab Box Specjalny", qty: 2, maxQty: 5 },
    ],
    revenueRankData: [
      { name: "Zestaw Obiadowy XL", val: "180.00 zł", pct: 100 },
      { name: "Kebab Studencki", val: "108.00 zł", pct: 60 },
      { name: "Kebab Rollo Drób", val: "88.00 zł", pct: 48 },
    ],
    donutQuantityData: [
      { label: "Zestawy dla 2 osób", percentage: 45.0, color: "#fbbf24" },
      { label: "Kebab na talerzu", percentage: 35.0, color: "#34d399" },
      { label: "Napoje & Dodatki", percentage: 20.0, color: "#ec4899" },
    ],
    donutRevenueData: [
      { label: "Zestawy dla 2 osób", percentage: 50.0, color: "#fbbf24" },
      { label: "Kebab na talerzu", percentage: 32.0, color: "#34d399" },
      { label: "Napoje & Dodatki", percentage: 18.0, color: "#ec4899" },
    ],
  },
  "Dostana Kebab Krakowskie Przedmieście": {
    soldQty: "15",
    revenue: "368,90",
    avgOrderQty: "3,0",
    avgOrderRev: "73,78",
    categories: PRODUCTS_CATEGORY_SUMMARY_ROWS.slice(4, 8),
    products: PRODUCT_SUMMARY_ROWS.slice(10, 20),
    quantityRankData: [
      { name: "Kebab Duży", qty: 5, maxQty: 5 },
      { name: "Kebab z Frytkami", qty: 4, maxQty: 5 },
      { name: "Baklava z Orzechami", qty: 3, maxQty: 5 },
    ],
    revenueRankData: [
      { name: "Kebab Duży", val: "162.00 zł", pct: 100 },
      { name: "Kebab z Frytkami", val: "94.50 zł", pct: 58 },
      { name: "Baklava z Orzechami", val: "61.00 zł", pct: 37 },
    ],
    donutQuantityData: [
      { label: "Rollo Kebab", percentage: 50.0, color: "#f26522" },
      { label: "Kebab Rollo", percentage: 30.0, color: "#38bdf8" },
      { label: "Napoje & Dodatki", percentage: 20.0, color: "#ec4899" },
    ],
    donutRevenueData: [
      { label: "Rollo Kebab", percentage: 52.0, color: "#f26522" },
      { label: "Kebab Rollo", percentage: 28.0, color: "#38bdf8" },
      { label: "Napoje & Dodatki", percentage: 20.0, color: "#ec4899" },
    ],
  },
  "Dostana Kebab Sympatyczna": {
    soldQty: "8",
    revenue: "225,90",
    avgOrderQty: "2,0",
    avgOrderRev: "56,48",
    categories: PRODUCTS_CATEGORY_SUMMARY_ROWS.slice(1, 4),
    products: PRODUCT_SUMMARY_ROWS.slice(3, 10),
    quantityRankData: [
      { name: "Kebab Box Specjalny", qty: 4, maxQty: 4 },
      { name: "Kebab Rollo Drób", qty: 3, maxQty: 4 },
      { name: "Ayran Klasyczny 0.25l", qty: 1, maxQty: 4 },
    ],
    revenueRankData: [
      { name: "Kebab Box Specjalny", val: "120.00 zł", pct: 100 },
      { name: "Kebab Rollo Drób", val: "88.00 zł", pct: 73 },
    ],
    donutQuantityData: [
      { label: "Kebab Box", percentage: 60.0, color: "#a855f7" },
      { label: "Kebab Rollo", percentage: 40.0, color: "#38bdf8" },
    ],
    donutRevenueData: [
      { label: "Kebab Box", percentage: 58.0, color: "#a855f7" },
      { label: "Kebab Rollo", percentage: 42.0, color: "#38bdf8" },
    ],
  },
  "Dostana Kebab Nadbystrzycka": {
    soldQty: "4",
    revenue: "102,00",
    avgOrderQty: "2,0",
    avgOrderRev: "51,00",
    categories: PRODUCTS_CATEGORY_SUMMARY_ROWS.slice(0, 2),
    products: PRODUCT_SUMMARY_ROWS.slice(0, 4),
    quantityRankData: [
      { name: "Kebab Rollo Drób", qty: 2, maxQty: 2 },
      { name: "Ayran Klasyczny 0.25l", qty: 2, maxQty: 2 },
    ],
    revenueRankData: [
      { name: "Kebab Rollo Drób", val: "60.00 zł", pct: 100 },
      { name: "Ayran Klasyczny 0.25l", val: "13.00 zł", pct: 21 },
    ],
    donutQuantityData: [
      { label: "Kebab Rollo", percentage: 50.0, color: "#38bdf8" },
      { label: "Napoje & Dodatki", percentage: 50.0, color: "#ec4899" },
    ],
    donutRevenueData: [
      { label: "Kebab Rollo", percentage: 75.0, color: "#38bdf8" },
      { label: "Napoje & Dodatki", percentage: 25.0, color: "#ec4899" },
    ],
  },
  "Dostana Kebab Turystyczna": {
    soldQty: "0",
    revenue: "0,00",
    avgOrderQty: "0,0",
    avgOrderRev: "0,00",
    categories: [],
    products: [],
    quantityRankData: [],
    revenueRankData: [],
    donutQuantityData: [],
    donutRevenueData: [],
  }
};


// 3. Days & Hours Datasets
export const SALES_SUMMARY_BY_DAY_ROWS = [
  { id: "1", day: "Wtorek", orders: 6, avgOrders: "3.0", shareOrders: "26%", revenue: "408.40 zł", avgIncome: "204.20 zł", revenueShare: "28%", avgOrderValue: "68.07 zł" },
  { id: "2", day: "Środa", orders: 5, avgOrders: "2.5", shareOrders: "22%", revenue: "314.80 zł", avgIncome: "157.40 zł", revenueShare: "22%", avgOrderValue: "62.96 zł" },
  { id: "3", day: "Czwartek", orders: 4, avgOrders: "4.0", shareOrders: "17%", revenue: "225.90 zł", avgIncome: "225.90 zł", revenueShare: "15%", avgOrderValue: "56.48 zł" },
  { id: "4", day: "Piątek", orders: 1, avgOrders: "1.0", shareOrders: "4%", revenue: "38.00 zł", avgIncome: "38.00 zł", revenueShare: "3%", avgOrderValue: "38.00 zł" },
  { id: "5", day: "Sobota", orders: 2, avgOrders: "2.0", shareOrders: "9%", revenue: "102.00 zł", avgIncome: "102.00 zł", revenueShare: "7%", avgOrderValue: "51.00 zł" },
  { id: "6", day: "Niedziela", orders: 5, avgOrders: "5.0", shareOrders: "22%", revenue: "368.90 zł", avgIncome: "368.90 zł", revenueShare: "25%", avgOrderValue: "73.78 zł" },
];

export const SALES_SUMMARY_BY_HOUR_ROWS = [
  { id: "h1", time: "10:00", orders: 1, avgOrders: "0.1", shareOrders: "4%", revenue: "47.00 zł", avgIncome: "5.88 zł", revenueShare: "3%", avgOrderValue: "47.00 zł" },
  { id: "h2", time: "11:00", orders: 2, avgOrders: "0.3", shareOrders: "9%", revenue: "256.40 zł", avgIncome: "32.05 zł", revenueShare: "18%", avgOrderValue: "128.20 zł" },
  { id: "h3", time: "13:00", orders: 1, avgOrders: "0.1", shareOrders: "4%", revenue: "46.00 zł", avgIncome: "5.75 zł", revenueShare: "3%", avgOrderValue: "46.00 zł" },
  { id: "h4", time: "15:00", orders: 5, avgOrders: "0.6", shareOrders: "22%", revenue: "345.90 zł", avgIncome: "43.24 zł", revenueShare: "24%", avgOrderValue: "69.18 zł" },
  { id: "h5", time: "16:00", orders: 1, avgOrders: "0.1", shareOrders: "4%", revenue: "23.00 zł", avgIncome: "2.88 zł", revenueShare: "2%", avgOrderValue: "23.00 zł" },
  { id: "h6", time: "17:00", orders: 2, avgOrders: "0.3", shareOrders: "9%", revenue: "196.90 zł", avgIncome: "24.61 zł", revenueShare: "13%", avgOrderValue: "98.45 zł" },
  { id: "h7", time: "18:00", orders: 4, avgOrders: "0.5", shareOrders: "17%", revenue: "213.90 zł", avgIncome: "26.74 zł", revenueShare: "15%", avgOrderValue: "53.48 zł" },
  { id: "h8", time: "19:00", orders: 3, avgOrders: "0.4", shareOrders: "13%", revenue: "149.90 zł", avgIncome: "18.74 zł", revenueShare: "10%", avgOrderValue: "49.97 zł" },
  { id: "h9", time: "20:00", orders: 1, avgOrders: "0.1", shareOrders: "4%", revenue: "29.00 zł", avgIncome: "3.63 zł", revenueShare: "2%", avgOrderValue: "29.00 zł" },
  { id: "h10", time: "21:00", orders: 3, avgOrders: "0.4", shareOrders: "13%", revenue: "151.00 zł", avgIncome: "18.88 zł", revenueShare: "10%", avgOrderValue: "50.33 zł" },
];

export const DAYS_HOURS_VENUE_DATASET: Record<string, {
  peakDay: string;
  peakDayPct: string;
  peakHour: string;
  peakHourOrders: string;
  totalRev: number;
  avgShiftRev: string;
  dayRows: typeof SALES_SUMMARY_BY_DAY_ROWS;
  hourRows: typeof SALES_SUMMARY_BY_HOUR_ROWS;
}> = {
  "Wszystkie lokale": {
    peakDay: "Sobota",
    peakDayPct: "25.6% przychodu tygodniowego",
    peakHour: "17:00 - 19:00",
    peakHourOrders: "125 zrealizowanych zamówień",
    totalRev: 1459.00,
    avgShiftRev: "2,133.00 PLN",
    dayRows: SALES_SUMMARY_BY_DAY_ROWS,
    hourRows: SALES_SUMMARY_BY_HOUR_ROWS,
  },
  "Dostana Kebab Wróbla": {
    peakDay: "Wtorek",
    peakDayPct: "28.4% przychodu tygodniowego",
    peakHour: "11:00 - 13:00",
    peakHourOrders: "42 zrealizowane zamówienia",
    totalRev: 408.40,
    avgShiftRev: "980.00 PLN",
    dayRows: [
      { id: "1", day: "Wtorek", orders: 6, avgOrders: "3.0", shareOrders: "100%", revenue: "408.40 zł", avgIncome: "204.20 zł", revenueShare: "100%", avgOrderValue: "68.07 zł" },
    ],
    hourRows: [
      { id: "h1", time: "10:00", orders: 1, avgOrders: "0.1", shareOrders: "16%", revenue: "47.00 zł", avgIncome: "5.88 zł", revenueShare: "11%", avgOrderValue: "47.00 zł" },
      { id: "h2", time: "11:00", orders: 2, avgOrders: "0.3", shareOrders: "33%", revenue: "256.40 zł", avgIncome: "32.05 zł", revenueShare: "63%", avgOrderValue: "128.20 zł" },
    ],
  },
  "Dostana Kebab Lipowa": {
    peakDay: "Środa",
    peakDayPct: "31.2% przychodu tygodniowego",
    peakHour: "15:00 - 17:00",
    peakHourOrders: "35 zrealizowanych zamówień",
    totalRev: 314.80,
    avgShiftRev: "850.00 PLN",
    dayRows: [
      { id: "2", day: "Środa", orders: 5, avgOrders: "2.5", shareOrders: "100%", revenue: "314.80 zł", avgIncome: "157.40 zł", revenueShare: "100%", avgOrderValue: "62.96 zł" },
    ],
    hourRows: [
      { id: "h4", time: "15:00", orders: 5, avgOrders: "0.6", shareOrders: "100%", revenue: "314.80 zł", avgIncome: "62.96 zł", revenueShare: "100%", avgOrderValue: "62.96 zł" },
    ],
  },
  "Dostana Kebab Krakowskie Przedmieście": {
    peakDay: "Niedziela",
    peakDayPct: "35.0% przychodu tygodniowego",
    peakHour: "18:00 - 20:00",
    peakHourOrders: "48 zrealizowanych zamówień",
    totalRev: 368.90,
    avgShiftRev: "1,120.00 PLN",
    dayRows: [
      { id: "6", day: "Niedziela", orders: 5, avgOrders: "5.0", shareOrders: "100%", revenue: "368.90 zł", avgIncome: "368.90 zł", revenueShare: "100%", avgOrderValue: "73.78 zł" },
    ],
    hourRows: [
      { id: "h7", time: "18:00", orders: 4, avgOrders: "0.5", shareOrders: "80%", revenue: "213.90 zł", avgIncome: "26.74 zł", revenueShare: "58%", avgOrderValue: "53.48 zł" },
      { id: "h10", time: "21:00", orders: 1, avgOrders: "0.1", shareOrders: "20%", revenue: "155.00 zł", avgIncome: "18.88 zł", revenueShare: "42%", avgOrderValue: "155.00 zł" },
    ],
  },
  "Dostana Kebab Sympatyczna": {
    peakDay: "Czwartek",
    peakDayPct: "22.5% przychodu tygodniowego",
    peakHour: "18:00 - 19:00",
    peakHourOrders: "18 zrealizowanych zamówień",
    totalRev: 225.90,
    avgShiftRev: "620.00 PLN",
    dayRows: [
      { id: "3", day: "Czwartek", orders: 4, avgOrders: "4.0", shareOrders: "100%", revenue: "225.90 zł", avgIncome: "225.90 zł", revenueShare: "100%", avgOrderValue: "56.48 zł" },
    ],
    hourRows: [
      { id: "h7", time: "18:00", orders: 4, avgOrders: "0.5", shareOrders: "100%", revenue: "225.90 zł", avgIncome: "26.74 zł", revenueShare: "100%", avgOrderValue: "56.48 zł" },
    ],
  },
  "Dostana Kebab Nadbystrzycka": {
    peakDay: "Sobota",
    peakDayPct: "40.0% przychodu tygodniowego",
    peakHour: "13:00 - 14:00",
    peakHourOrders: "12 zrealizowanych zamówień",
    totalRev: 102.00,
    avgShiftRev: "450.00 PLN",
    dayRows: [
      { id: "5", day: "Sobota", orders: 2, avgOrders: "2.0", shareOrders: "100%", revenue: "102.00 zł", avgIncome: "102.00 zł", revenueShare: "100%", avgOrderValue: "51.00 zł" },
    ],
    hourRows: [
      { id: "h3", time: "13:00", orders: 1, avgOrders: "0.1", shareOrders: "50%", revenue: "46.00 zł", avgIncome: "5.75 zł", revenueShare: "45%", avgOrderValue: "46.00 zł" },
      { id: "h8", time: "19:00", orders: 1, avgOrders: "0.1", shareOrders: "50%", revenue: "56.00 zł", avgIncome: "7.00 zł", revenueShare: "55%", avgOrderValue: "56.00 zł" },
    ],
  },
  "Dostana Kebab Turystyczna": {
    peakDay: "Brak danych",
    peakDayPct: "0.0% przychodu tygodniowego",
    peakHour: "Brak danych",
    peakHourOrders: "0 zrealizowanych zamówień",
    totalRev: 0.00,
    avgShiftRev: "0.00 PLN",
    dayRows: [],
    hourRows: [],
  }
};


// 4. Deposit Packaging Datasets
export const DEPOSIT_PACKAGING_VENUE_DATASET: Record<string, {
  issued: string;
  returned: string;
  balance: string;
  rows: Array<{
    packagingName: string;
    issuedQty: number;
    returnedQty: number;
    balanceQty: number;
    issuedValue: string;
    returnedValue: string;
    balanceValue: string;
  }>;
}> = {
  "Wszystkie lokale": {
    issued: "125 szt.",
    returned: "110 szt.",
    balance: "30,00 zł",
    rows: [
      { packagingName: "Opakowanie kaucyjne Burger Box", issuedQty: 65, returnedQty: 60, balanceQty: 5, issuedValue: "130,00 PLN", returnedValue: "120,00 PLN", balanceValue: "10,00 PLN" },
      { packagingName: "Opakowanie kaucyjne Rollo Box", issuedQty: 60, returnedQty: 50, balanceQty: 10, issuedValue: "120,00 PLN", returnedValue: "100,00 PLN", balanceValue: "20,00 PLN" },
    ]
  },
  "Dostana Kebab Wróbla": {
    issued: "45 szt.",
    returned: "40 szt.",
    balance: "10,00 zł",
    rows: [
      { packagingName: "Opakowanie kaucyjne Burger Box", issuedQty: 45, returnedQty: 40, balanceQty: 5, issuedValue: "90,00 PLN", returnedValue: "80,00 PLN", balanceValue: "10,00 PLN" }
    ]
  },
  "Dostana Kebab Lipowa": {
    issued: "35 szt.",
    returned: "32 szt.",
    balance: "6,00 zł",
    rows: [
      { packagingName: "Opakowanie kaucyjne Rollo Box", issuedQty: 35, returnedQty: 32, balanceQty: 3, issuedValue: "70,00 PLN", returnedValue: "64,00 PLN", balanceValue: "6,00 PLN" }
    ]
  },
  "Dostana Kebab Krakowskie Przedmieście": {
    issued: "45 szt.",
    returned: "38 szt.",
    balance: "14,00 zł",
    rows: [
      { packagingName: "Opakowanie kaucyjne Burger Box", issuedQty: 20, returnedQty: 18, balanceQty: 2, issuedValue: "40,00 PLN", returnedValue: "36,00 PLN", balanceValue: "4,00 PLN" },
      { packagingName: "Opakowanie kaucyjne Rollo Box", issuedQty: 25, returnedQty: 20, balanceQty: 5, issuedValue: "50,00 PLN", returnedValue: "40,00 PLN", balanceValue: "10,00 PLN" },
    ]
  },
  "Dostana Kebab Sympatyczna": {
    issued: "0 szt.",
    returned: "0 szt.",
    balance: "0,00 zł",
    rows: []
  },
  "Dostana Kebab Nadbystrzycka": {
    issued: "0 szt.",
    returned: "0 szt.",
    balance: "0,00 zł",
    rows: []
  },
  "Dostana Kebab Turystyczna": {
    issued: "0 szt.",
    returned: "0 szt.",
    balance: "0,00 zł",
    rows: []
  }
};


// 5. Referring Sites Datasets
export const REFERRING_SITES_VENUE_DATASET: Record<string, Array<{ site: string; visits: number; pct: string }>> = {
  "Wszystkie lokale": [
    { site: "www.google.com", visits: 20908, pct: "75.8%" },
    { site: "www.dostanakebab.com", visits: 2974, pct: "10.8%" },
    { site: "www.google.pl", visits: 529, pct: "1.9%" },
    { site: "m.facebook.com", visits: 443, pct: "1.6%" },
    { site: "l.facebook.com", visits: 353, pct: "1.3%" },
    { site: "l.instagram.com", visits: 220, pct: "0.8%" },
    { site: "www.bing.com", visits: 204, pct: "0.7%" },
    { site: "lm.facebook.com", visits: 190, pct: "0.7%" },
    { site: "dostanakebab.com", visits: 141, pct: "0.5%" },
    { site: "go.przelewy24.pl", visits: 119, pct: "0.4%" },
    { site: "facebook.com", visits: 106, pct: "0.4%" },
    { site: "search.brave.com", visits: 44, pct: "0.2%" },
    { site: "duckduckgo.com", visits: 40, pct: "0.1%" },
    { site: "statics.teams.cdn.office.net", visits: 18, pct: "<0.1%" },
    { site: "com.google.android.googlequicksearchbox", visits: 13, pct: "<0.1%" },
  ],
  "Dostana Kebab Wróbla": [
    { site: "www.google.com", visits: 5210, pct: "72.5%" },
    { site: "www.dostanakebab.com", visits: 850, pct: "11.8%" },
    { site: "m.facebook.com", visits: 180, pct: "2.5%" },
    { site: "www.google.pl", visits: 140, pct: "1.9%" },
    { site: "l.instagram.com", visits: 95, pct: "1.3%" },
  ],
  "Dostana Kebab Lipowa": [
    { site: "www.google.com", visits: 4120, pct: "74.1%" },
    { site: "www.dostanakebab.com", visits: 620, pct: "11.1%" },
    { site: "www.google.pl", visits: 110, pct: "2.0%" },
    { site: "l.facebook.com", visits: 90, pct: "1.6%" },
  ],
  "Dostana Kebab Krakowskie Przedmieście": [
    { site: "www.google.com", visits: 6890, pct: "78.2%" },
    { site: "www.dostanakebab.com", visits: 980, pct: "11.1%" },
    { site: "m.facebook.com", visits: 150, pct: "1.7%" },
    { site: "www.bing.com", visits: 85, pct: "1.0%" },
  ],
  "Dostana Kebab Sympatyczna": [
    { site: "www.google.com", visits: 2310, pct: "70.5%" },
    { site: "www.dostanakebab.com", visits: 340, pct: "10.4%" },
    { site: "l.facebook.com", visits: 70, pct: "2.1%" },
  ],
  "Dostana Kebab Nadbystrzycka": [
    { site: "www.google.com", visits: 1840, pct: "76.0%" },
    { site: "www.dostanakebab.com", visits: 260, pct: "10.7%" },
  ],
  "Dostana Kebab Turystyczna": []
};


// 6. Source / Medium Datasets
export const SOURCE_MEDIUM_VENUE_DATASET: Record<string, Array<{ sourceMedium: string; visits: number; pct: string }>> = {
  "Wszystkie lokale": [
    { sourceMedium: "ig / social", visits: 100, pct: "60.2%" },
    { sourceMedium: "chatgpt.com /", visits: 35, pct: "21.1%" },
    { sourceMedium: "fb / paid", visits: 32, pct: "19.3%" },
    { sourceMedium: "google / organic", visits: 14, pct: "8.4%" },
    { sourceMedium: "restaumatic-website / referral", visits: 7, pct: "4.2%" },
    { sourceMedium: "review_email / email", visits: 5, pct: "3.0%" },
    { sourceMedium: "perplexity /", visits: 2, pct: "1.2%" },
    { sourceMedium: "restaurantguru / referral", visits: 2, pct: "1.2%" },
    { sourceMedium: "copilot.com /", visits: 1, pct: "0.6%" },
  ],
  "Dostana Kebab Wróbla": [
    { sourceMedium: "ig / social", visits: 45, pct: "56.3%" },
    { sourceMedium: "chatgpt.com /", visits: 18, pct: "22.5%" },
    { sourceMedium: "fb / paid", visits: 12, pct: "15.0%" },
    { sourceMedium: "google / organic", visits: 5, pct: "6.2%" },
  ],
  "Dostana Kebab Lipowa": [
    { sourceMedium: "ig / social", visits: 30, pct: "60.0%" },
    { sourceMedium: "chatgpt.com /", visits: 10, pct: "20.0%" },
    { sourceMedium: "fb / paid", visits: 8, pct: "16.0%" },
    { sourceMedium: "google / organic", visits: 2, pct: "4.0%" },
  ],
  "Dostana Kebab Krakowskie Przedmieście": [
    { sourceMedium: "ig / social", visits: 20, pct: "57.1%" },
    { sourceMedium: "chatgpt.com /", visits: 8, pct: "22.8%" },
    { sourceMedium: "fb / paid", visits: 5, pct: "14.3%" },
    { sourceMedium: "google / organic", visits: 2, pct: "5.8%" },
  ],
  "Dostana Kebab Sympatyczna": [
    { sourceMedium: "ig / social", visits: 5, pct: "50.0%" },
    { sourceMedium: "chatgpt.com /", visits: 3, pct: "30.0%" },
    { sourceMedium: "fb / paid", visits: 2, pct: "20.0%" },
  ],
  "Dostana Kebab Nadbystrzycka": [
    { sourceMedium: "ig / social", visits: 2, pct: "66.7%" },
    { sourceMedium: "chatgpt.com /", visits: 1, pct: "33.3%" },
  ],
  "Dostana Kebab Turystyczna": []
};
