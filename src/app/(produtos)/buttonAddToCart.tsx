"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { useStore } from "@/store/zustand";
import { Product } from "@/types/product";
import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ButtonAddToCartProps {
  product: Product;
  children?: React.ReactNode;
  className?: string;
}
export default function ButtonAddToCart({
  product,
  children,
  className,
}: ButtonAddToCartProps) {
  const [addToCart, myLogii] = useStore((state) => [
    state.addToCart,
    state.myLog,
  ]);

  myLogii();
  return (
    <Button
      className={cn(
        "flex h-12 items-center justify-center border-slate-300 text-slate-500 md:w-fit",
        className,
      )}
      variant="outline"
      onClick={() => addToCart(product)}
    >
      {children} <ShoppingCart className="h-4" />
    </Button>
  );
}
