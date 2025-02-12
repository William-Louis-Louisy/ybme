import type { Metadata } from "next";
import { Lexend_Giga } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/Header";
import { LangProvider } from "@/contexts/LangContext";

const lexendGiga = Lexend_Giga({
  variable: "--font-lexend-giga",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YBME",
  description: "Your Best Meal Ever",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${lexendGiga.variable}`}>
        <LangProvider>
          <Header />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
