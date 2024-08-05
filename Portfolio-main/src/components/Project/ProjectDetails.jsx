import projectTwo from "../../assets/pro2.png";
import projectOne from "../../assets/pro1.png";
import projectThree from "../../assets/pro3.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  return (
    <>
      <div className="projects py-5  mx-5 md:mx-24 lg:mx-32 xl:mx-40 ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            damping: 20,
            delay: 0.5,
            duration: 0.5,
          }}
        >
          <h2 className="text-4xl font-semibold py-12 text-center">
            <span className="text-[#26A3FF]">MY</span> PROJECTS
          </h2>
        </motion.div>
        <motion.div
          className="projects flex justify-center items-center lg:p-20 gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            damping: 20,
            delay: 0.8,
            duration: 0.5,
          }}
        >
          <div className="grid grid-cols-1 xl:grid-cols-3 xl:grid-cols-[repeat(3, 1fr)] gap-5 ">
            <div className="project1  border  border-blue-400 rounded-xl bg-blue-400 cursor-pointer hover:transform hover:scale-105 transition duration-300 ease-in">
              <Link
                to="https://github.com/poseitutu10/SWE-Project"
                target="_blank"
              >
                <img
                  src={projectTwo}
                  alt="project-1"
                  className="w-full rounded-tr-xl rounded-tl-xl h-4/5"
                />
                <div className="h-1/5 flex justify-center items-center ">
                  <h3 className="text-xl text-center m-5 font-semibold ">
                    InternHub
                  </h3>
                </div>
              </Link>
            </div>
            <div className="project1  border  border-blue-400 rounded-xl bg-blue-400 cursor-pointer hover:transform hover:scale-105 transition duration-300 ease-in">
              <Link
                to="https://github.com/poseitutu10/Assignment1"
                target="_blank"
              >
                <img
                  src={projectOne}
                  alt="project-2"
                  className="w-full rounded-tr-xl rounded-tl-xl h-4/5"
                />
                <div className="h-1/5 flex justify-center items-center ">
                  <h3 className="text-xl text-center m-5 font-semibold ">
                    RemoteWork
                  </h3>
                </div>
              </Link>
            </div>
            <div className="project1  border  border-blue-400 rounded-xl bg-blue-400 cursor-pointer hover:transform hover:scale-105 transition duration-300 ease-in">
              <Link
                to="https://github.com/poseitutu10/Travel--Solo-Project"
                target="_blank"
              >
                <img
                  src={projectThree}
                  alt="project-3"
                  className="w-full rounded-tr-xl rounded-tl-xl h-4/5"
                />
                <div className="h-1/5 flex justify-center items-center ">
                  <h3 className="text-xl text-center m-5 font-semibold ">
                    TravelTour
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectDetails;
