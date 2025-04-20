import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";


navigator.serviceWorker?.register("./sw.js").then((reg) => {
  console.log("Service worker successfully registered ", reg);
});


const root = ReactDOM.createRoot(document.getElementById("main-content") as HTMLElement);
root.render(
  <App/>
);
