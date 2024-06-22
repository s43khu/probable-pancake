import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_9tng2tm",
        "template_cx5t1ar",
        formRef.current,
        "f4XmwJBzuaoHIDRT2"
      )
      .then(
        (result) => {
          setLoading(false);
          toast.success("Thank you. I will get back to you as soon as possible.");
          setForm({
            from_name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Something went wrong!");
        }
      );
  };

  return (
    <div className="relative xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl relative z-10"
        style={{ minHeight: "400px" }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gray-800 opacity-50 blur-md rounded-2xl"></div>

          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-4 relative z-10"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-gray-900 py-3 px-4 placeholder-gray-400 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-gray-900 py-3 px-4 placeholder-gray-400 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-gray-900 py-3 px-4 placeholder-gray-400 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-gray-900 py-3 px-6 rounded-lg text-white font-bold shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative z-0"
      >
        <EarthCanvas />
      </motion.div>

      {/* Foggy Background for Form */}
      <div className="absolute inset-0 bg-gray-800 opacity-20 blur-md rounded-2xl pointer-events-none"></div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
