import { Metadata } from "next";
import React from "react";

import { client } from "@/lib/sanity";
import { Product } from "@/types/product";

import ListProducts from "../../listProducs";

type translateType = {
  [key: string]: string;
};
const dictionary: translateType = {
  bolsas: "Bolsas",
  vestuarios: "Vestuarios",
  sousplat: "Sousplat",
  "porta-guardanapos": "Porta guardanapos",
  amigurumi: "Amigurumi",
};

export async function generateMetadata(props: any): Promise<Metadata> {
  return {
    title: `${props.params.category}`,
    description: `${props.params.category} de qualidade impecavel`,
    robots: {
      follow: true,
      index: true,
    },
    alternates: {
      canonical: `https://www.bellartecroche.com.br/${props.params.category}`,
    },
  };
}

async function fetchData(category: string) {
  const query = `*[_type == 'product' && category->name == '${category}']{
    _id,
    name,
    price,
    images,
    description,
    "slug":slug.current,
    category->{name, "slug": slug.current},  
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Products({
  params,
}: {
  params: { category: string };
}) {
  const data: Product[] = await fetchData(params.category);

  return (
    <section className="flex flex-1 flex-col gap-6 px-4 py-8 md:px-8 xl:px-16 2xl:px-40">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="bg-gradient-to-r from-bellarte-400 via-bellarte-300 to-bellarte-200 bg-clip-text text-3xl font-bold text-transparent md:pb-1 md:text-5xl">
          {dictionary[params.category]}
        </h2>
      </div>

      <ListProducts data={data} />
    </section>
  );
}
