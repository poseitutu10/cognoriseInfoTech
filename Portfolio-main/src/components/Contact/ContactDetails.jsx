import { useState } from "react";
import side from "../../assets/side.webp";
import { motion } from "framer-motion";

const ContactDetails = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <div className="about py-5  mx-5 md:mx-24 lg:mx-32 xl:mx-40 h-screen">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              damping: 20,
              delay: 0.3,
              duration: 0.5,
            }}
          >
            <h2 className="text-5xl font-semibold py-12 text-center">
              CONTACT <span className="text-[#26A3FF]">ME</span>
            </h2>
          </motion.div>
          <div className="contact-main flex gap-10">
            <motion.div
              className="left w-1/2 hidden lg:block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                damping: 20,
                delay: 0.3,
                duration: 0.5,
              }}
            >
              <img
                src={side}
                alt="side-photo"
                className="rounded-xl w-full h-full"
              />
            </motion.div>
            <motion.div
              className="right border lg:w-1/2 rounded-xl p-5 w-full "
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                damping: 20,
                delay: 0.3,
                duration: 0.5,
              }}
            >
              <h3 className="text-3xl font-semibold py-5">Send me a message</h3>
              <form
                className="flex flex-col gap-4"
                method="POST"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="border p-3 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="border p-3 rounded-md"
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="border p-3 rounded-md"
                />
                <button
                  className="w-full bg-[#26A3FF] text-white p-3 rounded-md hover:bg-[#26A3FF] transition duration-300 ease-in"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
