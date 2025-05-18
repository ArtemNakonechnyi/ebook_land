import BoxText from "@/components/Helper/BoxText";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <div id="review" className="py-16">
      <div className="text-center">
        <div className="mx-auto w-fit mb-4">
          <BoxText text="Review" />
        </div>
        {/* heading */}
        <h2 className="text-xl md:text-3xl font-bold">Our Success Stories</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eius
          deserunt consequt corporis quam quis officiis.
        </p>
      </div>
      {/* slider */}
      <div className="w-[80%] mx-auto mt-16">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Review;
