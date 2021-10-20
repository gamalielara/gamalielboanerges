import './App.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header.js';
import Landing from './Landing.js';
import Projects from './Projects.js';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;