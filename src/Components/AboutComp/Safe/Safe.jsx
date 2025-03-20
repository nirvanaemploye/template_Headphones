import { FaVolumeHigh } from "react-icons/fa6";
import SafeImg from "../../../assets/AboutCompImg/AboutHero/SafeImg.png";
import { FaDharmachakra, FaPencilRuler } from "react-icons/fa";
import { BiSolidMedal } from "react-icons/bi";

const features = [
  {
    icon: (
      <FaVolumeHigh className="text-primary bg-primary/10 text-5xl p-3 rounded-xl" />
    ),
    text: "Volume Limitation",
  },
  {
    icon: (
      <FaDharmachakra className="text-primary bg-primary/10 text-5xl p-3 rounded-xl" />
    ),
    text: "Safe Listening Technology",
  },
  {
    icon: (
      <FaPencilRuler className="text-primary bg-primary/10 text-5xl p-3 rounded-xl" />
    ),
    text: "Comfortable Design",
  },
  {
    icon: (
      <BiSolidMedal className="text-primary bg-primary/10 text-5xl p-3 rounded-xl rotate-180" />
    ),
    text: "High-Quality Audio at Lower Volumes",
  },
];

const Safe = () => {
  return (
    <section className="py-32">
      <div className="container text-ellipsis">
        <div className=" grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center">
            <img src={SafeImg} alt="" className="w-full" />
          </div>
          <div className="flex flex-col justify-center space-y-3 px-3 xl:px-16 py-14">
            <h1 className="text-2xl 2xl:text-3xl font-bold">
              Safe Listening, Superior Sound.
            </h1>
            <p className="text-gray-600 text-lg leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </p>
            <div className="flex flex-col space-y-4 pt-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-black/80"
                >
                  {feature.icon}
                  <span className="font-semibold text-lg ">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safe;
