import aboutLogo from "../../assets/images/hairtopiaabout.jpeg"

const About = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* TEXT */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            About Hairtopia
          </h2>
          <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
            HAIR_TOPIA offers high-quality, comfortable, and stylish wigs designed to enhance confidence and elevate everyday beauty. With versatile styles and carefully crafted textures, our pieces blend seamlessly while remaining affordable and effortlessly luxurious.
          </p>
          <p  className="text-gray-700 text-lg lg:text-x3 leading-relaxed">
            Where hair fantasies come alive.
          </p>
          
        </div>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={aboutLogo}
            alt="About Hairtopia"
            className="rounded-3xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
