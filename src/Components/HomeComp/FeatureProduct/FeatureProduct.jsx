import FProImg from "../../../assets/HomeCompImg/FProducts/FutarePro.png";

const products = [
  {
    id: 1,
    name: "Boat Headphone",
    price: "$45",
    oldPrice: null,
    discount: null,
    image: FProImg,
  },
  {
    id: 2,
    name: "Boat Headphone",
    price: "$30",
    oldPrice: "$45",
    discount: "15% off",
    image: FProImg,
  },
  {
    id: 3,
    name: "Boat Headphone",
    price: "$45",
    oldPrice: null,
    discount: null,
    image: FProImg,
  },
  {
    id: 4,
    name: "Boat Headphone",
    price: "$30",
    oldPrice: "$45",
    discount: "15% off",
    image: FProImg,
  },
  {
    id: 5,
    name: "Boat Headphone",
    price: "$45",
    oldPrice: null,
    discount: null,
    image: FProImg,
  },
  {
    id: 6,
    name: "Boat Headphone",
    price: "$30",
    oldPrice: "$45",
    discount: "15% off",
    image: FProImg,
  },
  {
    id: 7,
    name: "Boat Headphone",
    price: "$45",
    oldPrice: null,
    discount: null,
    image: FProImg,
  },
  {
    id: 8,
    name: "Boat Headphone",
    price: "$30",
    oldPrice: "$45",
    discount: "15% off",
    image: FProImg,
  },
];

const FeatureProduct = () => {
  return (
    <section className="py-32 bg-gray-100">
      <div className="container ">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-10 border-b-2 border-gray-200 pb-4">
          Feature Product
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white px-5 py-4 rounded-3xl shadow-sm flex gap-3 items-center border-[1px] hover:border-primary group transition-all duration-300 "
            >
              {/* Discount Badge - Positioned Absolutely */}
              {product.discount && (
                <div className="absolute top-3 left-14 bg-yellow-400 text-black text-xs font-semibold rounded-full w-10 h-10 flex justify-center items-center text-center group-hover:text-white group-hover:scale-125 duration-100 ">
                  {product.discount}
                </div>
              )}

              {/* Product Image */}
              <div className="w-28 h-28 shrink-0 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 space-y-1">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-5">
                  Lorem Ipsum is simply dummy text of the
                </p>

                {/* Price Info */}
                <div className="flex items-center gap-2 group-hover:text-primary  transition duration-300">
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      {product.oldPrice}
                    </span>
                  )}
                  <span className="font-bold text-base">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
