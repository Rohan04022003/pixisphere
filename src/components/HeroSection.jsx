import React from "react";
import SmartSuggestion from "./SmartSuggestion";
import search from "../assets/search.svg";
import close from "../assets/close.svg";
import { usePhotographer } from "../context/PhotographerContextProvider";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const HeroSection = () => {
  const { searchValue, setSearchValue } = usePhotographer();

  // Common fade-up animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: customDelay },
    }),
  };

  return (
    <header className="flex flex-col gap-4 items-center py-5 lg:px-16 md:px-10 sm:px-4 px-2 bg-gradient-to-r from-[#7728bc] via-[#d62ace] to-[#f71a88] text-white">
      <motion.h2
        className="text-4xl text-center font-semibold sm:block hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
      >
        Discover Amazing Photographers
      </motion.h2>

      <motion.p
        className="text-center text-lg sm:block hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0.15}
      >
        Connect with professional photographers for maternity, newborn, wedding,
        and special occasion shoots
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0.3}
        className="w-full flex justify-center"
      >
        <SmartSuggestion />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0.3}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center gap-2 bg-white rounded-xl lg:w-1/2 w-full md:p-4 p-3"
      >
        <img src={search} alt="search" className="w-5" />
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          className="border placeholder:text-gray-400 lg:text-lg text-base text-gray-800 outline-none border-none w-full"
          placeholder="Search by name, location, or tag..."
        />
        <img
          onClick={() => setSearchValue("")}
          src={close}
          alt="search"
          className={`w-5 cursor-pointer ${
            searchValue.length > 2 ? "block" : "hidden"
          }`}
        />
      </motion.div>
    </header>
  );
};

export default HeroSection;
