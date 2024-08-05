import { useContext } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { AllOverContext } from "../../utils/OverallContext";

const Themer = () => {

  const {isDark, handleClick } = useContext(AllOverContext)
  return (
    <>
      {isDark ? (
        <MdOutlineLightMode
          size={30}
          className="bg-gray-200 p-2 w-10 h-10 rounded-full cursor-pointer fixed bottom-10 right-10 "
          onClick={handleClick}
        />
      ) : (
        <MdOutlineDarkMode
          size={30}
          className="bg-gray-200 p-2 w-10 h-10 rounded-full cursor-pointer fixed bottom-10 right-10"
  
          onClick={handleClick}
        />
      )}
    </>
  );
};

export default Themer;
