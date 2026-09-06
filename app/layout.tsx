import type { Metadata } from "next";
import { Roboto, Judson } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

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
  title: "Dostana Kebab - Zamów i zapłać online - Dostana Kebab",
  description:
    "Dostana Kebab - Zamów przez internet, zapłac gotówką lub online, dowieziemy do domu i biura",
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
      lang="pl"
      className={`${roboto.variable} ${judson.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#121212] text-neutral-100 font-roboto">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
