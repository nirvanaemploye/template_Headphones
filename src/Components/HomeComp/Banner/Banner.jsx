import Backg1 from "../../../assets/HomeCompImg/Banner/Bannerbg1.png";
import Backg2 from "../../../assets/HomeCompImg/Banner/Bannerbg2.png";
import Backg3 from "../../../assets/HomeCompImg/Banner/Bannerbg3.png";
import headphone from "../../../assets/HomeCompImg/Banner/HeadPhone1.png";
import headphone2 from "../../../assets/HomeCompImg/Banner/HeadPhone2.png";
import PrimaryButton from "../../../Layout/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <section className="container mx-auto px-7 lg:px-24 py-32">
      <div className="">
        {/* Main Flex Row */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Main Banner (Background 1) */}
          <div
            className="flex flex-col sm:relative w-full 2xl:w-8/12 bg-no-repeat bg-center bg-cover lg:flex items-center text-white overflow-hidden rounded-xl lg:rounded-none"
            style={{ backgroundImage: `url(${Backg1})` }}
          >
            <div className="order-2 space-y-4 py-10 px-5 sm:py-12 sm:ps-8 lg:py-28 lg:px-10 z-10 text-center sm:text-left ">
              <h1 className="font-bold text-2xl md:text-4xl leading-tight">
                Buy Headphones Now!
              </h1>
              <p className="text-sm md:text-base w-12/12 sm:w-6/12 leading-6 md:leading-8 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s.
              </p>
              <PrimaryButton>Shop Now</PrimaryButton>
            </div>
            <img
              src={headphone}
              alt="Headphone"
              className="order-1  sm:absolute right-0 bottom-0 top-0 h-full object-contain max-w-[80%] lg:max-w-[65%] mx-auto "
            />
          </div>

          {/* Right Column with Two Stacked Banners */}
          <div className="w-full lg:w-4/12 grid grid-rows-2 gap-6">
            {/* Top Box (Background 2) */}
            <div
              className="relative p-5 md:p-9 bg-no-repeat bg-center bg-cover flex flex-col justify-between h-full text-white overflow-hidden rounded-xl lg:rounded-none"
              style={{ backgroundImage: `url(${Backg2})` }}
            >
              <div className=" w-9/12 z-10">
                <p className="pb-2 2xl:text-lg font-semibold 2xl:leading-7">
                  50% Discount on Wireless & Noise-Canceling Headphones!
                </p>
                <a href="#" className="underline font-medium">
                  Shop Now
                </a>
              </div>
              <img
                src={headphone2}
                alt="Headphone2"
                className="absolute right-0 sm:right-20 xl:right-0 bottom-0 h-[75%] object-contain max-w-[50%]"
              />
            </div>

            {/* Bottom Box (Background 3) */}
            <div
              className="relative p-5 md:p-9 bg-no-repeat bg-center bg-cover flex flex-col justify-between h-full text-white overflow-hidden rounded-xl lg:rounded-none"
              style={{ backgroundImage: `url(${Backg3})` }}
            >
              <div className=" w-9/12 z-10">
                <p className="pb-2 text-lg font-semibold leading-7">
                  50% Discount on Wireless & Noise-Canceling Headphones!
                </p>
                <a href="#" className="underline font-medium">
                  Shop Now
                </a>
              </div>
              <img
                src={headphone2}
                alt="Headphone2"
                className="absolute right-0 sm:right-20 xl:right-0 bottom-0 h-[75%] object-contain max-w-[50%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
