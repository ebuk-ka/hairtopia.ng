import { ScissorsIcon, SparklesIcon, UserGroupIcon, ArrowPathIcon  } from "@heroicons/react/24/outline";


const services = [
  {
    title: "Premium Wigs Sales",
    description:
      "High-quality, stylish wigs crafted for comfort, durability, and natural appearance.",
    icon: SparklesIcon,
  },
  {
    title: "Installation",
    description:
      "Personalized styling to suit your face shape,lifestyle, and desired look",
    icon: ScissorsIcon,
  },
  {
    title: "Consultation and Wig Matching",
    description: 
      "One-on-one guidance to help you choose the perfect texture, length, and fit.",
    icon: UserGroupIcon,
  },
  {
  title: "Wig Maintenance(Revamping)",
    description: 
      "Expert tips to help you maintain the beauty and longevity of your wig.",
    icon: ArrowPathIcon,
}
];

const Services = () => {
  return (
    <section id = "services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm tracking-widest uppercase text-black/100">
            What we do
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-light text-black">
            Our Services
          </h2>
          <p className="mt-4 text-black/60 leading-relaxed">
            Thoughtfully crafted services focused on quality, comfort, and confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group
                  rounded-3xl
                  border border-black/10
                  p-10
                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    h-14 w-14
                    rounded-full
                    border border-black/10
                    flex items-center justify-center
                    transition-all duration-500
                    group-hover:scale-110
                  "
                >
                  <Icon className="h-7 w-7 text-black" />
                </div>

                <h3 className="mt-8 text-xl font-medium text-black">
                  {service.title}
                </h3>

                <p className="mt-4 text-black/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
