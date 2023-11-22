import { client } from "@/lib/sanity";
import { Product as ProductTypes } from "@/types/product";
import { Facebook, Instagram, Share2, ShoppingCart } from "lucide-react";

import ButtonBuyWhatsapp from "@/components/buttonBuyWhatsapp";
import { Button } from "@/components/ui/button";

import SlideProduct from "../../../slideProduct";

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

  const data = await client.fetch(query);

  return data;
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
          <h2 className="text-slate-400">
            Categoria: {data[0]?.category.name}
          </h2>

          <strong className="block text-3xl font-semibold text-slate-500">
            {data[0]?.name}
          </strong>
          <span className="block text-3xl font-semibold text-slate-400">
            R$ 999,00
          </span>

          <div className="flex flex-col gap-4 py-2 md:flex-row">
            <ButtonBuyWhatsapp className="md:w-fit" />
            <Button
              className="h-12 border-slate-300 text-slate-500 md:w-fit"
              variant="outline"
            >
              ADICIONAR <ShoppingCart className="ml-2 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-base font-semibold text-slate-500 xl:text-xl ">
              Compartilhar
            </span>
            <div className="flex gap-4">
              <Facebook className="h-4 w-fit cursor-pointer stroke-slate-400 transition-all hover:opacity-75 xl:h-6" />
              <Instagram className="h-4 w-fit cursor-pointer stroke-slate-400 transition-all hover:opacity-75 xl:h-6" />
              <Share2 className="h-4 w-fit cursor-pointer stroke-slate-400 transition-all hover:opacity-75 xl:h-6" />
            </div>
          </div>

          <div>
            <span className="text-base font-semibold text-slate-500 xl:text-xl">
              Descrição
            </span>
            <p className="text-base text-slate-400 xl:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              ad totam, laboriosam magnam quaerat repellat corporis ab natus
              necessitatibus. Expedita minus, possimus magnam accusantium
              blanditiis iusto hic tempora ex nisi. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ratione ad totam, laboriosam magnam
              quaerat repellat corporis ab natus necessitatibus. Expedita minus,
              possimus magnam accusantium blanditiis iusto hic tempora ex nisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
