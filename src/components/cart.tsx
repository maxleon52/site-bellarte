"use client";

import Link from "next/link";
import React from "react";

import { urlFor } from "@/lib/sanity";
import { formatValue } from "@/lib/utils";
import { useStore } from "@/store/zustand";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import ButtonBuyWhatsapp from "./buttonBuyWhatsapp";

export default function Cart() {
  const [cart, addToCart, minusQtdToCart, removeToCart] = useStore((state) => [
    state.cart,
    state.addToCart,
    state.minusQtdToCart,
    state.removeToCart,
  ]);

  const SUM_QTD_ITEMS = cart.reduce((acc, i) => {
    acc = acc + i.qtd;
    return acc;
  }, 0);

  const SUM_TOTAL = cart.reduce((acc, i) => {
    acc = acc + i.qtd * i.price;
    return acc;
  }, 0);

  const WELCOME_STRING = `Olá, gostei desse(s) item(s):`;
  const QUEST_STRING = `como fechamos o pedido?`;
  const TOTAL_STRING = `TOTAL: ${formatValue(SUM_TOTAL)}`;
  const ITEMS = cart
    .map((item) => `\n ${item.qtd} - ${item.name}: ${formatValue(item.price)}`)
    .join("");
  const TEXT = `NOVO PEDIDO\n${WELCOME_STRING}\n${ITEMS}\n\n${TOTAL_STRING}\n\n${QUEST_STRING}`;
  let MESSAGE = "";
  if (typeof window !== "undefined") {
    MESSAGE = window.encodeURIComponent(TEXT);
  }

  return (
    <div className="relative">
      <span className="absolute -right-3 -top-3 z-[1] flex min-h-[24px] min-w-[24px] items-center justify-center rounded-full border border-white bg-red-400 px-1 text-sm font-bold text-white">
        {SUM_QTD_ITEMS}
      </span>

      <Sheet>
        <SheetTrigger className="">
          <ShoppingCart className="stroke-slate-500" />
        </SheetTrigger>

        <SheetContent side="right" className="flex flex-col gap-4">
          <SheetHeader>
            <SheetTitle className=" flex items-center text-left font-semibold md:text-2xl">
              Minhas Compras
            </SheetTitle>
            <Separator />
          </SheetHeader>

          <ScrollArea className="">
            <ul className="flex flex-col gap-6 text-left">
              {cart.map((product) => (
                <li key={product._id} className="flex gap-4 pr-4">
                  <Link
                    href={`/produtos/${product.category.name}/${product._id}`}
                    className="!w-fit"
                  >
                    <img
                      className="h-16 w-20 rounded-md bg-slate-200"
                      src={urlFor(product.images[0]).url()}
                      alt=""
                    />
                  </Link>

                  <div className="flex w-full flex-col justify-between">
                    <strong>{product.name}</strong>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-center gap-2">
                        <Button
                          variant={"outline"}
                          className="h-fit border border-slate-400 px-1 py-1"
                          onClick={() => minusQtdToCart(product)}
                        >
                          <Minus className="h-[14px] w-[14px] stroke-slate-900" />
                        </Button>
                        <span className="text-lg">{product.qtd}</span>
                        <Button
                          variant={"secondary"}
                          className="h-fit border border-slate-400 px-1 py-1"
                          onClick={() => addToCart(product)}
                        >
                          <Plus className="h-[14px] w-[14px] stroke-slate-900" />
                        </Button>
                      </div>

                      <div className="flex gap-2">
                        <span className="text-lg font-semibold">
                          {formatValue(product.price)}
                        </span>
                        <button onClick={() => removeToCart(product)}>
                          <Trash2 className="h-[16px] w-[16px] stroke-slate-900 hover:stroke-red-700" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>

          <div className="flex items-center justify-between">
            <span className="text-base font-medium">
              QTD items: {SUM_QTD_ITEMS}
            </span>
            <span className="text-base font-medium">
              Total: {formatValue(SUM_TOTAL)}
            </span>
          </div>

          <ButtonBuyWhatsapp disabled={SUM_QTD_ITEMS <= 0} message={MESSAGE} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
