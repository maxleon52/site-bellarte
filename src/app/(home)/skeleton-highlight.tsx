import React from "react";

export default async function SkeletonHighlights() {
  return (
    <section className="flex flex-col gap-6 px-4 py-8 md:px-8 xl:px-16 2xl:px-40">
      <h2 className="bg-gradient-to-r from-bellarte-400 via-bellarte-300 to-bellarte-200 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
        Destaques
      </h2>

      <div className="flex animate-pulse gap-2 overflow-x-scroll pb-4 md:grid md:grid-cols-2 md:gap-6 md:overflow-hidden">
        {[1, 2].map((skeleton) => (
          <div
            key={skeleton}
            className="relative flex h-36 w-[96%] flex-none cursor-pointer justify-end overflow-hidden rounded-lg border border-slate-200 shadow-sm md:h-52 md:w-full xl:h-64"
          >
            <div className="absolute left-[5%] top-[50%] flex w-[50%] flex-col justify-center">
              <div className="mb-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700 sm:w-[80%]"></div>
              <div className="mb-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700 sm:w-[80%]"></div>
            </div>

            <div className="flex h-auto w-[35%] items-center justify-center rounded bg-gray-300 dark:bg-gray-700 sm:w-[50%]">
              <svg
                className="h-10 w-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
