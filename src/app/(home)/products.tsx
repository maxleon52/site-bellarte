"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { linksHeader } from "@/constants";
import { ArrowRight } from "lucide-react";
import { v4 } from "uuid";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Products() {
  const [currentCategory, setCurrentCategory] = useState("bolsas");
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    setProducts([
      {
        id: v4(),
        bolsas: [
          {
            id: v4(),
            name: "Bolsa Estudante",
            slug: "bolsa-estudante",
            url: "/images/products/bolsas/bolsa-estudante.webp",
          },
          {
            id: v4(),
            name: "Bolsa Estudante",
            slug: "bolsa-estudante",
            url: "/images/products/bolsas/bolsa-estudante.webp",
          },
          {
            id: v4(),
            name: "Bolsa Estudante",
            slug: "bolsa-estudante",
            url: "/images/products/bolsas/bolsa-estudante.webp",
          },
          {
            id: v4(),
            name: "Bolsa Estudante",
            slug: "bolsa-estudante",
            url: "/images/products/bolsas/bolsa-estudante.webp",
          },
          {
            id: v4(),
            name: "Bolsa Estudante",
            slug: "bolsa-estudante",
            url: "/images/products/bolsas/bolsa-estudante.webp",
          },
          {
            id: v4(),
            name: "Bolsa Estudante",
            slug: "bolsa-estudante",
            url: "/images/products/bolsas/bolsa-estudante.webp",
          },
          {
            id: v4(),
            name: "Bolsa Estudante",
            slug: "bolsa-estudante",
            url: "/images/products/bolsas/bolsa-estudante.webp",
          },
          {
            id: v4(),
            name: "Bolsa Estudante",
            slug: "bolsa-estudante",
            url: "/images/products/bolsas/bolsa-estudante.webp",
          },
          {
            id: v4(),
            name: "Bolsa Estudante",
            slug: "bolsa-estudante",
            url: "/images/products/bolsas/bolsa-estudante.webp",
          },
          {
            id: v4(),
            name: "Bolsa Estudante",
            slug: "bolsa-estudante",
            url: "/images/products/bolsas/bolsa-estudante.webp",
          },
        ],
      },
      {
        id: v4(),
        vestuarios: [
          {
            id: v4(),
            name: "Biquini",
            slug: "biquini",
            url: "/images/products/vestuario/biquini-azul.webp",
          },
          {
            id: v4(),
            name: "Biquini",
            slug: "biquini",
            url: "/images/products/vestuario/biquini-azul.webp",
          },
          {
            id: v4(),
            name: "Biquini",
            slug: "biquini",
            url: "/images/products/vestuario/biquini-azul.webp",
          },
          {
            id: v4(),
            name: "Biquini",
            slug: "biquini",
            url: "/images/products/vestuario/biquini-azul.webp",
          },
          {
            id: v4(),
            name: "Biquini",
            slug: "biquini",
            url: "/images/products/vestuario/biquini-azul.webp",
          },
          {
            id: v4(),
            name: "Biquini",
            slug: "biquini",
            url: "/images/products/vestuario/biquini-azul.webp",
          },
        ],
      },
      {
        id: v4(),
        sousplat: [
          {
            id: v4(),
            name: "Sousplat",
            slug: "sousplat",
            url: "/images/products/sousplat/sousplat.webp",
          },
          {
            id: v4(),
            name: "Sousplat",
            slug: "sousplat",
            url: "/images/products/sousplat/sousplat.webp",
          },
          {
            id: v4(),
            name: "Sousplat",
            slug: "sousplat",
            url: "/images/products/sousplat/sousplat.webp",
          },
        ],
      },
      {
        id: v4(),
        "porta-guardanapos": [
          {
            id: v4(),
            name: "Porta Guardanapo",
            slug: "porta-guardanapo",
            url: "/images/products/porta-guardanapo/porta-guardanapo.webp",
          },
          {
            id: v4(),
            name: "Porta Guardanapo",
            slug: "porta-guardanapo",
            url: "/images/products/porta-guardanapo/porta-guardanapo.webp",
          },
          {
            id: v4(),
            name: "Porta Guardanapo",
            slug: "porta-guardanapo",
            url: "/images/products/porta-guardanapo/porta-guardanapo.webp",
          },
          {
            id: v4(),
            name: "Porta Guardanapo",
            slug: "porta-guardanapo",
            url: "/images/products/porta-guardanapo/porta-guardanapo.webp",
          },
          {
            id: v4(),
            name: "Porta Guardanapo",
            slug: "porta-guardanapo",
            url: "/images/products/porta-guardanapo/porta-guardanapo.webp",
          },
          {
            id: v4(),
            name: "Porta Guardanapo",
            slug: "porta-guardanapo",
            url: "/images/products/porta-guardanapo/porta-guardanapo.webp",
          },
          {
            id: v4(),
            name: "Porta Guardanapo",
            slug: "porta-guardanapo",
            url: "/images/products/porta-guardanapo/porta-guardanapo.webp",
          },
        ],
      },
      {
        id: v4(),
        amigurumi: [
          {
            id: v4(),
            name: "Amigurumi",
            slug: "amigurumi",
            url: "/images/products/amigurumi/amigurumi.webp",
          },
          {
            id: v4(),
            name: "Amigurumi",
            slug: "amigurumi",
            url: "/images/products/amigurumi/amigurumi.webp",
          },
          {
            id: v4(),
            name: "Amigurumi",
            slug: "amigurumi",
            url: "/images/products/amigurumi/amigurumi.webp",
          },
          {
            id: v4(),
            name: "Amigurumi",
            slug: "amigurumi",
            url: "/images/products/amigurumi/amigurumi.webp",
          },
        ],
      },
      {
        id: v4(),
        tapetes: [
          {
            id: v4(),
            name: "Tapete",
            slug: "tapete",
            url: "/images/products/tapetes/tapete.webp",
          },
          {
            id: v4(),
            name: "Tapete",
            slug: "tapete",
            url: "/images/products/tapetes/tapete.webp",
          },
          {
            id: v4(),
            name: "Tapete",
            slug: "tapete",
            url: "/images/products/tapetes/tapete.webp",
          },
          {
            id: v4(),
            name: "Tapete",
            slug: "tapete",
            url: "/images/products/tapetes/tapete.webp",
          },
          {
            id: v4(),
            name: "Tapete",
            slug: "tapete",
            url: "/images/products/tapetes/tapete.webp",
          },
          {
            id: v4(),
            name: "Tapete",
            slug: "tapete",
            url: "/images/products/tapetes/tapete.webp",
          },
          {
            id: v4(),
            name: "Tapete",
            slug: "tapete",
            url: "/images/products/tapetes/tapete.webp",
          },
        ],
      },
    ]);
  }, []);

  return (
    <section className="flex flex-col gap-6 px-4 py-8 md:px-8 xl:px-16 2xl:px-40">
      <h2 className="bg-gradient-to-r from-bellarte-400 via-bellarte-300 to-bellarte-200 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
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
        {products.map((category: any) => {
          return category[currentCategory]?.map((item: any) => (
            <Link
              key={item.id}
              href={`/produtos/${currentCategory}/${item.id}`}
            >
              <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-0">
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-full object-cover transition-all group-hover:scale-105"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-bellarte-300">
                    {item.name}
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <span className="text-zinc-400 md:text-lg xl:text-xl">
                    R$ 999,00
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ));
        })}
      </div>

      <Link
        href={`/produtos/${currentCategory}`}
        className="group flex w-fit cursor-pointer items-baseline text-2xl font-semibold text-bellarte-300"
      >
        Explorar produtos{" "}
        <ArrowRight className="h-4 opacity-0 transition-all group-hover:animate-slideRight" />
      </Link>
    </section>
  );
}
