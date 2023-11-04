import Banner from "./(home)/banner";
import Contact from "./(home)/contact";
import Hero from "./(home)/hero";
import Highlights from "./(home)/highlights";
import Products from "./(home)/products";
import Testimonials from "./(home)/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Highlights />
      <Products />
      <Testimonials />
      <Contact />
    </>
  );
}
