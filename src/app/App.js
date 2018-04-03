import React, { Component } from 'react';
import './App.css';
import Home from './home/Home'
import About from './about/About'
import Explore from './explore/Explore'
import SingleItem from "./explore/SingleItem";
import Campaign from "./campaign/Campaign";
import { Provider } from "react-redux";
import { Route } from "react-router-dom"
import { ConnectedRouter } from "react-router-redux"
import history from '../utils/history'

import configureStore from "../store/configureStore";
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ConnectedRouter history={history}>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/explore" component={Explore} />
              <Route path="/explore/(:id)" component={"this is single item"} />
              <Route path="/campaign" component={Campaign} />
              <Route path="/about" component={About} />
            </div>
          </ConnectedRouter>
        </div>
      </Provider>
    )}
}

export default App;
