import { useContext, useState } from "react";

import Header from "../Home/Header";
import Dropdown from "../Home/Dropdown";
import Themer from "../Home/Themer";
import { AllOverContext } from "../../utils/OverallContext";
import AboutDetails from "./AboutDetails";
import Footer from "../Home/Footer";

const About = () => {
  const { isDark } = useContext(AllOverContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`main relative w-full ${
          isDark ? "bg-[#313131] text-white" : "bg-white text-black"
        } m-auto`}
      >
        <Header isDark={isDark} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Themer />
        <Dropdown isOpen={isOpen} />
        <AboutDetails />
        <Footer />
      </div>
    </>
  );
};

export default About;
