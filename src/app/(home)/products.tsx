/* eslint-disable @next/next/no-img-element */
import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Products() {
  return (
    <section className="flex flex-col gap-6 px-4 md:px-8 xl:px-16 2xl:px-40">
      <h2 className="text-center">Produtos</h2>

      <ul className="flex w-full gap-6 overflow-scroll pb-4 md:items-center md:justify-center md:overflow-hidden">
        <li className="flex-none">Categoria 1</li>
        <li className="flex-none">Categoria 2</li>
        <li className="flex-none">Categoria 3</li>
        <li className="flex-none">Categoria 4</li>
      </ul>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Card key={item} className="overflow-hidden">
            <CardContent className="p-0">
              <img
                src="images/no-item.webp"
                alt="imagem de carinho de compras"
                className="w-full object-cover"
              />
            </CardContent>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardFooter>
              <p>R$ 999,00</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <strong>Explorar produtos {"->"} </strong>
    </section>
  );
}
