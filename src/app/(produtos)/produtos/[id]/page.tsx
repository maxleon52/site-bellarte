import { Facebook, Instagram, Share2, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import SlideProduct from "../../SlideProduct";

// export default function Product({ params }: { params: { id: string } }) {
export default function Product() {
  return (
    <section className="cont grid flex-1 gap-6 px-4 py-8 md:grid-cols-2 md:px-8 xl:px-16 2xl:px-40">
      <div className="max-w-full overflow-hidden">
        <SlideProduct />
      </div>

      <div className="grid flex-none gap-4">
        <h2 className="text-3xl font-semibold text-transparent text-zinc-500 md:text-5xl">
          Nome do item
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-3xl text-zinc-400">R$ 999,00</span>
          <Select defaultValue="1">
            <SelectTrigger className="border-zinc-300 text-zinc-400 !ring-0 !ring-offset-0 md:max-w-[160px] md:text-lg">
              <SelectValue placeholder="Selecione uma categoria" />
            </SelectTrigger>
            <SelectContent className="">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <SelectItem
                  key={item}
                  value={String(item)}
                  className="text-zinc-400"
                >
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button className="h-12 w-full">COMPRAR</Button>
        <Button
          className="h-12 w-full border-zinc-400 text-zinc-500"
          variant="outline"
        >
          ADICIONAR AO CARRINHO <ShoppingCart className="ml-2 h-4" />
        </Button>

        <div className="flex flex-col gap-4">
          <span className="text-xl font-semibold text-zinc-500 ">
            Compartilhar
          </span>

          <div className="flex gap-4">
            <Facebook className="cursor-pointer stroke-zinc-400 transition-all hover:opacity-75" />
            <Instagram className="cursor-pointer stroke-zinc-400 transition-all hover:opacity-75" />
            <Share2 className="cursor-pointer stroke-zinc-400 transition-all hover:opacity-75" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xl font-semibold text-zinc-500">Descrição</span>

          <p className="text-xl text-zinc-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ad
            totam, laboriosam magnam quaerat repellat corporis ab natus
            necessitatibus. Expedita minus, possimus magnam accusantium
            blanditiis iusto hic tempora ex nisi. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ratione ad totam, laboriosam magnam
            quaerat repellat corporis ab natus necessitatibus. Expedita minus,
            possimus magnam accusantium blanditiis iusto hic tempora ex nisi.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ad
            totam, laboriosam magnam quaerat repellat corporis ab natus
            necessitatibus. Expedita minus, possimus magnam accusantium
            blanditiis iusto hic tempora ex nisi. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ratione ad totam, laboriosam magnam
            quaerat repellat corporis ab natus necessitatibus. Expedita minus,
            possimus magnam accusantium blanditiis iusto hic tempora ex nisi.
          </p>
        </div>
      </div>
    </section>
  );
}
