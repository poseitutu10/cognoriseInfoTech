import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Direct = ({ content }) => {
  return (
    <>
      <Link to="/about">
        <div className="about border border-[#26A3FF] flex justify-center items-center hover:bg-[#26A3FF] transition duration-300 rounded-full cursor-pointer hover:text-white ">
          <h2 className="px-5 font-bold">{content}</h2>

          <FaArrowRight className="rounded-full bg-[#26A3FF] p-2 w-10 h-full" />
        </div>
      </Link>
    </>
  );
};

export default Direct;
