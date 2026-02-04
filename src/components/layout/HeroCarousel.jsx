import { useState, useEffect } from "react";
import hero1 from "../../assets/images/wig7.jpeg";
import hero2 from "../../assets/images/wig3.jpeg";
import hero3 from "../../assets/images/wigs.jpeg";

const slides = [
  { title: "LUXURY YOU CAN FEEL", text: "Hair_topia.ng where hair fantasies come alive.", image: hero1 },
  { title: "BOLD.BEAUTIFUL.YOU.", text: "More than hair-an experience of luxury,comfort, and undeniable confidence", image: hero2 },
  { title: "Your Hair, Our Passion", text: "Book or shop products tailored just for you.", image: hero3 },
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true); 
      }, 500); 
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home"  className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src={slides[index].image}
        alt="Hero background"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
      />

      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 bg-white/50" />

      {/* TEXT CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">
          <div className={`max-w-2xl lg:max-w-3xl space-y-6 lg:space-y-8 text-center lg:text-left transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {slides[index].title}
            </h1>
            <p className="text-gray-700 text-lg lg:text-xl">
              {slides[index].text}
            </p>
            <button className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-sm lg:text-base font-medium hover:scale-105 transition-transform duration-300">
              Shop Now 🛒
            </button>
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
              idx === index ? "bg-gray-900" : "bg-gray-400/50"
            }`}
            onClick={() => setIndex(idx)}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white"></div>

    </section>
  
  );
};

export default HeroCarousel;
