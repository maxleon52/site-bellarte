import React from "react";

import { urlFor } from "@/lib/sanity";
import { Product } from "@/types/product";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface CardProductProps {
  product: Product;
}

export default function CardProduct({ product }: CardProductProps) {
  return (
    <Card className="group grid h-[270px] cursor-pointer grid-rows-[65%_40px_30px] gap-2 overflow-hidden transition-all hover:shadow-md md:h-[450px] md:grid-rows-[70%_70px_40px] md:gap-0">
      <CardContent className="overflow-hidden bg-slate-100 p-0">
        <img
          loading="lazy"
          src={urlFor(product.images[0]).url()}
          alt={product.name}
          className="h-full w-full object-cover transition-all group-hover:scale-105"
        />
      </CardContent>
      <CardHeader className="px-2 py-0 md:px-4 md:py-4">
        <CardTitle className="text-xl leading-none text-bellarte-300 md:text-2xl md:leading-none">
          {product.name}
        </CardTitle>
      </CardHeader>
      <CardFooter className="px-2 py-0 md:px-4 md:py-4">
        <span className="text-lg text-bellarte-300 md:text-xl">R$ 999,00</span>
      </CardFooter>
    </Card>
  );
}
