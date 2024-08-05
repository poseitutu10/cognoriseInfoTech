import React, { useContext, useState } from "react";
import { AllOverContext } from "../../utils/OverallContext";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Themer from "../Home/Themer";
import ProjectDetails from "./ProjectDetails";
import Dropdown from "../Home/Dropdown";

const Project = () => {
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
        <Dropdown isOpen={isOpen} />
        <Themer />
        <ProjectDetails />
        <Footer />
      </div>
    </>
  );
};

export default Project;
