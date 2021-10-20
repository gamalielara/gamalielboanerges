import { useState } from 'react';
import { Link, BrowserRouter as Router} from 'react-router-dom';

const Header = () => {
    const [clicked, setClicked] = useState(false); 

    return ( 
        <header className="p-4 fixed top-0 right-0 w-full mb-8 sm:mb-0 z-50">
            <nav className="sm:flex justify-end items-end gap-4 hidden">
                <button className="hover:bg-gum-red rounded py-1 px-2 transition-all"><h1 className="text-lg text-white"><Link to="/">Home</Link></h1></button>
                <button className="hover:bg-gum-red rounded py-1 px-2 transition-all"><h1 className="text-lg text-white"><Link to='/projects'>My Skills & Works</Link></h1></button>
                <button className="hover:bg-gum-red rounded py-1 px-2 transition-all"><h1 className="text-lg text-white"><a href="https://www.gumrindelwald.com" target="_blank">My Blog</a></h1></button>
                <button className="hover:bg-gum-red rounded py-1 px-2 transition-all"><h1 className="text-lg text-white">About Me</h1></button>
            </nav>
            <nav className="small-nav-menu fixed top-0 right-0 w-full sm:hidden">
                <div className={clicked ? "full-menu w-screen h-screen bg-black p-4 relative" : "hidden"}>
                    <button className="menu-bars absolute top-4 right-4" onClick={() => setClicked(false)}><i class="fas fa-times text-3xl text-white"></i></button>
                    <div className="menus w-full h-full flex flex-col justify-center items-center">
                        <button className="hover:bg-gum-red rounded py-1 px-2 transition-all" onClick={() => setClicked(false)}><h1 className="text-lg text-white"><Link to="/">Home</Link></h1></button>
                        <button className="hover:bg-gum-red rounded py-1 px-2 transition-all" onClick={() => setClicked(false)}><h1 className="text-lg text-white"><Link to='/projects'>My Skills & Works</Link></h1></button>
                        <button className="hover:bg-gum-red rounded py-1 px-2 transition-all" onClick={() => setClicked(false)}><h1 className="text-lg text-white"><a href="https://www.gumrindelwald.com" target="_blank">My Blog</a></h1></button>
                        <button className="hover:bg-gum-red rounded py-1 px-2 transition-all" onClick={() => setClicked(false)}><h1 className="text-lg text-white">About Me</h1></button>
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