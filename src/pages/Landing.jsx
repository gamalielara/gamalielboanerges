import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../animation.css";

const Landing = () => {
  return (
    <section className="landing-page w-full h-screen bg-gray-900">
      <div className="hello-container w-full h-full flex flex-col justify-center items-center relative">
        <motion.h1
          className="lg:text-9xl md:text-7xl text-6xl text-gray-300 text-left tracking-wider"
          id="gamalielboanerges"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.75, duration: 0.75 }}
        >
          GAMALIELBOANERGES
        </motion.h1>
        <h5 className="roles text-lg md:text-xl text-gray-300">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15 }}
          >
            Programmer.{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.25 }}
          >
            Web Developer.{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Author.{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.75 }}
          >
            Reader.
          </motion.span>
        </h5>
        <div className="buttons flex gap-4 md:mt-8 sm:mt-4 mt-2">
          <motion.button
            className="transition-all md:text-2xl text-lg text-white p-2 mr-2 cursor-pointer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.25 }}
          >
            <Link to="/projects">
              <h4 className="hover:underline">My Works</h4>
            </Link>
          </motion.button>
          <motion.button
            className="transition-all md:text-2xl text-lg text-white p-2 ml-2 cursor-pointer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Link to="/about-me">
              <h4 className="hover:underline">About Me</h4>
            </Link>
          </motion.button>
          <div className="socmed absolute md:bottom-8 bottom-4 right-4 md:right-16">
            <button className="text-2xl text-white mx-2">
              <a
                href="https://www.instagram.com/gamalielboanerges/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </button>
            <button className="text-2xl text-white mx-2">
              <a
                href="https://www.linkedin.com/in/aragamaliel/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </button>
            <button className="text-2xl text-white mx-2">
              <a
                href="https://github.com/gamalielara"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </button>
            <button className="text-2xl text-white mx-2">
              <a
                href="mailto:aragamalielboanerges@gmail.com?subject=Enter the subject here"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fas fa-envelope-open-text"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
