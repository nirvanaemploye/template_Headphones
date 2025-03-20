import { AiFillInstagram } from "react-icons/ai";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaGoogle,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactSection = () => {
  return (
    <section className="xl:py-72 2xl:py-80 lg:py-32 py-10 bg-gray-100 flex justify-center    ">
      <div className="lg:absolute xl:top-3/4 xl:mt-6 2xl:top-2/3 2xl:mt-8 bg-white shadow-lg rounded-3xl  lg:m-24  grid grid-cols-1 md:grid-cols-2">
        {/* Left Section */}
        <div className="space-y-7 2xl:p-16 xl:p-12 p-8 bg-gray-50 rounded-l-3xl container ">
          <h2 className="text-4xl font-bold">Get in touch</h2>
          <p className="text-gray-600 md:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 ">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-primary text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Head Office</h4>
                <p className="text-gray-600 text-sm">
                  Lorem Ipsum is simply dummy text
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-primary text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Email Us</h4>
                <p className="text-gray-600 text-sm">
                  Lorem Ipsum is simply dummy text
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhone className="text-primary text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Contact Us</h4>
                <p className="text-gray-600 text-sm">
                  Lorem Ipsum is simply dummy text
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="font-semibold mb-2 text-lg">Follow Us:</h4>
            <div className="flex space-x-4 text-primary text-4xl">
              <FaFacebookF className="cursor-pointer hover:text-blue-700 border-2 rounded-full border-primary p-2" />
              <AiFillInstagram className="cursor-pointer hover:text-pink-500 border-2 rounded-full border-primary p-2" />
              <IoLogoWhatsapp className="cursor-pointer hover:text-green-500 border-2 rounded-full border-primary p-2" />
              <FaGoogle className="cursor-pointer hover:text-red-500 border-2 rounded-full border-primary p-2" />
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="space-y-6 2xl:p-16 xl:p-12 p-8">
          <h2 className="text-4xl font-bold ">Send us message</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2">
              Name
              <input
                type="text"
                placeholder="Name"
                className="rounded-lg bg-gray-50 p-2 input-style"
              />
            </label>
            <label className="flex flex-col gap-2">
              Category
              <input
                type="text"
                placeholder="Category"
                className="rounded-lg bg-gray-50 p-2 input-style"
              />
            </label>
            <label className="flex flex-col gap-2">
              Phone
              <input
                type="text"
                placeholder="Phone"
                className="rounded-lg bg-gray-50 p-2 input-style"
              />
            </label>
            <label className="flex flex-col gap-2">
              Email
              <input
                type="email"
                placeholder="Email"
                className="rounded-lg bg-gray-50 p-2 input-style"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            Message
            <textarea
              placeholder="Message"
              className="input-style w-full h-24 p-3 bg-gray-50"
            ></textarea>
          </label>
          <button className="w-full bg-primary text-white font-semibold py-3 rounded-full hover:bg-white hover:text-primary border border-primary duration-500 transition">
            Submit
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
