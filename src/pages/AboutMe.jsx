import { motion } from "framer-motion";

const AboutMe = () => {
  const mystyle = {
    transform: "translateY(-50%)",
  };
  return (
    <section className="about-me w-full min-h-screen relative">
      <motion.div
        className="me-image gradient w-full min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      <article
        className="absolute top-1/2 md:w-1/2 sm:w-2/3 w-full about-me-content md:p-8 p-4"
        style={mystyle}
      >
        <motion.h1
          className="lg:text-9xl text-5xl text-gum-dark-red text-left mb-4"
          initial={{ fontSize: "0rem" }}
          animate={{ fontSize: "3rem" }}
          transition={{ delay: 0.75 }}
        >
          ARA GAMALIEL BOANERGES
        </motion.h1>
        <motion.p
          className="text-white text-lg md:text-xl mt-4 text-justify"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          I am an engineering student and I study at Faculty of Engineering
          Universitas Indonesia. Currently I am studying in my senior year. I am
          a curious student who always wants to know much things. Aside from
          studying engineering-related things, I spend my time learning new
          skills, such as making characters and poster design, learning data
          science and web development. In adition, I am also learning two
          foreign languages, German and Russian. I really like reading and
          writing activites. I write my thoughts on books and movies I have
          consumed in my personal blog website.
        </motion.p>
        <motion.p
          className="text-white text-lg md:text-xl text-left mt-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          Find me on:
          <ul className="list-none">
            <li>
              <a
                href="https://www.instagram.com/gamalielboanerges/"
                rel="noreferrer"
                target="_blank"
                className="underline hover:text-gum-red"
              >
                <i class="mr-2 fab fa-instagram"></i>Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aragamaliel/"
                rel="noreferrer"
                target="_blank"
                className="underline hover:text-gum-red"
              >
                <i class="mr-2 fab fa-linkedin"></i>LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gamalielara"
                rel="noreferrer"
                target="_blank"
                className="underline hover:text-gum-red"
              >
                <i class="mr-2 fab fa-github"></i>Github
              </a>
            </li>
            <li>
              <a
                href="mailto:aragamalielboanerges@gmail.com?subject=Enter the subject here"
                rel="noreferrer"
                target="_blank"
                className="underline hover:text-gum-red"
              >
                <i class="mr-2 fas fa-envelope-open-text"></i>
                aragamalielboanerges@gmail.com
              </a>
            </li>
          </ul>
        </motion.p>
        <a href="https://gumrindelwald.com/" rel="noreferrer" target="_blank">
          <motion.button
            className="transition-all bg-transparent border-white border-2 hover:border-0 hover:border-transparent hover:bg-gum-dark-red text-white p-2 mt-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.25 }}
          >
            <i class="mr-2 fab fa-internet-explorer"></i>VISIT MY PERSONAL BLOG
          </motion.button>
        </a>
      </article>
    </section>
  );
};

export default AboutMe;
