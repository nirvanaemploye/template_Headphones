import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import Cards from "../../assets/credit-cards.webp";
import { FaMapLocation } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary pt-12 pb-8 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* company details section  */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold uppercase">Playing</h1>
              <p className="text-sm max-w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
                ratione quidem libero, praesentium ab atque? Quidem maxime,
                numquam dolores
              </p>
              <div>
                <p className="flex items-center gap-2">
                  <FaPhone />
                  +1 234 567 890
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <FaMapLocation /> Surat, Gujrat
                </p>
              </div>
            </motion.div>
            {/* footer Links Section  */}
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }} className="space-y-6">
              <h1 className="text-3xl font-bold">Quick Links</h1>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            {/* social Link sectiion  */}
            <motion.div initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }} className="space-y-6">
              <h1 className="text-3xl font-bold">Follow Us</h1>
              <div className="flex items-center gap-3">
                <FaFacebook className="text-3xl hover:scale-110 duration-300" />
                <FaInstagram className="text-3xl hover:scale-110 duration-300" />
                <FaTelegram className="text-3xl hover:scale-110 duration-300" />
                <FaGoogle className="text-3xl hover:scale-110 duration-300" />
              </div>
              <div className="space-y-2">
                <p>Payment Method</p>
                <img src={Cards} alt="" className="w-[80%]" />
              </div>
            </motion.div>
          </div>
          {/* Copyright section  */}
          <motion.p initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }} className="text-center text-white mt-8 border-t-2 pt-8">
            © 2024. All Rights Reserved || The Coding Journey
          </motion.p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
