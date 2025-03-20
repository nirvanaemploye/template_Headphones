import cat1 from "../../../assets/CategoryCompImg/Cat1.png";
import cat2 from "../../../assets/CategoryCompImg/Cat2.png";
import cat3 from "../../../assets/CategoryCompImg/Cat3.png";
import cat4 from "../../../assets/CategoryCompImg/Cat4.png";

const CategoryListData = [
  { id: 1, title: "JBL", img: cat1 },
  { id: 2, title: "BOAT", img: cat2 },
  { id: 3, title: "SONY", img: cat3 },
  { id: 4, title: "PANASONIC", img: cat4 },
  { id: 5, title: "BEATS", img: cat1 },
];

const CategoryList = () => {
  return (
    <section className="bg-white pb-12">
      <div className="container">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-5  sm:gap-14 lg:gap-x-52 2xl:gap-x-60 justify-center lg:absolute lg:top-1/2 lg:mt-48 2xl:mt-0 2xl:top-3/4 left-1/2 lg:transform lg:-translate-x-1/2  pt-8 lg:pt-0 ">
          {CategoryListData.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-3">
              <div className="h-20 w-20 lg:w-40 lg:h-40 flex items-center justify-center shadow-lg rounded-full p-4  bg-gray-100 border-2 hover:border-primary transition-transform duration-500 hover:scale-105">
                <img src={item.img} alt={item.title} className="rounded-full h-full" />
              </div>
              <p className="text-lg font-bold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
