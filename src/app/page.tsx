import { client } from "@/lib/sanity";

import Banner from "./(home)/banner";
import Contact from "./(home)/contact";
import Hero from "./(home)/hero";
import Highlights from "./(home)/highlights";
import Products from "./(home)/products";
import Testimonials from "./(home)/testimonials";

async function getData() {
  const query = `*[_type == 'heroImage'] | order(order asc){
    _id,
    order,
    name,
    image,
    category->{name, "slug": slug.current},
  }`;

  const data = await client.fetch(query);

  return data;
}
export default async function Home() {
  const data = await getData();

  return (
    <>
      <Hero data={data} />
      <Banner />
      <Highlights />
      <Products />
      <Testimonials />
      <Contact />
    </>
  );
}
