import { products } from "../../data/Products";

const featured = products.slice(0, 12);

const ProductCard = () => {
  return (
    <section className="py-28 bg-white" id="wigs">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest uppercase text-black/60">
            Our Collection
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-light text-black tracking-wide">
            Featured Wigs
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col rounded-3xl border border-black/5 bg-white overflow-hidden transition hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-5 pt-6 pb-6 text-center">
                <h3 className="text-lg font-medium text-black tracking-wide">
                  {product.name}
                </h3>

                {/* Sizes */}
                <div className="mt-3 space-y-1 flex-1">
                  {product.sizes?.map((item, index) => (
                    <p key={index} className="text-sm text-black/60">
                      {item.size} — ₦{item.price.toLocaleString()}
                    </p>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/2348012345678?text=${encodeURIComponent(
                    `Hello Hairtopia, I want to order the ${product.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center
                  rounded-full bg-black px-6 py-3
                  text-sm font-medium text-white
                  transition hover:opacity-90"
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductCard;
