import { BiSolidMedal } from "react-icons/bi";
import { FaMedal } from "react-icons/fa";
import { PiBatteryChargingVerticalFill, PiSealCheckFill } from "react-icons/pi";

const features = [
    {
      icon: FaMedal, // You can replace with an actual icon component
      title: "Premium Quality",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
    },
    {
      icon: PiBatteryChargingVerticalFill,
      title: "Long-Lasting Battery Life",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
    },
    {
      icon: PiSealCheckFill,
      title: "Certified Quality",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
    },
    {
      icon: BiSolidMedal,
      title: "100% Satisfaction Guarantee",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
    },
  ];

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-gray-100">
      <div className="container text-ellipsis">
        {/* heading Section  */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold ">Why Choose Us?</h2>
          <p className="sm:w-96 mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </p>
        </div>

        {/* Card Section  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="py-8 flex flex-col items-center justify-center text-center space-y-3"
              >
                <feature.icon className="text-6xl text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 px-8 leading-7">{feature.description}</p>
              </div>
            ))}
        </div>
        


      </div>
    </section>
  );
};

export default WhyChooseUs;
