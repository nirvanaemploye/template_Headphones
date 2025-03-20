import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import { useState } from "react";

const NavbarMenu = [
  { id: 1, title: "Home", link: "/home" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Categories", link: "/categories" },
  { id: 4, title: "Blog", link: "/blog" },
  { id: 5, title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-branDark text-white py-6 font-PtSans z-50 relative">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="container flex justify-between items-center"
        >
          {/* Logo Section */}
          <div>
            <a href="#" className="text-3xl font-bold uppercase">
              LOGO
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "White",
                      zIndex: 999,
                      followSpeed: 1.5,
                      scale: 5,
                      mixBlendMode: "difference",
                    }}
                  >
                    <Link
                      to={item.link}
                      className="inline-block text-sm py-2 px-3 uppercase transition"
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
                >
                  <button className="text-xl ps-14">
                    <SlEarphones />
                  </button>
                </UpdateFollower>
              </li>
            </ul>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="sm:hidden text-4xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <MdMenu />
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <ResponsiveMenu isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
