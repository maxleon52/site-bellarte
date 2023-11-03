import Banner from "./(home)/banner";
import Contact from "./(home)/contact";
import Hero from "./(home)/hero";
import Highlights from "./(home)/highlights";
import Products from "./(home)/products";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Highlights />
      <Products />
      <Contact />
    </>
  );
}
