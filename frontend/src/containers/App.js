import React, { Component } from 'react';
import Topics from '../views/Topics';
import Home from '../views/Home';
import About from '../views/About';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

export default class App extends Component {
    render() {
        return (
          <Router className="App">
              <div>
                  <ul className="header-ul">
                      <li className="header-li"><Link to="/">Home</Link></li>
                      <li className="header-li"><Link to="/about">About</Link></li>
                      <li className="header-li"><Link to="/topics">Topics</Link></li>
                  </ul>
                  <hr/>
                  <div>
                      <Route exact path="/" render={() => Home(this.props)}/>
                      <Route path="/about" component={About}/>
                      <Route path="/topics" component={Topics}/>
                  </div>
              </div>
          </Router>
        );
    }
}
