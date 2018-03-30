import React, { Component } from 'react';
import './App.css';
import Home from './home/Home'
import About from './about/About'
import Explore from './explore/Explore'
import { Provider } from "react-redux";
import { Route } from "react-router-dom"
import { ConnectedRouter } from "react-router-redux"
import createHistory from 'history/createBrowserHistory'

import configureStore from "../store/configureStore";
const store = configureStore();

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ConnectedRouter history={history}>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/explore" component={Explore} />
              <Route path="/campaign" component={Home} />
              <Route path="/about" component={About} />
            </div>
          </ConnectedRouter>
        </div>
      </Provider>
    )}
}

export default App;
