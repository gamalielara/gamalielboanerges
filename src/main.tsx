import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("main-content") as HTMLElement);
root.render(
  <App/>
);
