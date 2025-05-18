import BoxText from "@/components/Helper/BoxText";
import Slider from "./Slider";

const BestSelling = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-950">
      <div className="text-center">
        <div className="mx-auto w-fit mb-4">
          <BoxText text="Best Selling" />
        </div>
        {/* heading */}
        <h2 className="text-xl md:text-3xl font-bold">
          Our Best Selling Books
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eius
          deserunt consequatur minima ullam consequatur minima u at corporis
          quam quis officiis.
        </p>
      </div>

      {/* slider */}
      <div className="w-[90%] md:w-[80%] mx-auto mt-16">
        <Slider />
      </div>
    </div>
  );
};

export default BestSelling;
