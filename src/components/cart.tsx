"use client";

import Link from "next/link";
import React from "react";

import { useStore } from "@/store/zustand";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Cart() {
  const [cart, addToCart, removeToCart] = useStore((state) => [
    state.cart,
    state.addToCart,
    state.removeToCart,
  ]);

  return (
    <Sheet>
      <SheetTrigger className="">
        <ShoppingCart className="stroke-slate-500" />
      </SheetTrigger>

      <SheetContent side="right" className="flex flex-col gap-4 ">
        <SheetHeader>
          <SheetTitle className=" flex items-center text-left font-semibold md:text-2xl">
            Minhas Compras
          </SheetTitle>
          <Separator />
        </SheetHeader>
        <nav>
          <ul className="flex flex-col gap-6 text-left">
            <li className="flex gap-4 border">
              <Link href="/" className="!w-fit">
                <img src="" alt="" className="h-16 w-16 bg-slate-200" />
              </Link>

              <div className="flex w-full flex-col justify-between border">
                <strong>Produto 1</strong>

                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center gap-2">
                    <Button
                      variant={"outline"}
                      className="h-fit border border-slate-400 px-1 py-1"
                      onClick={removeToCart}
                      disabled={cart === 1}
                    >
                      <Minus className="h-[14px] w-[14px] stroke-slate-900" />
                    </Button>
                    <span className="text-lg">{cart}</span>
                    <Button
                      variant={"secondary"}
                      className="h-fit border border-slate-400 px-1 py-1"
                      onClick={addToCart}
                    >
                      <Plus className="h-[14px] w-[14px] stroke-slate-900" />
                    </Button>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-lg font-semibold">R$ 999,00</span>
                    <button>
                      <Trash2 className="h-[16px] w-[16px] stroke-slate-900 hover:stroke-red-700" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
