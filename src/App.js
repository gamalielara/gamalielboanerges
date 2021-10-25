import './App.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header.js';
import Landing from './Landing.js';
import Projects from './Projects.js';
import AboutMe from './AboutMe.js';
import MyBlog from './MyBlog.js';

function App() {
  return (
    <div className="App bg-black h-screen">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/gumrindelwald">
            <MyBlog/>
          </Route>
          <Route exact path="/about-me">
            <AboutMe/>
          </Route>
          <Route path="/">
            <Landing/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;