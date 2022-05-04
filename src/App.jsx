import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header.jsx";
import Landing from "./pages/Landing.jsx";
import Projects from "./pages/Projects.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import MyBlog from "./pages/MyBlog.jsx";

function App() {
  return (
    <div className="App h-screen">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/gumrindelwald">
            <MyBlog />
          </Route>
          <Route exact path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
