import { useState, useEffect } from "react";
import { reviews } from "../../data/Review";

const ReviewsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = reviews.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [length]);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
          What Our Clients Say
        </h2>
        <p className="text-black/60 mb-12">
          Real feedback from our happy customers
        </p>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-full px-4 flex justify-center"
              >
                <div className="bg-white rounded-3xl shadow-lg p-6 max-w-md w-full flex flex-col items-center">
                  {/* Rectangular image */}
                  <div className="overflow-hidden rounded-2xl mb-6 w-full h-30 md:h-50">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-contain rounded-3xl"
                    />
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-black mb-2">
                    {review.name}
                  </h3>
                  <div className="flex justify-center mt-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 md:w-6 md:h-6 ${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.383 2.457a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.538 1.118l-3.382-2.457a1 1 0 00-1.175 0l-3.382 2.457c-.783.57-1.838-.197-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.966z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-black/70 text-center">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
