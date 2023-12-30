import { Suspense } from "react";

import { client } from "@/lib/sanity";

// import Banner from "./(home)/banner";
import Contact from "./(home)/contact";
import Hero from "./(home)/hero";
import Highlights from "./(home)/highlights";
import Products from "./(home)/products";
import SkeletonHighlights from "./(home)/skeletonHighlight";
// import Testimonials from "./(home)/testimonials";

async function getData() {
  const query = `*[_type == 'product' && heroImage == true] | order(order asc){
      _id,
      name,
      price,
      images,
      description,
      order,
      "slug":slug.current,
      category->{name, "slug": slug.current}
  }`;

  const data = await client.fetch(query);

  return data;
}
export default async function Home() {
  const data = await getData();

  return (
    <>
      <Hero data={data} />

      {/* <Banner /> */}

      <Suspense fallback={<SkeletonHighlights />}>
        <Highlights />
      </Suspense>

      <Products />

      {/* <Testimonials /> */}

      <Contact />
    </>
  );
}
