import type { Metadata } from "next";
import { Alegreya } from "next/font/google";

import "./globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";
import WhatsappIcon from "@/components/whatsapp";

const alegreya = Alegreya({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bellarte Crochê",
  description: "Artesanato em luxo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${alegreya.className} flex min-h-screen flex-col`}>
        <Header />
        {children}
        <Footer />
        <WhatsappIcon />
      </body>
    </html>
  );
}
