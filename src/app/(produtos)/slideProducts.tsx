"use client";

import React, { useState } from "react";

import { urlFor } from "@/lib/sanity";
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

interface SlideProductProps {
  images: any[];
}
export default function SlideProduct({ images }: SlideProductProps) {
  const [currentImg, setCurrentImg] = useState(urlFor(images[0])?.url() || "");

  return (
    <div className="grid gap-6 xl:grid-cols-[200px_1fr]">
      <Swiper
        direction={"vertical"}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        freeMode={true}
        scrollbar={{
          hide: true,
        }}
        breakpoints={{
          320: {
            direction: "horizontal",
            spaceBetween: 10,
            slidesPerView: 3,
            scrollbar: {
              hide: false,
            },
          },
          375: {
            direction: "horizontal",
            spaceBetween: 10,
            slidesPerView: 4,
            scrollbar: {
              hide: false,
            },
          },
          425: {
            direction: "horizontal",
            spaceBetween: 10,
            slidesPerView: 4,
            scrollbar: {
              hide: false,
            },
          },
          768: {
            direction: "horizontal",
            spaceBetween: 5,
            slidesPerView: 4,
            scrollbar: {
              hide: false,
            },
          },
          1024: {
            direction: "horizontal",
            spaceBetween: 5,
            slidesPerView: 5,
            scrollbar: {
              hide: false,
            },
          },
          1280: {
            direction: "vertical",
          },
        }}
        mousewheel={true}
        modules={[FreeMode, Mousewheel, Scrollbar]}
        slidesPerView={"auto"}
        className="!max-h-[150px] w-full overflow-hidden xl:!max-h-[600px]"
      >
        {images.map((img) => (
          <SwiperSlide
            key={img._key}
            className="w-fit cursor-pointer xl:!h-fit xl:w-full"
          >
            <img
              loading="lazy"
              src={urlFor(img).url()}
              alt={img.name}
              className="!h-[100px] !w-24 rounded-md bg-slate-100 object-cover md:!h-auto md:!w-full"
              onClick={() => setCurrentImg(urlFor(img).url())}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <img
          src={currentImg}
          alt=""
          className="w-full overflow-hidden rounded-md bg-slate-100 object-cover transition-all"
        />
      </div>
    </div>
  );
}
