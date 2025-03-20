import { useState } from "react";
import TreImg1 from "../../../assets/HomeCompImg/Trending/Trending1.png";
import TreImg2 from "../../../assets/HomeCompImg/Trending/Trending2.png";
import TreImg3 from "../../../assets/HomeCompImg/Trending/Trending3.png";
import TreImg4 from "../../../assets/HomeCompImg/Trending/Trending4.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const products = [
  { id: 1, name: "JBL Wave Beam 2", price: "$35", rating: 5, reviews: 20, image: TreImg1 },
  { id: 2, name: "JBL Wave Beam 2", price: "$35", rating: 4, reviews: 20, image: TreImg2 },
  { id: 3, name: "JBL Wave Beam 2", price: "$35", rating: 4, reviews: 20, image: TreImg3 },
  { id: 4, name: "JBL Wave Beam 2", price: "$35", rating: 3, reviews: 20, image: TreImg4 },
  { id: 5, name: "JBL Wave Beam 2", price: "$35", rating: 4, reviews: 20, image: TreImg2 },
  { id: 6, name: "JBL Wave Beam 2", price: "$35", rating: 4, reviews: 20, image: TreImg1 },
  { id: 7, name: "JBL Wave Beam 2", price: "$35", rating: 4, reviews: 20, image: TreImg4 },
  // { id: 8, name: "JBL Wave Beam 2", price: "$35", rating: 4, reviews: 20, image: TreImg3 },
  // { id: 9, name: "JBL Wave Beam 2", price: "$35", rating: 4, reviews: 20, image: TreImg2 },
];

const TrendingPro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const productsPerPage = 4; // Show 4 items per page
  const maxPages = Math.ceil(products.length / productsPerPage);

  const nextSlide = () => {
    if (currentIndex < maxPages - 0) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-32 bg-white">
      <div className="container">
        {/* Heading section */}
        <div className="text-center pb-8">
          <h1 className="text-3xl font-bold">Trending Product</h1>
          <p className="text-base mt-3 text-gray-400 w-96 mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-8">
          <div className="relative">
            {/* Product Wrapper */}
            <div className="flex overflow-hidden justify-start">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {/* Render each page */}
                {Array.from({ length: maxPages }).map((_, pageIndex) => (
                  <div className="flex min-w-full" key={pageIndex}>
                    {products
                      .slice(pageIndex * productsPerPage, (pageIndex + 1) * productsPerPage)
                      .map((product) => (
                        <div key={product.id} className=" p-4">
                          <div className="border hover:border-primary hover:bg-[#01A4E105] rounded-xl p-4 transition-all hover:shadow-lg group">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="mx-auto h-56 object-contain group-hover:scale-105 duration-100"
                            />
                            <h3 className="font-bold mt-3">{product.name}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <div className="flex items-center gap-1 text-yellow-400 mt-2">
                              {"⭐".repeat(product.rating)}
                              {"☆".repeat(5 - product.rating)}
                              <span className="text-gray-500 text-xs">({product.reviews})</span>
                            </div>
                            <p className="font-bold text-xl group-hover:text-primary mt-2">{product.price}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className={`absolute top-1/2 -left-14 transform -translate-y-1/2 bg-gray-100 shadow-md p-4 rounded-full z-10 ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentIndex === 0}
            >
              <FaArrowLeft className="text-black/50 text-xl" />
            </button>

            <button
              onClick={nextSlide}
              className={`absolute top-1/2 -right-14 transform -translate-y-1/2 bg-gray-100 shadow-md p-4 rounded-full z-10 ${
                currentIndex === maxPages - 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentIndex === maxPages - 1}
            >
              <FaArrowRight className="text-black/50 text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingPro;
