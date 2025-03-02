const NavbarMenu = () => {
  const menuClassName = "font-bold text-xl"
  return (
    <nav className="w-screen h-[10vh] fixed top-0 left-0 py-4 px-8 z-50">
      <ul className="flex flex-row items-center justify-between">
        <li className={menuClassName}><a href="#landing">HOME</a></li>
        <li className={menuClassName}><a href="#about-me">ABOUT ME</a></li>
        <li className={menuClassName}>PORTFOLIO</li>
        <li className={menuClassName}>MY BLOG</li>
      </ul>
    </nav>
  )
}

export default NavbarMenu;
