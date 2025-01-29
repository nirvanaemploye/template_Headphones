import Blog1 from "../../assets/blogs/blog1.jpg";
import Blog2 from "../../assets/blogs/blog2.jpg";
import Blog3 from "../../assets/blogs/blog3.jpg";
import Blog4 from "../../assets/blogs/blog4.jpg";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const fadeup = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: -100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const BlogsData = [
  {
    id: 1,
    title: "The Most Expensive Headphones In 2022",
    img: Blog1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    link: "#",
  },
  {
    id: 2,
    title: "The Most Expensive Headphones In 2022",
    img: Blog2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    link: "#",
  },
  {
    id: 3,
    title: "The Most Expensive Headphones In 2022",
    img: Blog3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    link: "#",
  },
  {
    id: 4,
    title: "The Most Expensive Headphones In 2022",
    img: Blog4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    link: "#",
  },
];
const Blogs = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container py-14">
          <motion.h1 
            variants={fadeup(0.2)} initial="hidden" whileInView={"show"} className="text-3xl font-bold text-center font-poppins pb-8">
            Blogs
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {BlogsData.map((item) => {
          
              return (<UpdateFollower key={item.id}
                mouseOptions={{
                  backgroundColor: "black",
                  zIndex: 999,
                  followSpeed: 1.5,
                  text: "Read..",
                  textFontSize: "3px",
                  scale: 4,
                }}
              >
                <div key={item.id} className="flex flex-col items-center justify-center gap-6    p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300">
                <img src={item.img} alt={item.img} />
                <div className="space-y-2">
                    <h1 className="text-xl font-bold line-clamp-2">{item.title}</h1>
                    <p className="line-clamp-2">{item.desc}</p>
                </div>
              </div>
              </UpdateFollower>);
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
