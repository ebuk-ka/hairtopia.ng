import HeroCarousel from "../components/layout/HeroCarousel";
import About from "../components/layout/About";
import Services from "../components/layout/Services";
import ProductCard from "../components/layout/ProductCard"
import ReviewCarousel from "../components/layout/ReviewCarousel";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <About/>
      <Services/>
      <ProductCard/>
      <ReviewCarousel/>
    </>
  );
};

export default Home;
