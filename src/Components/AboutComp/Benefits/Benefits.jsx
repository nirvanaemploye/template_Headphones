import Benefit1 from "../../../assets/AboutCompImG/BenefitsImg1.png";
import Benefit2 from "../../../assets/AboutCompImG/BenefitsImg2.png";

const benefits = [
  "Immersive Sound Experience",
  "Superior Sound Isolation",
  "Personalized Listening Experience",
  "Enhanced Audio Quality",
];

const Benefits = () => {
  return (
    <section className="bg-gray-50">
      <div className="container py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Image with Hover Effect */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src={Benefit1} alt="Immersive Sound" className="w-full h-auto" />
            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-white text-lg lg:text-3xl font-semibold">Experience the Best</h1>
            </div>
          </div>

          {/* Right Static Image */}
          <div className="relative group flex flex-col justify-center">
            <img src={Benefit2} alt="Superior Sound Isolation" className="w-full h-auto rounded-lg shadow-lg" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-white text-lg lg:text-3xl font-semibold xl:w-1/2 text-center ">Elevate Your Business With Exceptional Sound</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="pb-24 bg-white text-center px-6 md:px-24 lg:px-52">
        <h2 className="text-3xl font-bold mb-16">Benefits of Headphone Listening</h2>

        <div className="relative flex justify-center items-center">
          {/* Dashed Line */}
          <div className="absolute w-full border-t border-dashed border-gray-400 top-2 left-0 hidden md:block" />

          {/* Benefit Dots and Text */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 w-full max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center space-y-3">
                <div className="w-5 h-5 bg-primary rounded-full border-4 border-white shadow-lg relative z-10" />
                <p className="text-gray-700 text-sm md:text-base font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
