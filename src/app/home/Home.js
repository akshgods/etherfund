import React from "react";
import HomeContainer from "./HomeContainer";
import TestComponent from "../TestComponent"

const Home = () =>
  <HomeContainer>
      <div className="content">
        <TestComponent />
      </div>
  </HomeContainer>


export default Home
