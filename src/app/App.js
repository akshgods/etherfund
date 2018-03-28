import React, { Component } from 'react';
import './App.css';
import Home from './home/Home'
import About from './about/About'
import { BrowserRouter as Router, Route } from "react-router-dom"


class App extends Component {
  render() {
    return <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/explore" component={Home} />
            <Route path="/campaign" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>;
  }
}

export default App;
