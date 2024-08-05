import profile from "./../../assets/mainpro.png";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <>
      <motion.div
        className="cotainer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 15,
          delay: 0.3,
          duration: 0.5,
        }}
      >
        <img
          src={profile}
          alt="my-profile"
          className="w-[200px] h-[200px] bg-[#252525] rounded-full mt-10 border border-gray-500 lg:hidden m-auto"
        />
      </motion.div>
    </>
  );
};

export default Profile;
