# 🌯 Dostana Kebab - Premium Kebab & Online Ordering Platform

A modern, fast, and responsive web application for **Dostana Kebab** (located in Lublin, Poland). Built with Next.js (App Router), React, Tailwind CSS, and Lucide React. It features an interactive location map locator, online food ordering system, shopping cart, reservations, gallery, reviews/opinions, and interactive components.

---

## 🚀 Key Features

*   **🛒 Interactive Shopping Cart & Customizer:** Real-time cart calculations, checkout capabilities, custom item modifiers, and promotional coupon integration (e.g., `DOSTANA5`).
*   **📍 Multibranch Restaurant Locator:** Dynamic Google Map integration to view and locate all 6 branches of Dostana Kebab in Lublin.
*   **📅 Reservation Booking:** A reservation management interface/modal for tables and group parties.
*   **📱 Mobile-First Design:** Fully responsive layout with mobile drawer navigation, customized drop-downs, and touch-optimized UI.
*   **🔥 Rich Aesthetics:** Sleek dark-mode styling, brand colors (`#f26522` flame gradient), smooth animations, custom scrollbars, and premium typography (Judson & Lato).

---

## 🛠️ Tech Stack

*   **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS & Custom CSS
*   **State Management:** React Context (for shopping cart & branch locations)
*   **Icons:** Lucide React
*   **Font optimization:** `@next/font` (Judson & Lato fonts)

---

## 📁 File Structure

```text
├── app/
│   ├── components/       # Reusable UI elements (Navbar, Footer, CartDrawer, ContactSection, etc.)
│   ├── context/          # React Context (CartContext)
│   ├── data/             # Static restaurant and branch data (restaurantData.ts)
│   ├── contact/          # Contact Page
│   ├── menu/             # Menu Listings & Branch menus
│   ├── reservations/     # Reservation booking page
│   ├── delivery/         # Delivery rates and zone details
│   ├── opinions/         # Customer reviews and feedback
│   ├── gallery/          # Media gallery page
│   ├── globals.css       # Global styles, variables, and animations
│   ├── layout.tsx        # NextJS Root layout
│   └── page.tsx          # Homepage
├── public/               # Static assets & images
├── next.config.ts        # NextJS configurations
└── tsconfig.json         # TypeScript configuration
```

---

## ⚙️ Getting Started

### 1. Installation

Install all required npm dependencies:

```bash
npm install
```

### 2. Run the Development Server

Start the application locally in development mode:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) inside your web browser to view the application.

### 3. Production Build

Build the optimized application bundle for deployment:

```bash
npm run build
```

Start the production-ready server locally:

```bash
npm run start
```
