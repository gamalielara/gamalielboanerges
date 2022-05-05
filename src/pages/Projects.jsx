import { motion } from "framer-motion";
import MyProject from "../components/MyProject";
import MySkill from "../components/MySkill";
import { MYPROJECTS } from "../data/myProjects";
import { MYSKILLS } from "../data/mySkill";

const Projects = () => {
  return (
    <motion.div
      className="myskills-projects-wrapper pb-16 md:pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <section className="skills w-full md:my-24 my-12">
        <h1 className="text-5xl lg:text-7xl mb-4 md:mb-8 tracking-widest">
          My Skills
        </h1>
        <div className="myskills flex flex-wrap sm:px-4 md:w-5/6 mx-auto w-full justify-center items-center">
          {MYSKILLS.map((skill) => (
            <MySkill title={skill.title} src={skill.src} />
          ))}
        </div>
      </section>

      <section className="my-projects w-full p-4 my-4">
        <div className="my-projects-container">
          <h1 className="text-5xl lg:text-7xl tracking-widest">My Projects</h1>

          <div className="projects flex flex-wrap w-full justify-center align-middle mt-4">
            {MYPROJECTS.map((project, i) => (
              <MyProject
                key={i}
                title={project.title}
                desc={project.desc}
                categories={project.categories}
                img={project.img}
                codelink={project.codelink}
                weblink={project.weblink}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
