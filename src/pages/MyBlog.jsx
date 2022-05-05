import { motion } from "framer-motion";

const MyBlog = () => {
  return (
    <section className="my-blog w-full h-screen relative">
      <div className="content absolute top-1/2 left-1/2 w-full center z-10 flex flex-col gap-4 justify-center items-center transform -translate-x-1/2 -translate-y-1/2">
        <a href="https://gumrindelwald.com" rel="noreferrer" target="_blank">
          <motion.img
            src="img/gw logo.png"
            alt="gumrindelwald logo"
            className="w-5/6 md:w-1/2 object-contain z-10 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.25, duration: 1 }}
          />
        </a>
        <motion.article
          class="px-4 text-white md:w-3/4 sm:w-5/6 w-full lg:text-lg md:text-base text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p class="md:mb-4 mb-2">
            Hello! Welcome to gumrindelwald, my personal blog site. I am Ara
            Gamaliel, the man behind this blog site. I am the sole creator,
            developer and author in this site. Up until now, I am a college
            student and I study engineering science in Faculty of Engineering
            Universitas Indonesia.
          </p>
          <p class="md:mb-4 mb-2">
            Writing has been the most comfortable for me to express myself, my
            thoughts and my emotions. Therefore, writing activity has always
            been fun for me. For the first time, I started writing blog in 2012,
            when I was 12, in a medium called blogspot.
          </p>
          <p class="md:mb-4 mb-2">
            In this blog, I write book and film reviews, mostly. But I also
            shares some of my personal thoughts and things that I have been
            fascinating with, such as science or psychology.
          </p>
          <p class="md:mb-4 mb-2">
            All article in this website (or, at least, in majority) are written
            in both Indonesian and English. And because I currently spend my
            time learning new languages such as German, you might find some of
            them are written in German as well.
          </p>
        </motion.article>
        <a href="https://gumrindelwald.com/" rel="noreferrer" target="_blank">
          <motion.button
            className="transition-all bg-transparent border-2 hover:border-0 hover:border-transparent p-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.25 }}
          >
            <i class="mr-2 fab fa-internet-explorer"></i>visit gumrindelwald
          </motion.button>
        </a>
      </div>
      <motion.div
        className="gradient min-h-screen w-full relative after:absolute after:top-0 after:left-0 after:bg-gum-dark-red after:opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* <img
          src="img/gumrindelwald-hero.jpg"
          alt="background"
          className="object-cover w-full h-full absolute top-0 left-0"
        /> */}
      </motion.div>
    </section>
  );
};

export default MyBlog;
