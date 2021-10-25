import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Header = () => {
    const [clicked, setClicked] = useState(false); 

    window.addEventListener('scroll', () => {
        const theHeader = document.getElementById('header');
        theHeader.classList.toggle('bg-black', window.scrollY > 10);
    });

    return ( 
        <header className="p-4 fixed top-0 right-0 w-full mb-8 sm:mb-0 z-50 transition-all ease-in-out" id="header">
            <nav className="sm:flex justify-end items-end gap-4 hidden px-4">
                <Link to="/"><button className="hover:bg-gum-red rounded py-1 px-2 transition-all"><h1 className="text-lg text-white">Home</h1></button></Link>
                <Link to='/projects'><button className="hover:bg-gum-red rounded py-1 px-2 transition-all"><h1 className="text-lg text-white">My Skills & Works</h1></button></Link>
                <Link to='/gumrindelwald'><button className="hover:bg-gum-red rounded py-1 px-2 transition-all"><h1 className="text-lg text-white">My Blog</h1></button></Link>
                <Link to="/about-me"><button className="hover:bg-gum-red rounded py-1 px-2 transition-all"><h1 className="text-lg text-white">About Me</h1></button></Link>
            </nav>
            <nav className="small-nav-menu fixed top-0 right-0 w-full sm:hidden">
                <div className={clicked ? "full-menu w-screen h-screen bg-black p-4 relative" : "hidden"}>
                    <button className="menu-bars absolute top-4 right-4" onClick={() => setClicked(false)}><i class="fas fa-times text-3xl text-white"></i></button>
                    <div className="menus w-full h-full flex flex-col justify-center items-center gap-8">
                        <Link to="/"><button className="hover:bg-gum-red rounded py-1 px-2 transition-all" onClick={() => setClicked(false)}><motion.h1 className="text-lg text-white" initial={clicked ? {y:"0%"} : {}} animate={clicked ? {y:"-100%"} : {}} transition={{duration: .25}}>Home</motion.h1></button></Link>
                        <Link to='/projects'><button className="hover:bg-gum-red rounded py-1 px-2 transition-all" onClick={() => setClicked(false)}><motion.h1 className="text-lg text-white" initial={clicked ? {y:"0%"} : {}} animate={clicked ? {y:"-100%"} : {}} transition={{duration: .25, delay: .25}}>My Skills & Works</motion.h1></button></Link>
                        <Link to='/gumrindelwald'><button className="hover:bg-gum-red rounded py-1 px-2 transition-all" onClick={() => setClicked(false)}><motion.h1 className="text-lg text-white" initial={clicked ? {y:"0%"} : {}} animate={clicked ? {y:"-100%"} : {}} transition={{duration: .25, delay: .5}}>My Blog</motion.h1></button></Link>
                        <Link to="/about-me"><button className="hover:bg-gum-red rounded py-1 px-2 transition-all" onClick={() => setClicked(false)}><motion.h1 className="text-lg text-white" initial={clicked ? {y:"0%"} : {}} animate={clicked ? {y:"-100%"} : {}} transition={{duration: .25, delay: .75}}>About Me</motion.h1></button></Link>
                    </div>
                </div>
                <div className="nav-container w-full relative">
                    <div className="menu-bars absolute top-4 right-4" onClick={() => setClicked(true)}><i class="fas fa-bars text-3xl text-white"></i></div>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;