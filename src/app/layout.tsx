import type { Metadata } from "next";
import { Lexend_Giga } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/contexts/LangContext";
import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/navigation/Footer";

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
          <NavBar />
          {children}
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
