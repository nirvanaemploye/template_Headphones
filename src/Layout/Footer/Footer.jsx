import { FaFacebookF, FaGoogle } from "react-icons/fa";
import FooterBg from "./../../assets/FooterBg.png";
import Cards from "./../../assets/PaymentCards.png";
import { motion } from "framer-motion";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { IoCall, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import { UpdateFollower } from "react-mouse-follower";

const FooterBackground = {
  backgroundImage: `url(${FooterBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top",
  height: "100%",
};

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Categories",
    link: "/categories",
  },
  {
    id: 4,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
];

const Footer = () => {
  return (
    <>
      <footer style={FooterBackground} className="xl:pt-28 pt-20 text-white">
        <div className="lg:container px-8">
          {/* main container */}
          <div className="md:flex justify-between items-center md:space-y-0 space-y-14 mb-10 sm:mb-0">
            {/* company details section  */}
            <div className=" space-y-5 lg:w-4/12 md:w-6/12 ">
              <h1 className="lg:text-5xl text-3xl font-bold">Logo</h1>
              <p className="leading-8 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci quibusdam quis explicabo eum a qui commodi vero
                laboriosam. Natus ipsa mollitia quasi laborum at omnis
                consequatur.
              </p>
              <div className="flex space-x-5">
                <a
                  href="/"
                  className="border text-secondary rounded-full p-2 text-xl"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="/"
                  className="border text-secondary rounded-full p-2 text-xl"
                >
                  <AiFillInstagram />
                </a>
                <a
                  href="/"
                  className="border text-secondary rounded-full p-2 text-xl"
                >
                  <RiWhatsappFill />
                </a>
                <a
                  href="/"
                  className="border text-secondary rounded-full p-2 text-xl"
                >
                  <FaGoogle />
                </a>
              </div>
            </div>

            {/* payment cards section  */}
            <div className="lg:w-3/12 lg:ps-5">
              <div className="space-y-5 ">
                <h1 className="lg:text-3xl text-2xl font-bold">Get in Touch</h1>
                <div className="space-y-3">
                  <p className="flex items-center gap-x-4">
                    <span>
                      <MdLocationPin className="text-secondary text-xl" />
                    </span>
                    Lorem Ipsum is simply dummy text
                  </p>
                  <p className="flex items-center gap-x-3">
                    <span>
                      <IoCall className="text-secondary text-xl" />
                    </span>
                    +91 12345 56894
                  </p>
                  <p className="flex items-center gap-x-3">
                    <span>
                      <IoMail className="text-secondary text-xl" />
                    </span>
                    nirvanatechlabs123@gmail.com
                  </p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <p className="text-xl font-semibold">Payment Method</p>
                <img src={Cards} alt="" className="w-48 xl:w-full" />
              </div>
            </div>
          </div>
          {/* Quick Link  */}
          <div className="hidden md:flex flex-col items-center justify-center ">
            <h1 className="lg:text-3xl text-2xl font-bold">Quick Link</h1>
            {/* Menu section */}
            <div className="py-5 mb-3">
              <ul className="flex items-center gap-4">
                {NavbarMenu.map((item) => (
                  <li key={item.id}>
                    <UpdateFollower
                      mouseOptions={{
                        backgroundColor: "White",
                        zIndex: 999,
                        followSpeed: 1.5,
                        scale: 3,
                        mixBlendMode: "difference",
                      }}
                    >
                      <Link
                        to={item.link}
                        className="inline-block text-sm py-2 px-3 uppercase font-semibold"
                      >
                        {item.title}
                      </Link>
                    </UpdateFollower>
                  </li>
                ))}
                <li>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 999,
                      followSpeed: 1.5,
                      scale: 5,
                      mixBlendMode: "difference",
                    }}
                  ></UpdateFollower>
                </li>
              </ul>
            </div>
          </div>
          {/* Copyright section  */}
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className="text-[12px] text-center text-white border-t border-white/20 p-3"
          >
            © 2025 TCJ. All rights reserved
          </motion.p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
