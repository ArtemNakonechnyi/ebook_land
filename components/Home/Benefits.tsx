import { BiBlock, BiLink, BiVideo } from "react-icons/bi";
import { MdEco } from "react-icons/md";
import BoxText from "../Helper/BoxText";
import Image from "next/image";

const benefits = [
  {
    title: "Cost-Effective Option",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, sit quia inventore ipsum dignissimos impedit eligendi!",
    icon: <BiVideo className="w-6 h-6 text-white" />,
  },
  {
    title: "Eco-Concious Choice",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, sit quia inventore ipsum dignissimos impedit eligendi!",
    icon: <MdEco className="w-6 h-6 text-white" />,
  },
  {
    title: "Enhanced Visibiliity",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, sit quia inventore ipsum dignissimos impedit eligendi!",
    icon: <BiBlock className="w-6 h-6 text-white" />,
  },
  {
    title: "Enhanced Convenience",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, sit quia inventore ipsum dignissimos impedit eligendi!",
    icon: <BiLink className="w-6 h-6 text-white" />,
  },
];

const Benefits = () => {
  return (
    <div id="benefits" className="py-16">
      <div className="py-16 px-4 w-[90%] md:w-[80%] mx-auto text-center">
        <div className="mx-auto w-fit mb-4">
          <BoxText text="Benefits" />
        </div>
        {/* heading */}
        <h2 className="text-xl md:text-3xl font-bold">
          Discover Your Benefits
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eius
          deserunt consequatur minima ullam at corporis quam quis officiis.
        </p>
        <div className="mt-16 grid grid-cols-1 xl:grid-cols-3 gap-6 items-center">
          {/* left side card */}
          <div className="grid gap-6 ">
            {benefits.slice(0, 2).map((benefit, index) => (
              <div
                data-aos="fade-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay={300 * index * 1000}
                key={index}
                className="p-6 bg-white dark:bg-blue-950 shadow-md rounded-xl text-left border border-gray-200 dark:border-none"
              >
                <div>
                  <div className="w-12 h-12 mb-4 rounded-full bg-orange-500 flex items-center justify-center flex-col">
                    <span className="text-3xl">{benefit.icon}</span>
                  </div>

                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* center image */}
          <div
            data-aos="flip-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            className="flex justify-center"
          >
            <Image
              alt="image"
              src="/img/read-more.webp"
              width={900}
              height={900}
              className="rounded-xl shadow-md"
            />
          </div>
          {/* right card */}
          <div className="grid gap-6 ">
            {benefits.slice(2).map((benefit, index) => (
              <div
                data-aos="fade-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay={300 * index * 100}
                key={index}
                className="p-6 bg-white dark:bg-blue-950 shadow-md rounded-xl text-left border border-gray-200 dark:border-none"
              >
                <div>
                  <div className="w-12 h-12 mb-4 rounded-full bg-orange-500 flex items-center justify-center flex-col">
                    <span className="text-3xl">{benefit.icon}</span>
                  </div>

                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* button */}
        <div className="mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 md:py-3 rounded-lg text-lg font-medium transition duration-300">
            Read More &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
