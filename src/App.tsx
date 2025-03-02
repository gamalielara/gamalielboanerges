import NavbarMenu from "<components>/Menu";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";

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
      <HomePage/>
    </>
  );
}

export default App;
