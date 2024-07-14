import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";
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

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const confettiFire=()=>{
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
 
    const randomInRange = (min, max) =>
      Math.random() * (max - min) + min;
 
    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
 
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
 
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  }

  const validate = () => {
    let tempErrors = {};
    if (!form.from_name) tempErrors.from_name = "Name is required";
    if (!form.email) tempErrors.email = "Email is required";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) tempErrors.email = "Email is not valid";
    if (!form.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

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
          confettiFire();
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
              {errors.from_name && <span className="text-red-500">{errors.from_name}</span>}
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
              {errors.email && <span className="text-red-500">{errors.email}</span>}
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
              {errors.message && <span className="text-red-500">{errors.message}</span>}
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
