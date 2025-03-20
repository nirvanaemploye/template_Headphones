import AboutBg from "../../../assets/AboutCompImg/AboutBg.png";

const style = {
  backgroundImage: `url(${AboutBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
};
const AbHero = () => {
  return (
    <section>
      <div style={style} className="text-center  text-white space-y-4 py-44 2xl:py-52">
        <h1 className="text-6xl font-bold">About</h1>
        <p><span>Home</span> <span className="text-primary">/ About</span></p>
      </div>
    </section>
  );
};

export default AbHero;
