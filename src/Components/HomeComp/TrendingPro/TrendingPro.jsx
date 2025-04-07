import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TreImg1 from "../../../assets/HomeCompImg/Trending/Trending1.png";
import TreImg2 from "../../../assets/HomeCompImg/Trending/Trending2.png";
import TreImg3 from "../../../assets/HomeCompImg/Trending/Trending3.png";
import TreImg4 from "../../../assets/HomeCompImg/Trending/Trending4.png";

const products = [
  { id: 1, name: "JBL Wave Beam 2", price: "$35", rating: 5, reviews: 20, image: TreImg1, description: "Lorem Ipsum is simply dummy text of the printing and type setting industry." },
  { id: 2, name: "JBL Wave Beam 2", price: "$35", rating: 4, reviews: 20, image: TreImg2, description: "Lorem Ipsum is simply dummy text of the printing and type setting industry." },
  { id: 3, name: "JBL Wave Beam 2", price: "$35", rating: 4, reviews: 20, image: TreImg3, description: "Lorem Ipsum is simply dummy text of the printing and type setting industry." },
  { id: 4, name: "JBL Wave Beam 2", price: "$35", rating: 3, reviews: 20, image: TreImg4, description: "Lorem Ipsum is simply dummy text of the printing and type setting industry." },
  { id: 5, name: "JBL Wave Beam 2", price: "$35", rating: 4, reviews: 20, image: TreImg2, description: "Lorem Ipsum is simply dummy text of the printing and type setting industry." },
  { id: 5, name: "JBL Wave Beam 2", price: "$35", rating: 4, reviews: 20, image: TreImg2, description: "Lorem Ipsum is simply dummy text of the printing and type setting industry." },
];

const TrendingPro = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="text-center pb-8">
          <h1 className="text-3xl font-bold">Trending Product</h1>
          <p className="text-base mt-3 text-gray-400 w-96 mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative container">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-3 ">
                <div className="border hover:border-primary hover:bg-[#01A4E105] rounded-xl p-4 transition-all hover:shadow-lg group">
                  <div className="mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="mx-auto h-48 object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="">
                    <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {product.description}
                    </p>
                    <div className="flex gap-1 text-yellow-400 mb-2">
                      {"⭐".repeat(product.rating)}
                      {"☆".repeat(5 - product.rating)}
                      <span className="text-gray-500 text-sm ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                    <p className="font-bold text-xl text-blue-600">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>
        {`
          .slick-prev,
          .slick-next {
            width: 40px;
            height: 40px;
            background-color: white !important;
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            z-index: 10;
          }
          .slick-prev {
            left: -40px;
          }
          .slick-next {
            right: -40px;
          }
          .slick-prev:hover,
          .slick-next:hover {
            background-color: white !important;
          
          }
          .slick-prev:before,
          .slick-next:before {
            color: #666;
          }
        `}
      </style>
    </section>
  );
};

export default TrendingPro;
