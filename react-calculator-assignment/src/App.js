import React, { Component } from 'react';
import './App.css';
import Calc from './Modules/Calc.js';
import { Route as Router} from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from './Modules/Home.js';
import Header from './Modules/Header.js';
import About from './Modules/About.js'
import NotFound from './Modules/NotFound.js'

class App extends Component {

  render() {
    return (
    <div id="biggerContainer">
      <Header/>
      <Switch>
        <Router
          component={Home}
          exact 
          path='/' 
        />
        <Router
          path='/calc'
          component={Calc}
        />
        <Router 
          path='/about'
          component={About}
          />
        <Router 
          component={NotFound}
        />
      </Switch>
    </div>
    );
  }
}

export default App;
