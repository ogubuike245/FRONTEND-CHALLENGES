import React from "react";
import { motion } from "framer-motion";

const Feature = ({ imageSrc, title, description, isActive }) => {
  return (
    <motion.article
      className={`feature ${isActive ? "active" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="image">
        <img src={imageSrc} alt="" />
      </div>
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
        <button>More Info</button>
      </div>
    </motion.article>
  );
};

export default Feature;
