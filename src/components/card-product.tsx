import Link from "next/link";
import React from "react";

import ButtonAddToCart from "@/app/(produtos)/button-add-to-cart";
import { urlFor } from "@/lib/sanity";
import { formatValue } from "@/lib/utils";
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
    <Card className="group grid h-[270px] grid-rows-[65%_40px_30px] gap-2 overflow-hidden transition-all hover:shadow-md md:h-[450px] md:grid-rows-[70%_70px_40px] md:gap-0">
      <CardContent className="cursor-pointer overflow-hidden bg-slate-100 p-0">
        <Link href={`/produtos/${product.category.name}/${product._id}`}>
          <img
            loading="lazy"
            src={urlFor(product.images[0]).url()}
            alt={product.name}
            className="h-full w-full object-cover transition-all group-hover:scale-105"
          />
        </Link>
      </CardContent>
      <CardHeader className="px-2 py-0 md:px-4 md:py-4">
        <CardTitle className="text-xl leading-none text-bellarte-300 md:text-2xl md:leading-none">
          {product.name}
        </CardTitle>
      </CardHeader>
      <CardFooter className="relative px-2 py-0 md:px-4 md:py-4">
        <span className="text-lg text-bellarte-300 md:text-xl">
          {formatValue(product.price)}
        </span>

        <ButtonAddToCart
          product={product}
          className="absolute bottom-2 right-4 z-[1] h-fit w-fit rounded-sm border-none px-[0.25rem] py-1"
        />
      </CardFooter>
    </Card>
  );
}
