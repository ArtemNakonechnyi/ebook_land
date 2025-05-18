import Image from "next/image";
import { FaStar } from "react-icons/fa";

type Props = {
  name: string;
  role: string;
  image: string;
};

const ReviewCard = ({ name, role, image }: Props) => {
  return (
    <div>
      <div className="flex items-center space-x-6">
        <Image
          src={image}
          alt="User"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-400 w-[80%] ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam iure
        distinctio sint et mollitia provident, exercitationem non quam!
      </p>
      <div className="flex items-center mt-5">
        <FaStar className="text-yellow-500 w-5 h-5" />
        <FaStar className="text-yellow-500 w-5 h-5" />
        <FaStar className="text-yellow-500 w-5 h-5" />
        <FaStar className="text-yellow-500 w-5 h-5" />
        <FaStar className="text-yellow-500 w-5 h-5" />
      </div>
    </div>
  );
};

export default ReviewCard;
