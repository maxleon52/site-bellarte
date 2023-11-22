"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { linksHeader } from "@/constants";
import { client } from "@/lib/sanity";
import { ProductsTypes } from "@/types/home";
import { ArrowRight } from "lucide-react";

import CardProduct from "@/components/CardProduct";

interface IProducts {
  amigurumi: ProductsTypes[];
  bolsas: ProductsTypes[];
  vestuarios: ProductsTypes[];
  sousplat: ProductsTypes[];
  "porta-guardanapo": ProductsTypes[];
}

export default function Products() {
  const [currentCategory, setCurrentCategory] = useState<string>("bolsas");
  const [products, setProducts] = useState<IProducts>({
    amigurumi: [],
    bolsas: [],
    vestuarios: [],
    sousplat: [],
    "porta-guardanapo": [],
  });

  useEffect(() => {
    async function fetchData(category: string) {
      try {
        const query = `*[_type == 'product' && category->name == '${category}']{
          _id,
          name,
          price,
          images,
          description,
          "slug":slug.current,
          category->{name, "slug": slug.current},  
        }[0...10]`;

        const data = await client.fetch<ProductsTypes[]>(query);

        setProducts((prev) => {
          return { ...prev, [currentCategory]: data };
        });
      } catch (error) {
        console.log("error: ", error);
      }
    }

    fetchData(currentCategory);
  }, [currentCategory]);

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

      <div className="grid grid-cols-2 gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
        {products[currentCategory as keyof IProducts]?.map((product) => (
          <Link
            key={product._id}
            href={`/produtos/${currentCategory}/${product._id}`}
          >
            <CardProduct product={product} />
          </Link>
        ))}
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
