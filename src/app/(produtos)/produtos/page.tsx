"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { linksHeader } from "@/constants";
import { v4 } from "uuid";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Products() {
  const [currentCategory, setCurrentCategory] = useState("bolsa");
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    setProducts([
      {
        id: v4(),
        bolsa: [
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
        vestuario: [
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
        "porta-guardanapo": [
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
        tapete: [
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
    <section className="flex flex-1 flex-col gap-6 px-4 py-8 md:px-8 xl:px-16 2xl:px-40">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="bg-gradient-to-r from-bellarte-400 via-bellarte-300 to-bellarte-200 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
          Produtos
        </h2>

        <Select
          onValueChange={(value) => setCurrentCategory(value)}
          defaultValue="bolsa"
        >
          <SelectTrigger className="border-zinc-300 text-zinc-400 !ring-0 !ring-offset-0 md:max-w-[200px] md:text-lg">
            <SelectValue placeholder="Selecione uma categoria" />
          </SelectTrigger>
          <SelectContent className="">
            {linksHeader.map((item) => (
              <SelectItem
                key={item.id}
                value={item.name}
                className="text-zinc-400"
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid flex-1 grid-cols-2 gap-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((category: any) => {
          return category[currentCategory]?.map((item: any) => (
            <Link key={item.id} href={`/produtos/${item.id}`}>
              <Card className="group flex h-full cursor-pointer flex-col overflow-hidden transition-all hover:shadow-md">
                <CardContent className="flex-1 p-0">
                  <img
                    loading="lazy"
                    src={item.url}
                    alt={item.name}
                    className="h-full w-full object-cover transition-all group-hover:scale-105"
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
    </section>
  );
}
