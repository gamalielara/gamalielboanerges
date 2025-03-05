import NavbarMenu from "<components>/Menu";
import AboutPage from "<pages>/About";
import CanvasBackground from "<pages>/CanvasBackground";
import PortfolioPage from "<pages>/Portfolio";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  useEffect(() => {
    const reloadWindow = () => window.location.reload();

    window.addEventListener("resize", () => reloadWindow);

    return () => window.removeEventListener("resize", reloadWindow);
  }, []);

  return (
    <>
      <NavbarMenu/>
      <HomePage/>
      <PortfolioPage/>
      <AboutPage/>
      <CanvasBackground/>
    </>
  );
}

export default App;
