import React from "react";
import ItemList from './ItemList'
import NavBar from "../components/NavBar";

const Explore = () => (
  <div>
    <NavBar active="explore" fixed={true} />
    <div style={{paddingTop: '6em'}}>
      <ItemList />
    </div>
  </div>
);

export default Explore;
