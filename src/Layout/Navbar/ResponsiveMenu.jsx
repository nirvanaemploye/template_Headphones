import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navlink = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Categories", link: "/categories" },
  { id: 4, name: "Blog", link: "/blog" },
  { id: 5, name: "Contact", link: "/contact" },
];

const ResponsiveMenu = ({ isOpen, closeMenu }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Background Blur (Clicking it closes the menu) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md sm:hidden z-40"
            onClick={closeMenu} // Closes menu on click
          />

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[72px] w-screen text-center z-50 md:hidden bg-branDark text-white py-6 rounded-lg shadow-lg"
          >
            <ul className="text-lg font-semibold uppercase space-y-4">
              {navlink.map(({ id, name, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    className="inline-block px-6 py-2 transition hover:text-primary hover:underline"
                    onClick={closeMenu} // Clicking a menu item also closes menu
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
