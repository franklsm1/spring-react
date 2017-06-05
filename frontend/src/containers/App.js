import React, { Component } from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import Topics from '../components/Topics';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

export default class App extends Component {

    constructor(props){
      super(props);
      this.Home = this.Home.bind(this);
    }

    Home() {
      const {showLogo, text, onToggleLogo, value, onIncrement, onDecrement} = this.props;
      return (
        <div>
          <Header showLogo={showLogo} text={text} onToggleLogo={onToggleLogo}/>
          <Body value={value} onIncrement={onIncrement} onDecrement={onDecrement}/>
        </div>
      );
    }

    About() {
      return (
        <div>
          <h2>Example React App using redux and react router</h2>
        </div>
      );
    }

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
                      <Route exact path="/" component={this.Home}/>
                      <Route path="/about" component={this.About}/>
                      <Route path="/topics" component={Topics}/>
                  </div>
              </div>
          </Router>
        );
    }
}
