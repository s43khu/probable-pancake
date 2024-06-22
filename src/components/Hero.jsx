import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ff3535]" />
          <div className="w-1 sm:h-80 h-40 red-gradient animate-glow" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-[#ff4747] animate-glow-text"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0px 0px 8px #ff4747",
                    "0px 0px 16px #ff4747",
                    "0px 0px 24px #ff4747",
                    "0px 0px 16px #ff4747",
                    "0px 0px 8px #ff4747",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
              >
                Abhi
              </motion.span>
            </motion.span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a passionate developer, Loves <br className="sm:block hidden" />
            to play with JS.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
  animate={{
    y: [0, 24, 0],
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    repeatType: "loop",
  }}
  className="w-3 h-3 rounded-full mb-1 animate-glow"
  style={{ backgroundColor: '#ffffff' }}
/>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
