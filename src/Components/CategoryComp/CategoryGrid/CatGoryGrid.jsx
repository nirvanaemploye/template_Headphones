import data1 from "../../../assets/CategoryCompImg/ListDataImg/List1.png";
import data2 from "../../../assets/CategoryCompImg/ListDataImg/List2.png";
import data3 from "../../../assets/CategoryCompImg/ListDataImg/List3.png";
import data4 from "../../../assets/CategoryCompImg/ListDataImg/List4.png";
import Pagination from "./Pagination";

const products = [
  {
    id: 1,
    name: "Sony MDR-ZX110AP",
    price: 50,
    text: "Lorem Ipsum is simply dummy text of the printing",
    image: data1,
  },
  {
    id: 2,
    name: "Sony MDR-ZX110AP",
    price: 45,
    text: "Lorem Ipsum is simply dummy text of the printing",

    image: data2,
    offer: true,
  },
  {
    id: 3,
    name: "Sony MDR-ZX110AP",
    price: 50,
    text: "Lorem Ipsum is simply dummy text of the printing",

    image: data3,
  },
  {
    id: 4,
    name: "Sony MDR-ZX110AP",
    price: 45,
    text: "Lorem Ipsum is simply dummy text of the printing",
    image: data4,
    offer: true,
  },
  {
    id: 5,
    name: "Sony MDR-ZX110AP",
    price: 50,
    discount: null,
    text: "Lorem Ipsum is simply dummy text of the printing",
    image: data1,
  },
  {
    id: 6,
    name: "Sony MDR-ZX110AP",
    price: 45,
    discount: 50,
    text: "Lorem Ipsum is simply dummy text of the printing",
    image: data2,
    offer: true,
  },
  {
    id: 7,
    name: "Sony MDR-ZX110AP",
    price: 50,
    discount: null,
    text: "Lorem Ipsum is simply dummy text of the printing",
    image: data3,
  },
  {
    id: 8,
    name: "Sony MDR-ZX110AP",
    price: 45,
    discount: 50,
    text: "Lorem Ipsum is simply dummy text of the printing",
    image: data4,
    offer: true,
  },
];

const CatGoryGrid = () => {
  return (
    <>
      <section className=" pb-40 lg:py-40 2xl:py-60 ">
        <div className="container pb-9 ">
          <div className="border-b p-3">
            <p className="text-sm ">Showing 1-8 of 20 Result </p>
          </div>
        </div>

        <div className="container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-14 mb-20 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="shadow-sm bg-white relative text-center flex flex-col items-center hover:shadow-xl duration-300 group"
            >
              <div className="object-cover bg-gray-100 rounded-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="group-hover:scale-110 duration-500 md:p-12 p-2"
                />
              </div>
              <div className="space-y-3 py-3">
                <h3 className="2xl:text-xl text-lg font-semibold mt-3">{product.name}</h3>
                <p className="text-sm  text-gray-500 md:px-7">{product.text}</p>
                <p className=" text-black font-bold 2xl:text-xl text-lg group-hover:text-primary duration-300 ">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Pagination currentPage={1} totalPages={4} onPageChange={() => {}} />
      </section>
    </>
  );
};

export default CatGoryGrid;
