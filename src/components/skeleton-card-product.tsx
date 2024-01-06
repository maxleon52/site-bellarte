import React from "react";

export default function SkeletonCardProduct() {
  return (
    <div className="group grid h-[270px] animate-pulse grid-rows-[65%_40px_30px] gap-2 overflow-hidden rounded-md shadow-md transition-all hover:shadow-md md:h-[450px] md:grid-rows-[70%_70px_40px] md:gap-0">
      {/* imagem */}
      <div className="h-[90%] cursor-pointer overflow-hidden bg-gray-200 p-0 dark:bg-gray-700" />

      {/* nome do produto */}
      <div className="px-2 py-0 md:px-4 md:py-4">
        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* valores e icone de carrinho */}
      <div className="grid grid-cols-[1fr_10%] gap-12 px-2 py-0 md:px-4 md:py-4">
        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
      </div>
    </div>
  );
}
