import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TrackPay — Split smarter, pay with ease.",
  description:
    "Splitting bills shouldn't be complicated. Scan your receipt, assign items to each person, and settle up — all in one place.",
  openGraph: {
    title: "TrackPay — Split smarter, pay with ease.",
    description:
      "Splitting bills shouldn't be complicated. Scan your receipt, assign items to each person, and settle up — all in one place.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
