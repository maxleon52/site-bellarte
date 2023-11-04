import Link from "next/link";
import React from "react";

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
  return (
    <header className="flex h-20 items-center justify-between bg-zinc-50 px-4 shadow-sm md:h-24 md:px-8 xl:px-16 2xl:px-40">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 md:h-16 md:w-16">
        B
      </div>

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
