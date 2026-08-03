import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SchemaMarkup from "./components/SchemaMarkup";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "TieDown.pro - #1 Tie-Down Roping App | Segments, Horses, Events & Community",
  description:
    "The everything app for tie-down roping. See your run split into segments — catch, dismount, down the rope, flank, tie — find out how much of your time is the horse, practice the six-second hold, enter jackpots, and connect with the whole calf roping community. Built for amateur and youth ropers.",
  keywords:
    "tie down roping, calf roping, tie down roping app, calf roping app, tie down roping practice, six second rule, piggin string, hooey, calf horse, tie down roping horse, calf roping events, jackpot calf roping, NHSRA tie down, NIRA tie down, NLBRA, junior calf roping, breakaway to tie down, jerk down rule, calf roping rules",
  authors: [{ name: "TieDown.pro" }],
  creator: "TieDown.pro",
  publisher: "TieDown.pro",
  metadataBase: new URL("https://www.tiedown.pro"),
  alternates: {
    canonical: "https://www.tiedown.pro",
  },
  openGraph: {
    title: "TieDown.pro - #1 Tie-Down Roping App",
    description:
      "Four skills, one run, no margin. See every segment, know what the horse gave you, and rope with the whole community.",
    url: "https://www.tiedown.pro",
    siteName: "TieDown.pro",
    type: "website",
    images: [
      {
        url: "https://www.tiedown.pro/logo.png",
        width: 1200,
        height: 630,
        alt: "TieDown.pro",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TieDown.pro - #1 Tie-Down Roping App",
    description:
      "Four skills, one run, no margin. Every segment measured, and the horse's share of it too.",
    images: ["https://www.tiedown.pro/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable + " antialiased"}>
        <SchemaMarkup />
        {children}
      </body>
    </html>
  );
}
