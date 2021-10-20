import { useState } from 'react';
import { Link, BrowserRouter as Router} from 'react-router-dom';

const Header = () => {
    const [clicked, setClicked] = useState(false); 

    return ( 
        <header className="p-4 sticky top-0 right-0 w-full md:bg-gradient-to-b from-black to-transparent z-10">
            <nav className="sm:flex justify-end items-end gap-4 hidden">
                    <button className="hover:bg-gum-red rounded py-1 px-2 transition-all"><h1 className="text-lg text-white"><Link to="/">Home</Link></h1></button>
                    <button className="hover:bg-gum-red rounded py-1 px-2 transition-all"><h1 className="text-lg text-white"><Link to='/projects'>My Works</Link></h1></button>
                    <button className="hover:bg-gum-red rounded py-1 px-2 transition-all"><h1 className="text-lg text-white"><Link to='/skills'>My Skills</Link></h1></button>
                    <button className="hover:bg-gum-red rounded py-1 px-2 transition-all"><h1 className="text-lg text-white"><a href="https://www.gumrindelwald.com" target="_blank">My Blog</a></h1></button>
                    <button className="hover:bg-gum-red rounded py-1 px-2 transition-all"><h1 className="text-lg text-white">About Me</h1></button>
            <nav className="small-nav-menu fixed top-0 right-0 w-full sm:hidden">
                <div className={clicked ? "full-menu w-screen h-screen bg-black p-4 relative" : "hidden"}>
                    <button className="menu-bars absolute top-4 right-4" onClick={() => setClicked(false)}><i class="fas fa-times text-3xl text-white"></i></button>
                    <div className="menus w-full h-full flex flex-col justify-center items-center">
                        <button className="hover:bg-gum-red rounded py-1 px-2 transition-all" onClick={() => setClicked(false)}><h1 className="text-lg text-white"><Link to="/">Home</Link></h1></button>
                        <button className="hover:bg-gum-red rounded py-1 px-2 transition-all" onClick={() => setClicked(false)}><h1 className="text-lg text-white"><Link to='/projects'>My Works</Link></h1></button>
                        <button className="hover:bg-gum-red rounded py-1 px-2 transition-all" onClick={() => setClicked(false)}><h1 className="text-lg text-white"><Link to='/skills'>My Skills</Link></h1></button>
                        <button className="hover:bg-gum-red rounded py-1 px-2 transition-all" onClick={() => setClicked(false)}><h1 className="text-lg text-white"><a href="https://www.gumrindelwald.com" target="_blank">My Blog</a></h1></button>
                        <button className="hover:bg-gum-red rounded py-1 px-2 transition-all" onClick={() => setClicked(false)}><h1 className="text-lg text-white">About Me</h1></button>
                    </div>
                </div>
                <div className="nav-container w-full relative">
                    <button className="menu-bars absolute top-4 right-4" onClick={() => setClicked(true)}><i class="fas fa-bars text-3xl text-white"></i></button>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;