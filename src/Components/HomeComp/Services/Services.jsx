import { motion } from "framer-motion";
import Icon1 from "../../../assets/HomeCompImg/ServicePng/srv1.png";
import Icon2 from "../../../assets/HomeCompImg/ServicePng/srv2.png";
import Icon3 from "../../../assets/HomeCompImg/ServicePng/srv3.png";
import Icon4 from "../../../assets/HomeCompImg/ServicePng/srv4.png";
import { UpdateFollower } from "react-mouse-follower";

const fadeup = (delay) => ({
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeInOut" },
  },
});

const ServicesData = [
  {
    id: 1,
    title: "Free Shipping",
    icon: Icon1,
    desc: "Lorem ipsum dolor sit amet consectetur, quaerat ad praesentium illum, nobis ipsa rem?",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Warranty & Return",
    icon: Icon2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laborum veritatis tempora sequi.",
    delay: 0.4,
  },
  {
    id: 3,
    title: "24/7 Customer Support",
    icon: Icon3,
    desc: "Our support team is available anytime.Aspernatur laborum veritatis tempora sequi.",
    delay: 0.6,
  },
  {
    id: 4,
    title: "Secure Payment",
    icon: Icon4,
    desc: "Safe and secure transactions with us.",
    delay: 0.8,
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-32 font-poppins">
      <div className="container mx-auto max-w-[1400px] px-6">
        {/* Heading */}
        <motion.div variants={fadeup(0.2)}
          initial="hidden"
          whileInView="show" className="text-center pb-8">
          <h1 className="text-3xl font-bold">Services</h1>
          <p className="text-base mt-3 text-gray-400 w-96 mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ServicesData.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeup(item.delay)}
              initial="hidden"
              whileInView="show"
              className="flex flex-col items-center justify-center p-10 rounded-xl bg-white shadow-md hover:shadow-lg hover:border-primary border transition-all duration-100"
            >
              {/* Mouse Follower Only on Icons */}
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  scale: 3,
                  rotate: -720,
                  mixBlendMode: "darken",
                  backgroundElement: (
                    <div className="p-20">
                      <img
                        src={item.icon}
                        alt={`${item.title} Icon`}
                        className="h-20 w-20"
                      />
                    </div>
                  ),
                }}
              >
                <img src={item.icon} alt={item.title} className="h-20 mb-5" />
              </UpdateFollower>

              <h2 className="text-xl font-bold text-center">{item.title}</h2>
              <p className="text-sm text-gray-600 text-center">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
