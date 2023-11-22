import Image from "next/image";
import Link from "next/link";
import React from "react";

import { linksHeader } from "@/constants";
import { ShoppingCart } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between overflow-hidden bg-transparent bg-white px-4 shadow-sm md:h-24 md:px-8 xl:px-16 2xl:px-40">
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
            {linksHeader.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.pathname}
                  className="text-lg text-slate-500 transition-all hover:text-bellarte-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Sheet>
          <SheetTrigger className="xl:hidden">
            <div className="my-[0.25rem] h-0.5 w-5 rounded-full bg-slate-500" />
            <div className="my-[0.25rem] h-0.5 w-5 rounded-full bg-slate-500" />
            <div className="my-[0.25rem] h-0.5 w-5 rounded-full bg-slate-500" />
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col gap-4 xl:hidden">
            <SheetHeader>
              <SheetTitle className=" flex items-center text-left">
                <Link href="/" className="!w-fit">
                  <Image
                    src="/svgs/logo-bellarte.svg"
                    alt="logo da bellarte"
                    width={150}
                    height={150}
                    className="w-auto max-w-[50%]"
                  />
                </Link>
              </SheetTitle>
              <Separator />
            </SheetHeader>
            <nav>
              <ul className="flex flex-col gap-6 text-left">
                {linksHeader.map((link) => (
                  <li key={link.id}>
                    <SheetClose asChild>
                      <Link
                        href={link.pathname}
                        className="text-lg text-slate-500 transition-all hover:text-bellarte-800"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <button>
        <ShoppingCart className="stroke-slate-500" />
      </button>
    </header>
  );
}
