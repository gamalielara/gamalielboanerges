import React from "react";
import { motion } from "framer-motion";

const MyProject = ({ title, desc, categories, img, codelink, weblink }) => {
  return (
    <motion.div
      className="project-card lg:w-1/4 w-5/6 m-4 transition-all rounded-lg cursor-pointer"
      whileHover={{ scale: 1.1 }}
    >
      <img
        src={`img/works/${img}`}
        alt="the folklorevermore chess"
        className="w-full object-contain mx-auto rounded-t-lg"
      />
      <div className="project-desc p-2">
        <h3 className="text-lg md:text-xl my-2 italic project-desc-text">
          {title}
        </h3>
        {desc && (
          <p className="text-xs md:text-base project-desc-text">{desc}</p>
        )}
        <div className="categories flex flex-wrap w-full justify-center my-2">
          {categories.map((category, i) => (
            <span
              className="bg-gray-600 m-2 p-2 rounded text-xs text-white"
              key={i}
            >
              {category}
            </span>
          ))}
        </div>
        <div className="links flex justify-center mt-2">
          <div className="link  m-2 p-1 bg-gray-600 cursor-pointer rounded transition-all hover:bg-black px-4">
            <a
              href={codelink}
              rel="noreferrer"
              target="_blank"
              className="underline italic text-sm text-white"
            >
              Code<i class="fas fa-code ml-2" style={{ color: "inherit" }}></i>
            </a>
          </div>
          <div className="link  m-2 p-1 bg-gray-600 cursor-pointer rounded transition-all hover:bg-black px-4">
            <a
              href={weblink}
              rel="noreferrer"
              target="_blank"
              className="underline italic text-sm text-white"
            >
              Website
              <i
                class="fas fa-external-link-alt ml-2"
                style={{ color: "inherit" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MyProject;
