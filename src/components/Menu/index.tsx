const NavbarMenu = () => {
  const menuClassName = "font-bold text-lg md:text-xl xl:text-2xl 2xl:text-3xl hover:cursor-pointer";

  const scrollToSection = (sectionId: string) => () => {
    const section = document.getElementById(sectionId);

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="w-screen h-[10vh] fixed top-0 left-0 py-4 md:px-8 sm:px-4 px-2 z-50">
      <ul className="flex flex-row items-center justify-between">
        <li className={menuClassName}><a onClick={scrollToSection("landing")}>HOME</a></li>
        <li className={menuClassName}><a onClick={scrollToSection("about-me")}>ABOUT ME</a></li>
        <li className={menuClassName}><a onClick={scrollToSection("portfolio")}>PORTFOLIO</a></li>
        <li className={menuClassName}>MY BLOG</li>
      </ul>
    </nav>
  );
};

export default NavbarMenu;
