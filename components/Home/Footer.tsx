import { FaDribbble, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../Helper/Logo";

const Footer = () => {
  return (
    <div id="contacts" className="py-16 dark:bg-gray-950">
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Logo />
          <p className="mt-5 font-semibold text-gray-700 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            corrupti in dolorem doloremque perferendis sint.
          </p>
          <div className="flex items-center space-x-4 mt-6">
            <FaFacebook />
            <FaTwitter />
            <FaDribbble />
            <FaYoutube />
          </div>
        </div>

        <div className="space-y-5">
          <h2 className="text-lg font-bold">Company</h2>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-900">
            About Us
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-900">
            Services
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-900">
            Our Customer
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-900">
            Portfolio
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-900">
            Blocks
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-lg font-bold">Resources</h2>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-900">
            Blog
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-900">
            Webinar & Events
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-900">
            Podcast
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-900">
            E-book & Guides
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Contact Us</h2>
          <div className="mt-6">
            <h2 className="text-sm text-gray-600 dark:text-gray-300">
              Our Mobile Number
            </h2>
            <h2 className="text-base font-bold text-blue-950 dark:text-gray-300 mt-1">
              +123 4567890
            </h2>
          </div>
          <div className="mt-6">
            <h2 className="text-sm text-gray-600 dark:text-gray-300">
              Our Email Address
            </h2>
            <h2 className="text-base font-bold text-blue-950 dark:text-gray-300 mt-1">
              example@gmail.com
            </h2>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">
          Copyright @ 2025. All rights reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social : </span>
          <span className="text-gray-500 hover:text-gray-600">
            <FaFacebook />
          </span>
          <span className="text-gray-500 hover:text-gray-600">
            <FaTwitter />
          </span>
          <span className="text-gray-500 hover:text-gray-600">
            <FaYoutube />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
