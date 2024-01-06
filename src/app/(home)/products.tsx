"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { linksHeader } from "@/constants";
import { client } from "@/lib/sanity";
import { ProductsTypes } from "@/types/home";
import { ArrowRight } from "lucide-react";

import CardProduct from "@/components/card-product";
import SkeletonCardProduct from "@/components/skeleton-card-product";

interface IProducts {
  amigurumi: ProductsTypes[];
  bolsas: ProductsTypes[];
  vestuarios: ProductsTypes[];
  sousplat: ProductsTypes[];
  "porta-guardanapo": ProductsTypes[];
}

export default function Products() {
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);

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

        // await new Promise(function (resolve) {
        //   setTimeout(resolve, 5000);
        // });

        const response = await client.fetch<ProductsTypes[]>(query);

        const dataFormatted = response.map((item: any) => {
          let lines = item.description
            .split("\n")
            .map((line: string, index: number) => {
              line = line.trim();
              if (index === 0 || line.startsWith("-") || line.startsWith("*")) {
                return line;
              } else {
                return `- ${line.replace(/^\*+/, "")}`;
              }
            });
          // Remover linhas em branco e linhas que contenham apenas '-' ou '*'
          lines = lines.filter((line: any) => line && !/^[-*]+$/.test(line));

          return {
            ...item,
            description: lines,
          };
        });

        setProducts((prev) => {
          return { ...prev, [currentCategory]: dataFormatted };
        });
        setIsLoading(false);
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
        {isLoading ? (
          <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <SkeletonCardProduct key={item} />
            ))}
          </>
        ) : (
          <>
            {products[currentCategory as keyof IProducts]?.map((product) => (
              <CardProduct key={product._id} product={product} />
            ))}
          </>
        )}
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
