import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import './custom.css'

const Landing = () => {
    return ( 
        <section className="landing-page w-full h-screen">
            <div className="hello-container w-full h-full flex justify-start items-center bg-black relative">
                <div className="hello-content md:pl-16 md:p-0 p-4 z-10">
                    <motion.h3 className="lg:text-5xl md:text-3xl text-2xl text-gum-dark-red text-left" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.75, delay:1.5}}>Hello, I am</motion.h3>
                    <motion.h1 className="lg:text-9xl md:text-7xl text-6xl text-gum-dark-red text-left" initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{delay:.75, duration:.75}}>ARA GAMALIEL <br/> BOANERGES</motion.h1>
                    <div className="buttons flex gap-4 md:mt-8 sm:mt-4 mt-2">
                        <motion.button className="transition-all bg-transparent md:text-2xl text-lg border-white border-2 hover:border-0 hover:border-transparent hover:bg-gum-dark-red text-white p-2" initial={{scale:0}} animate={{scale:1}} transition={{delay:1.25}}><Link to="/projects">MY WORKS</Link></motion.button>
                        <motion.button className="transition-all bg-transparent md:text-2xl text-lg border-white border-2 hover:border-0 hover:border-transparent hover:bg-gum-dark-red text-white p-2" initial={{scale:0}} animate={{scale:1}} transition={{delay:1.5}}><Link to="/about-me">ABOUT ME</Link></motion.button>
                    </div>
                    <div className="socmed absolute md:bottom-8 bottom-4 right-4 md:right-16">
                        <button className="text-2xl text-white mx-2"><a href="https://www.instagram.com/gamalielboanerges/" target="_blank"><i class="fab fa-instagram"></i></a></button>
                        <button className="text-2xl text-white mx-2"><a href="https://www.linkedin.com/in/aragamaliel/" target="_blank"><i class="fab fa-linkedin"></i></a></button>
                        <button className="text-2xl text-white mx-2"><a href="https://github.com/gamalielara" target="_blank"><i class="fab fa-github"></i></a></button>
                        <button className="text-2xl text-white mx-2"><a href="mailto:aragamalielboanerges@gmail.com?subject=Enter the subject here" target="_blank"><i class="fas fa-envelope-open-text"></i></a></button>
                    </div>
                </div>
                <motion.div className="absolute top-0 left-0 w-full h-screen" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.75}}>
                    <img src="img/me.jpg" alt="Ara Gamaliel Boanerges" className="object-cover w-full h-full opacity-75"/>
                </motion.div>
            </div>
        </section>
     );
}
 
export default Landing;