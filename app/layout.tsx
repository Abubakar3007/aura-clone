import type { Metadata } from "next";
import {
  Montserrat,
  Roboto,
  Armata,
  Josefin_Sans,
} from "next/font/google";
import "./globals.css";

/* ---------- Google Fonts ---------- */

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const armata = Armata({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-armata",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

/* ---------- Metadata ---------- */

export const metadata: Metadata = {
  title: "Auraa Clone",
  description: "Premium talent agency website inspired by auraa.in",
};

/* ---------- Root Layout ---------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${montserrat.variable}
          ${roboto.variable}
          ${armata.variable}
          ${josefin.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}