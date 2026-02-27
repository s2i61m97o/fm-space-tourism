import {Barlow_Condensed, Bellefair} from "next/font/google";

export const barlow = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  variable: "--font-barlow",
});

export const bellefair = Bellefair({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-bellefair",
});
