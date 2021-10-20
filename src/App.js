import './App.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header.js';
import Landing from './Landing.js';
import Projects from './Projects.js';
import Skills from './Skills.js';

function App() {
  return (
    <div className="App bg-black h-screen">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/skills">
            <Skills/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;