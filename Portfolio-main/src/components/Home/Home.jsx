import lareProfile from "./../../assets/fullProfile.png";
import Header from "./Header";
import Direct from "./Direct";
import { motion } from "framer-motion";
import Profile from "./Profile";
import { useContext } from "react";
import { AllOverContext } from "../../utils/OverallContext";
import AboutDetails from "../About/AboutDetails";
import Themer from "./Themer";
import ContactDetails from "../Contact/ContactDetails";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Footer from "./Footer";
import ProjectDetails from "../Project/ProjectDetails";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Home = () => {
  const { isDark } = useContext(AllOverContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`main relative w-full ${
          isDark ? "bg-[#313131] text-white" : "bg-white text-black"
        }`}
      >
        <Header isDark={isDark} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Themer />
        <Dropdown isOpen={isOpen} />
        <div className="main flex justify-evenly items-center">
          <div className="main main flex flex-col items-center gap-5 justify-center w-full lg:flex-row">
            <motion.div
              className="img-cont  lg:m-20 lg:rounded-xl flex justify-center lg:bg-[#fff0db] relative px-5 lg:shadow-md"
              initial={{ scale: 0.8, opacity: 0, x: -100 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                delay: 0.1,
                duration: 1,
              }}
            >
              <img
                src={lareProfile}
                alt="my-profile"
                className="hidden w-[500px] h-[600px]  lg:block"
              />
            </motion.div>
            <Profile />

            <motion.div
              className="description flex flex-col justify-center items-center gap-5 lg:w-2/5 lg:items-start p-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                damping: 15,
                delay: 0.4,
                duration: 0.5,
              }}
            >
              <div className="text-center flex flex-col gap-5 lg:justify-start lg:items-start">
                <h1 className="text-7xl">Hello,</h1>
                <h2 className="text-3xl font-bold text-[#26A3FF] font-serif">
                  I AM PHINEHAS OSEI-TUTU
                </h2>
                <h2 className="text-3xl font-bold tracking-tight  ">
                  A FRONTEND DEVELOPER
                </h2>
              </div>
              <p className="text-lg text-center sm:mx-[10%]  lg:text-start lg:mx-0 lg:max-w-xl">
                {/* I am a frontend developer, resilience in nature,
                focused on utilizing my technical skills like the popular
                JavaScript library, React to build an amazing UI, high
                performance, and responsive website, and also making use of the
                CSS framework, TailwindCSS for simplicity{" "} */}
              </p>
              <Direct content="MORE ABOUT ME" />
            </motion.div>
          </div>
        </div>
        <motion.div
          className="flex justify-center items-center gap-3 my-5 mx-40 "
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportLeave={{ opacity: 0 }}
          transition={{
            duration: 1.3,
            ease: "easeIn",
            repeat: Infinity,
          }}
        >
          <MdOutlineKeyboardDoubleArrowDown size={25} />
          <h2 className="text-sm md:text-md">Scroll down</h2>
        </motion.div>

        <div className="about-me">
          <AboutDetails />
          <ProjectDetails />
          <ContactDetails />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
