import { useState } from "react";
import { motion } from "framer-motion";

const FaqItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <motion.li
      className={`faq-question`}
      onClick={handleToggle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="content">
        <span className="question">{question}</span>
        <motion.p
          className={`answer ${isActive ? "active" : ""}`}
          initial={{ height: 0 }}
          animate={{ height: isActive ? "120px" : 0 }}
          transition={{ duration: 0.3 }}
        >
          {answer}
        </motion.p>
      </div>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{
          rotate: isActive ? 180 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <svg
          className={`faq-arrow ${isActive ? "active" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          stroke="#5267DF"
          strokeWidth="3"
        >
          <path d="M1 1l8 8 8-8" />
        </svg>
      </motion.div>
    </motion.li>
  );
};

export default FaqItem;
