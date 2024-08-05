import { AllOverContext } from "../../utils/OverallContext";
import { useContext, useState } from "react";
import Header from "../Home/Header";
import Themer from "../Home/Themer";
import ContactDetails from "./ContactDetails";
import Footer from "../Home/Footer";
import Dropdown from "../Home/Dropdown";

const Contact = () => {
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
        <ContactDetails />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
