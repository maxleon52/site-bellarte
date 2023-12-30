import ButtonAddToCart from "@/app/(produtos)/buttonAddToCart";
import { client } from "@/lib/sanity";
import { formatValue } from "@/lib/utils";
import { Product as ProductTypes } from "@/types/product";

import SlideProduct from "../../../slideProducts";

async function fetchData(_id: string) {
  const query = `*[_type == 'product' && _id == '${_id}']{
    _id,
    name,
    price,
    images,
    description,
    "slug":slug.current,
    category->{name, "slug": slug.current},
  }`;

  const response = await client.fetch(query);

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

  return dataFormatted;
}

export default async function Product({ params }: { params: { id: string } }) {
  const data: ProductTypes[] = await fetchData(params.id);

  return (
    <section className="grid flex-1 grid-cols-1 gap-6 px-4 py-8 md:px-8 xl:grid-cols-[1fr_500px] xl:px-16 2xl:grid-cols-2 2xl:px-40">
      {/* Column 1 and 2 */}
      <SlideProduct images={data[0]?.images} />

      {/* Column 3 */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg text-slate-400">
            Categoria: {data[0]?.category.name}
          </h2>

          <strong className="block text-3xl font-semibold text-slate-500">
            {data[0]?.name}
          </strong>
          <span className="block text-3xl font-semibold text-slate-400">
            {formatValue(data[0]?.price)}
          </span>

          <ButtonAddToCart product={data[0]}>
            ADICIONAR AO CARRINHO
          </ButtonAddToCart>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <span className="text-lg font-semibold text-slate-500 xl:text-xl">
              Descrição
            </span>
            {data[0].description.map((desc) => (
              <p key={desc} className="text-lg text-slate-400 xl:text-xl">
                {desc}
              </p>
            ))}
          </div>

          {/* <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold text-slate-500 xl:text-xl ">
              Compartilhar
            </span>
            <div className="flex gap-4">
              <Facebook className="h-5 w-fit cursor-pointer stroke-slate-400 transition-all hover:opacity-75 xl:h-6" />
              <Instagram className="h-5 w-fit cursor-pointer stroke-slate-400 transition-all hover:opacity-75 xl:h-6" />
              <Share2 className="h-5 w-fit cursor-pointer stroke-slate-400 transition-all hover:opacity-75 xl:h-6" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
