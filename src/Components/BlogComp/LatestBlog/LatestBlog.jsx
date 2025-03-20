import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaCalendar, FaClock } from "react-icons/fa";
import Lbolg1 from "../../../assets/Blogs/LetestBlog1.png";
import Lbolg2 from "../../../assets/Blogs/LetestBlog2.jpg";
import Lbolg3 from "../../../assets/Blogs/LetestBlog3.jpg";
import Lbolg4 from "../../../assets/Blogs/LetestBlog4.jpg";
import PrimaryButton from "../../../Layout/PrimaryButton/PrimaryButton";

const slides = [
  {
    date: "02 / 02 / 2025",
    time: "8:00 pm",
    title: "Which One Should You Choose?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy since the 1500s.",
    image: Lbolg1,
  },
  {
    date: "05 / 02 / 2025",
    time: "7:00 pm",
    title: "Discover the Latest Trends",
    description:
      "Keeping up with the latest trends can be difficult, but we make it easy for you with our expert insights.",
    image: Lbolg2,
  },
  {
    date: "02 / 02 / 2025",
    time: "8:00 pm",
    title: "Which One Should You Choose?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: Lbolg3,
  },
  {
    date: "05 / 02 / 2025",
    time: "7:00 pm",
    title: "Discover the Latest Trends",
    description:
      "Keeping up with the latest trends can be difficult, but we make it easy for you with our expert insights.",
    image: Lbolg4,
  },
];

const LatestBlog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxPages = slides.length;

  // Auto-scroll effect for mobile screens
  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Detect mobile screen
    if (!isMobile) return; // Stop auto-scroll on desktop

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxPages - 1 ? prev + 1 : 0));
    }, 2500); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxPages - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxPages - 1));
  };

  return (
    <section className="sm:container pt-32 bg-white ">
      <div className=" mx-auto sm:px-4 relative">
        {/* Heading section */}
        <div className="text-center pb-8 ">
          <h1 className="text-3xl font-bold">Latest Blog</h1>
          <p className="text-base mt-3 text-gray-400 max-w-lg mx-auto px-6 sm:px-0">
            Stay updated with the latest news and insights from the industry.
          </p>
        </div>

        {/* Blog Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((blog, index) => (
              <div key={index} className="px-5 min-w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 container 2xl:py-16 xl:py-12 rounded-3xl overflow-hidden shadow-md lg:p-10 border-2 p-6 gap-y-5">
                  {/* Blog Content */}
                  <div className="mx-auto order-2 md:order-1 space-y-3 p-2 flex flex-col justify-center">
                    <div className="flex gap-4 items-center text-lg">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-secondary lg:text-lg text-sm" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-secondary lg:text-lg text-sm" />
                        <span>{blog.time}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="lg:text-3xl text-xl font-bold">
                        {blog.title}
                      </h3>
                      <p className="text-gray-500 text-base leading-7 mt-2">
                        {blog.description}
                      </p>
                      <PrimaryButton>Read More</PrimaryButton>
                    </div>
                  </div>
                  {/* Blog Image */}
                  <div className="mx-auto flex flex-col justify-center order-1 md:order-2">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="rounded-3xl xl:h-80"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        

        {/* Navigation Arrows (Outside the Slider Div) */}
        <button
          onClick={prevSlide}
          className={`absolute top-1/2 -left-6 md:mt-12 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg text-gray-700 ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-110"
          } sm:block hidden`} // Show on desktop and larger screens
          disabled={currentIndex === 0}
          aria-label="Previous slide"
        >
          <FaArrowLeft className="text-2xl" />
        </button>

        <button
          onClick={nextSlide}
          className={`absolute top-1/2 -right-6 md:mt-12 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg text-gray-700 ${
            currentIndex === maxPages - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-110"
          } sm:block hidden`} // Show on desktop and larger screens
          disabled={currentIndex === maxPages - 1}
          aria-label="Next slide"
        >
          <FaArrowRight className="text-2xl" />
        </button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
