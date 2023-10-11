import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import CanvasBackground from "./pages/CanvasBackground";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("main-content") as HTMLElement);
root.render(
  <>
    <CanvasBackground/>
    <App/>
  </>
);