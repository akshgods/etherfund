import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import HomeContainer from './home/HomeContainer'
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <HomeContainer>OK</HomeContainer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
