import { useState, useEffect } from "react";
import hero1 from "../../assets/images/wig7.jpeg";
import hero2 from "../../assets/images/wig3.jpeg";
import hero3 from "../../assets/images/wigs.jpeg";

const slides = [
  {
    title: "LUXURY YOU CAN FEEL",
    text: "Hair_topia.ng — where hair fantasies come alive.",
    image: hero1,
  },
  {
    title: "BOLD. BEAUTIFUL. YOU.",
    text: "More than hair — an experience of luxury, comfort, and confidence.",
    image: hero2,
  },
  {
    title: "Your Hair, Our Passion",
    text: "Shop premium wigs tailored just for you.",
    image: hero3,
  },
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
      }, 600);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-[85vh] min-h-[600px] overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={slides[index].image}
        alt="Hero background"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/55" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">
          <div
            className={`max-w-2xl space-y-6 transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {slides[index].title}
            </h1>

            <p className="text-gray-700 text-lg lg:text-xl">
              {slides[index].text}
            </p>

            <a
              href="https://wa.me/2348012345678?text=Hello%20Hairtopia,%20I%20want%20to%20shop%20your%20wigs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center
              rounded-full bg-black px-8 py-4
              text-sm font-medium text-white
              transition hover:opacity-90"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`h-3 w-3 rounded-full transition ${
              idx === index ? "bg-black w-6" : "bg-black/30"
            }`}
          />
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
};

export default HeroCarousel;
