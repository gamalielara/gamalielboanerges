import NavbarMenu from "<components>/Menu";
import AboutPage from "<pages>/About";
import PortfolioPage from "<pages>/Portfolio";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import "./App.css"

function App() {
  useEffect(() => {
    console.log("HAHAHA");
    const reloadWindow = () => window.location.reload();

    window.addEventListener("resize", () => reloadWindow);

    return () => window.removeEventListener("resize", reloadWindow);
  }, []);

  return (
    <>
      <NavbarMenu/>
      <PortfolioPage/>
      <HomePage/>
      <AboutPage/>
    </>
  );
}

export default App;
