import UpgradeBg from "../../../assets/HomeCompImg/UpgradeBg.png";
import UpgradHead from "../../../assets/HomeCompImg/UpgradHead.png";
import PrimaryButton from "../../../Layout/PrimaryButton/PrimaryButton";

const Upgrade = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${UpgradeBg})` }}
    >
      <div className=" py-20 text-white px-4">
        <div className="container flex flex-col-reverse lg:flex-row-reverse items-center gap-6 mt-6">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img src={UpgradHead} alt="Headphone" className="scale-105" />
          </div>

          {/* Text + List Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-center lg:text-left space-y-8">
            <h1 className="text-[28px] xl:text-5xl font-bold leading-snug xl:w-11/12 w-full">
              Upgrade Your Music with the Best Headphones!
            </h1>
            <ul className="mt-6 space-y-3 xl:text-lg text-sm mx-auto lg:mx-0 xl:text-left ">
              <li className="marker:text-secondary list-disc list-inside">
                Lorem Ipsum is simply dummy text of the printing
              </li>
              <li className="marker:text-secondary list-disc list-inside">
                Lorem Ipsum is simply dummy text of the printing
              </li>
              <li className="marker:text-secondary list-disc list-inside">
                Lorem Ipsum is simply dummy text of the printing
              </li>
              <li className="marker:text-secondary list-disc list-inside">
                Lorem Ipsum is simply dummy text of the printing
              </li>
              <li className="marker:text-secondary list-disc list-inside">
                Lorem Ipsum is simply dummy text of the printing
              </li>
            </ul>
            <PrimaryButton >Shope now</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upgrade;
