import TitleBg from "../../../assets/Blogs/BlogHeroBg.png";

const style = {
  backgroundImage: `url(${TitleBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
};
const BlogHero = () => {
  return (
    <section>
      <div style={style} className="text-center  text-white space-y-4 py-44 2xl:py-52">
        <h1 className="text-6xl font-bold">Blog</h1>
        <p><span>Home</span> <span className="text-primary">/ Blog</span></p>
      </div>
    </section>
  )
}

export default BlogHero