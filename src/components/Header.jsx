import { Link } from "react-router-dom";

const Header = () => {
  window.addEventListener("scroll", () => {
    const theHeader = document.querySelectorAll(".header");
    theHeader.forEach((header) =>
      header.classList.toggle("bg-black", window.scrollY > 10)
    );
  });

  return (
    <header className="fixed top-0 right-0 w-full mb-8 sm:mb-0 z-50">
      <nav className="py-4 px-8 hidden sm:flex justify-between transition-all ease-in-out header">
        <div className="menus flex gap-6 items-center">
          <Link to="/">
            <button className="py-1 px-2 transition-all">
              <h3 className="text-3xl text-white tracking-wide font-light">
                Home
              </h3>
            </button>
          </Link>
          <Link to="/projects">
            <button className="py-1 px-2 transition-all">
              <h3 className="text-3xl text-white tracking-wide font-light">
                My Skills & Works
              </h3>
            </button>
          </Link>
          <Link to="/gumrindelwald">
            <button className="py-1 px-2 transition-all">
              <h3 className="text-3xl text-white tracking-wide font-light">
                My Blog
              </h3>
            </button>
          </Link>
          <Link to="/about-me">
            <button className="py-1 px-2 transition-all">
              <h3 className="text-3xl text-white tracking-wide font-light">
                About Me
              </h3>
            </button>
          </Link>
        </div>
        <button className="dark-mode-toggle py-1 w-14 h-14 rounded border border-white hover:border-gray-500">
          <i className="fas fa-sun text-white text-3xl hover:text-gray-500 transition-all"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
