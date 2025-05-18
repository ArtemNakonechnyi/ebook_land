import Image from "next/image";
import BoxText from "../Helper/BoxText";
import { BiCheck } from "react-icons/bi";

const About = () => {
  return (
    <div id="about" className="py-16 bg-gray-100 dark:bg-gray-950">
      <div className="w-[90%] md:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-5 gap-14 items-center">
        {/* image content */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          className="xl:col-span-2"
        >
          <Image
            src="/img/about.webp"
            alt="image"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
        {/* text content */}
        <div className="xl:col-span-3">
          {/* box text */}
          <BoxText text="About Us" />
          {/* heading  */}
          <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl my-6 text-gray-800 dark:text-gray-200 font-semibold">
            About This Best Selling Book
          </h1>
          {/* description */}
          <p className="text-sm md:text-base font-semibold text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in
            distinctio illo iusto quidem necessitatibus, blanditiis dolorem eius
            quia excepturi cupiditate veritatis officia accusamus ipsam autem
            mollitia.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-center space-x-2">
              <BiCheck className="text-orange-500 w-7 h-7" />
              <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm md:text-base ">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <BiCheck className="text-orange-500 w-7 h-7" />
              <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm md:text-base ">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <BiCheck className="text-orange-500 w-7 h-7" />
              <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm md:text-base ">
                Lorem ipsum dolor sit amet, consectetur tur adipisic
                adipisicing.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <BiCheck className="text-orange-500 w-7 h-7" />
              <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm md:text-base ">
                Lorem ipsum dolor sit amet, consectetur adipisicing tur
                adipisic.
              </p>
            </div>
          </div>
          {/* button`` */}
          <div className="mt-14">
            <a
              href="#_"
              className="relative  rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            >
              <span className="relative">Read More &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
