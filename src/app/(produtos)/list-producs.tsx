"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Product } from "@/types/product";
import { usePagination } from "@mantine/hooks";

import CardProduct from "@/components/card-product";

const itensPerPage = 10;

interface PaginatinoProps {
  data: Product[];
}
export default function ListProducts({ data }: PaginatinoProps) {
  const [visibleProducts, setVisibleProducts] = useState(
    data.slice(0, itensPerPage),
  );

  const pagination = usePagination({
    total: Math.ceil(data.length / itensPerPage),
    initialPage: 1,
    onChange(page) {
      const start = (page - 1) * itensPerPage;
      const end = start + itensPerPage;
      setVisibleProducts(data.slice(start, end));
    },
  });

  return (
    <>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
        {visibleProducts.map((product) => (
          <CardProduct key={product._id} product={product} />
        ))}
      </div>
      {itensPerPage < data.length && (
        <div className="flex justify-center gap-1 xl:justify-start">
          {pagination.range.map((range) =>
            range === "dots" ? (
              <button
                key={range}
                className="flex items-center justify-center rounded-sm border border-slate-200 bg-white px-3 py-[0.15rem] text-slate-500"
              >
                ...
              </button>
            ) : (
              <button
                key={range}
                onClick={() => pagination.setPage(range)}
                className={cn(
                  `flex items-center justify-center rounded-sm border border-slate-200 bg-white px-3 py-[0.15rem] text-slate-500`,
                  pagination.active === range &&
                    "border-bellarte-200 bg-bellarte-50 text-bellarte-300",
                )}
              >
                {range}
              </button>
            ),
          )}
        </div>
      )}
    </>
  );
}
