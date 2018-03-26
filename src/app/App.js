import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar active="home" />
        </Router>
      </div>
    );
  }
}

export default App;
