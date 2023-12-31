import type { Metadata } from "next";
import { Alegreya } from "next/font/google";

import "./globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";
import WhatsappIcon from "@/components/whatsapp";

const alegreya = Alegreya({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Bellarte Crochê",
    template: "Bellarte Crochê | %s",
  },
  description: "Artesanato em luxo",
  icons: {
    icon: "/icon.svg",
  },
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
