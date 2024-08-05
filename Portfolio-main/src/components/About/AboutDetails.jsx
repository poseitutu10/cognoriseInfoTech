// import Profile from "../Home/Profile";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutDetails = () => {
  return (
    <>
      <div className="about py-10  mx-5 md:mx-24 lg:mx-32 xl:mx-40">
        <div>
          <h2 className="text-5xl font-semibold py-12 text-center">
            ABOUT <span className="text-[#26A3FF]">ME</span>
          </h2>
        </div>
        {/* <div className="sm:hidden">
          <Profile />
        </div> */}
        <div>
          <h2 className="text-xl font-semibold mb-5 text-[#26A3FF]">
            A bit about me
          </h2>
          <p className="">
            I am a self-taught web developer, resilience in nature, focused on
            utilizing my acquired technical knowledge and skills like the
            popular JavaScript library, React to build an amazing UI, high
            performance, and responsive website, and also making use of the CSS
            framework, TailwindCSS for simplicity. I take into consideration the
            user experience while writing reusable and efficient code. In
            addition, creating unleashing animation for also enhancing user
            experience
          </p>
          <h2 className="text-xl font-semibold my-5 text-[#26A3FF]">
            Tools and Technology Stacks
          </h2>
          <p className="">
            Making use of varieties of tools and technology enhances my ability
            to provide responsive and efficient website for users using
            different devices of their choice
          </p>
          <div className="tech-stack my-5">
            <div className="grid grid-cols-3 grid-cols-[repeat(1fr, 3)] gap-5">
              <div className="bg-blue-400 text-white p-3 rounded-md text-sm font-semibold flex gap-3 items-center">
                <FaReact size={25} />
                React
              </div>
              <div className="bg-blue-400 text-white p-3 rounded-md text-sm font-semibold flex gap-3 items-center">
                <IoLogoJavascript size={25} />
                JavaScript
              </div>
              <div className="bg-blue-400 text-white p-3 rounded-md text-sm font-semibold flex gap-3 items-center">
                <RiTailwindCssFill size={25} />
                Tailwind
              </div>
              <div className="bg-blue-400 text-white p-3 rounded-md text-sm font-semibold flex gap-3 items-center">
                <IoIosGitBranch size={25} />
                Git
              </div>
              <div className="bg-blue-400 text-white p-3 rounded-md text-sm font-semibold flex gap-3 items-center">
                <FaGithub size={25} />
                GitHub
              </div>
              <div className="bg-blue-400 text-white p-3 rounded-md text-sm font-semibold flex gap-3 items-center">
                <FaHtml5 size={25} />
                HTML5
              </div>
              <div className="bg-blue-400 text-white p-3 rounded-md text-sm font-semibold flex gap-3 items-center">
                <IoLogoCss3 size={25} />
                CSS3
              </div>
            </div>
          </div>
          <div className="education">
            <h2 className="text-xl font-semibold mt-8 text-[#26A3FF]">
              Education
            </h2>
            <div className="school">
              <h2 className="text-lg font-semibold">
                BSc. Computer Engineering
              </h2>
              <p className="">
                Kwame Nkrumah University of Science and Tecnology &#x2022; 2020
                - Present
              </p>
            </div>
          </div>
          <div className="experience">
            <h2 className="text-xl font-semibold mt-8 text-[#26A3FF]">
              Experience
            </h2>
            <div className="intern">
              <h2 className="text-xl font-semibold">Frontend Intern</h2>
              <p className=" ">
                CognoRise InfoTech &#x2022; July 2024 - Present
              </p>
              <ul className="list-item text-sm my-3">
                <li>- Worked using Git and GitHub as version control</li>
                <li>- Given the chance to build real world project</li>
                <li>- Sharpened my React foundation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDetails;
