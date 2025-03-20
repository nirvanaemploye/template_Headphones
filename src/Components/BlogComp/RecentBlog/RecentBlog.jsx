import Rbolg from "../../../assets/Blogs/RecentBlog.png";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
import { FaCalendar, FaClock } from "react-icons/fa";

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

const blogs = [
  {
    id: 1,
    title: "Which One Should You Choose?",
    date: "02 / 02 / 2025",
    time: "8:00 pm",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.......",
    image: Rbolg, // Replace with actual image URL
  },
  {
    id: 2,
    title: "Which One Should You Choose?",
    date: "02 / 02 / 2025",
    time: "8:00 pm",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.......",
    image: Rbolg,
  },
  {
    id: 3,
    title: "Which One Should You Choose?",
    date: "02 / 02 / 2025",
    time: "8:00 pm",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.......",
    image: Rbolg,
  },
];
const RecentBlog = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container py-32">
          <motion.h1
            variants={fadeup(0.2)}
            initial="hidden"
            whileInView={"show"}
            className="text-3xl font-bold text-center font-poppins mb-14"
          >
            Resent Blog
          </motion.h1>
          
          {/* Blog Grid  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {blogs.map((blog) => {
              return (
                <UpdateFollower
                  key={blog.id}
                  mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 999,
                    followSpeed: 1.5,
                    text: "Read..",
                    textFontSize: "3px",
                    scale: 4,
                  }}
                >
                  <div
                    key={blog.id}
                    className="bg-white border rounded-3xl overflow-hidden hover:scale-105 duration-300"
                  >
                    <img src={blog.image} alt={blog.title} className="w-full" />
                    <div className=" lg:flex md:flex-none flex  gap-4 items-center px-4 pt-3  md:text-[10px]">
                      <div className="flex items-center gap-2 lg:text-base text-sm">
                      <FaCalendar className="text-secondary" />
                      <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-2 lg:text-base text-sm">
                      <FaClock className="text-secondary" />
                      <span>{blog.time}</span>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="text-lg font-bold">{blog.title}</h3>
                      <p className="text-gray-500 text-sm leading-7">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                </UpdateFollower>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentBlog;
