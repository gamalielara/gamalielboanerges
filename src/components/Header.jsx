import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light");
  };

  return (
    <header className="fixed top-0 right-0 w-full mb-8 sm:mb-0 z-50">
      <nav className="py-4 px-8 hidden md:flex justify-between transition-all ease-in-out header">
        <div className="menus flex gap-6 items-center">
          <Link to="/">
            <button className="py-1 px-2 transition-all">
              <h3 className="text-3xl tracking-wide font-light hover:text-gray-600 transition-all">
                Home
              </h3>
            </button>
          </Link>
          <Link to="/projects">
            <button className="py-1 px-2 transition-all">
              <h3 className="text-3xl tracking-wide font-light hover:text-gray-600 transition-all">
                My Skills & Works
              </h3>
            </button>
          </Link>
          <Link to="/gumrindelwald">
            <button className="py-1 px-2 transition-all">
              <h3 className="text-3xl tracking-wide font-light hover:text-gray-600 transition-all">
                My Blog
              </h3>
            </button>
          </Link>
          <Link to="/about-me">
            <button className="py-1 px-2 transition-all">
              <h3 className="text-3xl tracking-wide font-light hover:text-gray-600 transition-all">
                About Me
              </h3>
            </button>
          </Link>
        </div>
        <button
          className="dark-mode-toggle py-1 w-12 h-12"
          onClick={darkModeHandler}
        >
          <span>
            <i
              className={`toggle-mode-icon fas ${
                darkMode ? "fa-sun" : "fa-moon"
              } text-2xl hover:text-gray-500 transition-all`}
            ></i>
          </span>
        </button>
      </nav>

      <nav className="mobile-nav flex md:hidden fixed bottom-4 w-full h-16">
        <div
          className={`nav-mobile-container w-5/6 h-full rounded-lg mx-auto flex justify-around items-center ${
            darkMode ? "bg-black" : "bg-white"
          }`}
        >
          <Link to="/">
            <span className="text-2xl">
              <i className="fas fa-home"></i>
            </span>
          </Link>

          <Link to="/projects">
            <span className="text-2xl">
              <i className="fas fa-list"></i>
            </span>
          </Link>

          <button
            className="dark-mode-toggle w-12 h-12"
            onClick={darkModeHandler}
          >
            <span>
              <i
                className={`toggle-mode-icon fas ${
                  darkMode ? "fa-sun" : "fa-moon"
                } text-2xl`}
              ></i>
            </span>
          </button>

          <Link to="/gumrindelwald">
            <span className="text-2xl">
              <i className="fas fa-feather-alt"></i>
            </span>
          </Link>

          <Link to="/about-me">
            <span className="text-2xl">
              <i className="fas fa-user"></i>
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
