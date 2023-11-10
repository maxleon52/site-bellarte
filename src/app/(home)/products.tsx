"use client";

import Link from "next/link";
import React, { useState } from "react";

import { imagesProducts, linksHeader } from "@/constants";
import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Products() {
  const [currentCategory, setCurrentCategory] = useState("bolsa");

  return (
    <section className="flex flex-col gap-6 px-4 py-8 md:px-8 xl:px-16 2xl:px-40">
      <h2 className="bg-gradient-to-r from-bellarte-400 via-bellarte-300 to-bellarte-200 bg-clip-text text-3xl font-bold text-transparent md:text-5xl 2xl:text-7xl">
        Produtos
      </h2>

      <ul className="flex w-full gap-6 overflow-scroll pb-4 md:overflow-hidden">
        {linksHeader.map((category) => (
          <li
            key={category.id}
            onClick={() => setCurrentCategory(category.name)}
            className="flex-none cursor-pointer text-lg text-bellarte-300 transition-all hover:text-bellarte-800"
          >
            {category.label}
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
        {imagesProducts.map((category: any) => {
          return category[currentCategory]?.map((item: any) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden transition-all hover:shadow-md"
            >
              <CardContent className="p-0">
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full object-cover transition-all group-hover:scale-105"
                />
              </CardContent>
              <CardHeader>
                <CardTitle className="text-bellarte-300">{item.name}</CardTitle>
              </CardHeader>
              <CardFooter>
                <span className="text-bellarte-200">R$ 999,00</span>
              </CardFooter>
            </Card>
          ));
        })}
      </div>

      <Link
        href="/products"
        className="group flex w-fit cursor-pointer items-baseline text-2xl font-semibold text-bellarte-300"
      >
        Explorar produtos{" "}
        <ArrowRight className="h-4 opacity-0 transition-all group-hover:animate-slideRight" />
      </Link>
    </section>
  );
}
