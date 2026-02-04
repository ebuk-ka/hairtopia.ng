import { products } from "../../data/Products";

const featured = products.slice(0, 12); // show first 4 products

const ProductCard = () => {
  return (
    <section className="py-24 bg-white" id = "wigs">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-black/60">
            Our Collection
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-light text-black">
            Featured Wigs
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info + Button */}
              <div className="flex-1 flex flex-col justify-between p-6 text-center">
                <div>
                  <h3 className="text-lg font-medium text-black">{product.name}</h3>

                  {/* Sizes & Prices */}
                  {product.sizes && product.sizes.map((item, index) => (
                    <p key={index} className="text-black/60 mt-1">
                      {item.size} — ₦{typeof item.price === "number" ? item.price.toLocaleString() : item.price}
                    </p>
                  ))}
                </div>

                {/* Shop Now Button */}
                <button className="mt-6 w-full rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductCard;
