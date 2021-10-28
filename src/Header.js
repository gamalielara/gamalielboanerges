import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Header = () => {
    const [clicked, setClicked] = useState(false); 

    window.addEventListener('scroll', () => {
        const theHeader = document.querySelectorAll('.header');
        theHeader.forEach(header => header.classList.toggle('bg-black', window.scrollY > 10));
    });

    return ( 
        <header className="fixed top-0 right-0 w-full mb-8 sm:mb-0 z-50">
            <nav className="p-4 sm:flex justify-end items-end gap-4 hidden px-4 transition-all ease-in-out header">
                <Link to="/"><button className="hover:bg-gum-red rounded py-1 px-2 transition-all"><h1 className="text-2xl text-white">Home</h1></button></Link>
                <Link to='/projects'><button className="hover:bg-gum-red rounded py-1 px-2 transition-all"><h1 className="text-2xl text-white">My Skills & Works</h1></button></Link>
                <Link to='/gumrindelwald'><button className="hover:bg-gum-red rounded py-1 px-2 transition-all"><h1 className="text-2xl text-white">My Blog</h1></button></Link>
                <Link to="/about-me"><button className="hover:bg-gum-red rounded py-1 px-2 transition-all"><h1 className="text-2xl text-white">About Me</h1></button></Link>
            </nav>
            <nav className="small-nav-menu fixed top-0 right-0 w-full sm:hidden transition-all ease-in-out header">
                <div className={clicked ? "full-menu w-screen h-screen bg-gum-dark-red p-4 relative" : "hidden"}>
                    <button className="menu-bars absolute top-4 right-4" onClick={() => setClicked(false)}><i class="fas fa-times text-3xl text-white"></i></button>
                    <div className="menus w-full h-full flex flex-col justify-center items-center gap-8">
                        <Link to="/"><button className="hover:bg-gum-red rounded py-1 px-2 transition-all" onClick={() => setClicked(false)}><motion.h1 className="text-3xl text-white" initial={{opacity: 0, y:"100%"}} animate={clicked ? {opacity:1, y:0} : {opacity:0, y:"100%"}} transition={{duration: .2}}>Home</motion.h1></button></Link>
                        <Link to='/projects'><button className="hover:bg-gum-red rounded py-1 px-2 transition-all" onClick={() => setClicked(false)}><motion.h1 className="text-3xl text-white" initial={{opacity: 0, y:"100%"}} animate={clicked ? {opacity:1, y:0} : {opacity:0, y:"100%"}} transition={{duration: .2, delay: .25}}>My Skills & Works</motion.h1></button></Link>
                        <Link to='/gumrindelwald'><button className="hover:bg-gum-red rounded py-1 px-2 transition-all" onClick={() => setClicked(false)}><motion.h1 className="text-3xl text-white" initial={{opacity: 0, y:"100%"}} animate={clicked ? {opacity:1, y:0} : {opacity:0, y:"100%"}} transition={{duration: .2, delay: .5}}>My Blog</motion.h1></button></Link>
                        <Link to="/about-me"><button className="hover:bg-gum-red rounded py-1 px-2 transition-all" onClick={() => setClicked(false)}><motion.h1 className="text-3xl text-white" initial={{opacity: 0, y:"100%"}} animate={clicked ? {opacity:1, y:0} : {opacity:0, y:"100%"}} transition={{duration: .2, delay: .75}}>About Me</motion.h1></button></Link>
                    </div>
                </div>
                <div className="nav-container w-full p-4">
                    <div className="menu-bars flex justify-end" onClick={() => setClicked(true)}><i class="fas fa-bars text-3xl text-white"></i></div>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;