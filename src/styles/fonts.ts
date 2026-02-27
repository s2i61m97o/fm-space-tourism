import {Barlow_Condensed, Bellefair, Barlow} from "next/font/google";

export const barlow_condensed = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  variable: "--font-barlow_condensed",
});

export const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-barlow",
});

export const bellefair = Bellefair({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-bellefair",
});
