import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <motion.footer
        className="pb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          damping: 20,
          delay: 1,
          duration: 0.5,
        }}
      >
        <div className="flex justify-center flex-col gap-5">
          <p className="text-sm text-center">
            Designed by{" "}
            <Link to="https://www.linkedin.com/in/poseitutu10/">
              Phinehas Osei-Tutu
            </Link>
          </p>
          <p className="text-sm text-center">
            Copyright © 2024 All rights reserved
          </p>
        </div>
        <div className="flex justify-center gap-5 my-5">
          <Link to="https://www.linkedin.com/in/poseitutu10/">
            <img
              src="https://img.shields.io/badge/linkedin-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="linkedin"
            />
          </Link>
          <Link to="https://github.com/poseitutu10/Portfolio">
            <img
              src="https://img.shields.io/badge/github-100000?style=for-the-badge&logo=github&logoColor=white"
              alt="github"
            />
          </Link>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
