import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Explore from './views/Explore';
// import Profile from './views/Profile.html';
import Sample from './views/Sample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <div class="container-fluid">
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/explore'} className="nav-link">Explore</Link></li>
              <li><Link to={'/contact'} className="nav-link">Collaborators</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/explore' component={Explore} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
            </Switch>
          </div>
        </div>
        </Router>
      </header>
      
    </div>
  );
}

export default App;