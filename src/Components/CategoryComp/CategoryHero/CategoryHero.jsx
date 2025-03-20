import TitleBg from "../../../assets/CategoryCompImg/CategoryHeroBg.png";

const style = {
  backgroundImage: `url(${TitleBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
};
const CategoryHero = () => {
  return (
<section>
      <div style={style} className="text-center  text-white space-y-4 py-44 2xl:py-52">
        <h1 className="text-6xl font-bold">Category</h1>
        <p><span>Home</span> <span className="text-primary">/ Category</span></p>
      </div>
    </section>  )
}

export default CategoryHero