import React from "react";
import { motion } from "framer-motion";

const MySkill = ({ title, src }) => {
  return (
    <motion.div
      className="lg:w-1/6 sm:w-1/3 w-1/4 mx-4 cursor-pointer transition-all"
      whileHover={{ scale: 1.1 }}
    >
      <img src={src} alt={title} className="object-contain w-full" />
      <h3 className="md:text-lg text-base">{title}</h3>
    </motion.div>
  );
};

export default MySkill;
