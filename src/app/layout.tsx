import type {Metadata} from "next";
import "./globals.scss";
import Header from "@/components/layout/Header/Header";
import {barlow, bellefair} from "@/styles/fonts";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${barlow.variable} ${bellefair.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
