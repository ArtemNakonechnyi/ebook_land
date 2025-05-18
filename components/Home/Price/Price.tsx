import BoxText from "@/components/Helper/BoxText";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-950">
      <div className="text-center">
        <div className="mx-auto w-fit mb-4">
          <BoxText text="Pricing" />
        </div>
        {/* heading */}
        <h2 className="text-xl md:text-3xl font-bold ">
          Our Best Pricing Plan
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eius
          deserunt minima u at corpois.
        </p>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          <PriceCard type="Basic" price="$29" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <PriceCard type="Advanced" price="$49" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <PriceCard type="Premium" price="$99" />
        </div>
      </div>
    </div>
  );
};

export default Price;
