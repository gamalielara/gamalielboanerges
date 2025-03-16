const NavbarMenu = () => {
  const menuClassName = "font-bold text-lg md:text-xl xl:text-2xl 2xl:text-3xl hover:cursor-pointer";

  const scrollToSection = (sectionId: string) => () => {
    const section = document.getElementById(sectionId);

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className={ `w-screen h-[10vh] fixed top-0 left-0 py-4 md:px-8 sm:px-4 px-2 z-50 bg-black/50` }>
      <ul className="flex flex-row items-center justify-between h-full">
        <li className={menuClassName}><button style={{all:"unset"}} className="hover:cursor-pointer hover:underline decoration-solid" onClick={scrollToSection("landing")}>HOME</button></li>
        <li className={menuClassName}><button style={{all:"unset"}} className="hover:cursor-pointer hover:underline decoration-solid" onClick={scrollToSection("about-me")}>ABOUT ME</button></li>
        <li className={menuClassName}><button style={{all:"unset"}} className="hover:cursor-pointer hover:underline decoration-solid" onClick={scrollToSection("portfolio")}>PORTFOLIO</button></li>
        <li className={menuClassName}><a style={{all:"unset"}} className="hover:cursor-pointer hover:underline decoration-solid" href="https://gumrindelwald.com" target="_blank">MY BLOG</a></li>
      </ul>
    </nav>
  );
};

export default NavbarMenu;
