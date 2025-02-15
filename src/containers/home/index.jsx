import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <motion.div
        className="home__text-wrapper"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hello, I'm <span className="highlight">Mouneesh</span></h1>
      </motion.div>

      <motion.div
        className="home__contact-me"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <button onClick={handleNavigateToContactMePage} className="home__button">
          Hire Me
        </button>
      </motion.div>
    </section>
  );
};

export default Home;
