"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Adiciona um ouvinte de evento para detectar o scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-20 flex h-20 items-center justify-between overflow-hidden bg-transparent px-4 md:h-24 md:px-8 xl:px-16 2xl:px-40",
        scrolling === false ? "bg-transparent" : "bg-white shadow-sm",
      )}
    >
      <Link href="/">
        <Image
          src="/svgs/logo-bellarte.svg"
          alt="logo da bellarte"
          width={150}
          height={150}
          className="!h-8 md:!h-12"
        />
      </Link>

      <div className="order-first flex items-center xl:order-none">
        <nav className="hidden xl:flex">
          <ul className="flex items-center justify-center gap-6">
            <li>
              <Link href="/Categoria-1">Categoria 1</Link>
            </li>
            <li>
              <Link href="/Categoria-2">Categoria 2</Link>
            </li>
            <li>
              <Link href="/Categoria-3">Categoria 3</Link>
            </li>
          </ul>
        </nav>

        <Sheet>
          <SheetTrigger className="xl:hidden">
            <div className="my-[0.25rem] h-0.5 w-5 rounded-full bg-zinc-950/70" />
            <div className="my-[0.25rem] h-0.5 w-5 rounded-full bg-zinc-950/70" />
            <div className="my-[0.25rem] h-0.5 w-5 rounded-full bg-zinc-950/70" />
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col gap-4 xl:hidden">
            <SheetHeader>
              <SheetTitle className="text-left">
                Are you sure absolutely sure?
              </SheetTitle>
              <Separator />
            </SheetHeader>
            <nav className="">
              <ul className="flex flex-col gap-6 text-left">
                <li>
                  <Link href="/Categoria-1">Categoria 1</Link>
                </li>
                <li>
                  <Link href="/Categoria-2">Categoria 2</Link>
                </li>
                <li>
                  <Link href="/Categoria-3">Categoria 3</Link>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <button>
        <ShoppingCart />
      </button>
    </header>
  );
}
