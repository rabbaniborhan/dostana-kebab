import type { Metadata } from "next";
import { Roboto, Judson } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const judson = Judson({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-judson",
});

export const metadata: Metadata = {
  title: "Dostana Kebab - Order & Pay Online - Dostana Kebab Lublin",
  description:
    "Dostana Kebab Lublin - Order online, pay cash or card, express delivery to home and office. Charcoal grilled kebabs, rollo wraps, boxes & plates.",
  keywords: [
    "Dostana Kebab",
    "Zamów online",
    "Kebab Lublin",
    "Rollo Kebab",
    "Krakowskie Przedmieście Kebab",
    "Lipowa Kebab",
    "Turystyczna Kebab",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${judson.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#121212] text-neutral-100 font-roboto">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
