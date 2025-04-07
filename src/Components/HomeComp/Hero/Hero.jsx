import Headphone1 from "../../../assets/HomeCompImg/headphone.png";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    scale: 0.5,
    transition: {
      duration: 0.2, // Slightly longer for smoother exit
      ease: "easeInOut",
    },
  },
});

const Hero = () => {
  return (
    <>
      <section className="bg-branDark text-white font-varela">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[550px] xl:min-h-[700px] ">
          {/*----- Headphone info------------ */}
          <div className="order-2 sm:order-1 flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-4 gap-y-10 md:text-left text-center">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "White",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.div
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit" // Ensure exit animation is defined
                    className="text-3xl lg:text-6xl font-bold font-varela py-2"
                  >
                    <h1>Find Your Perfect Headphone</h1>{" "}
                  </motion.div>
                </UpdateFollower>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80 py-2"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae iusto minima ad ut id eos iusto minima ad ut id
                    eos ad ut id eos
                  </p>
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    rotate: -720,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={Headphone1} />
                      </div>
                    ),
                  }}
                >
                  <motion.PrimaryButton
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="w-full md:w-auto bg-primary text-white rounded-lg lg:py-3 lg:px-8 py-2 px-4   font-semibold text-base lg:mx-0  lg:mb-0 "  
                  >
                    Buy & Listen
                  </motion.PrimaryButton>
                </UpdateFollower>
              </AnimatePresence>
            </div>
          </div>

          {/* Headphone image */}
          <div className="flex flex-col justify-end items-center order-1 sm:order-2">
            <AnimatePresence mode="wait">
              <motion.img
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 100,
                  transition: { duration: 0.2 },
                }}
                src={Headphone1}
                alt="Headphone"
                className="w-[300px] md:w-[400px] xl:w-[550px]"
              />
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
