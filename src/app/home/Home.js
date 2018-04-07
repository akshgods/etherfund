import React from "react";
import HomeContainer from "./HomeContainer";
import TestComponent from "../test/TestComponent"

const Home = () =>
  <HomeContainer>
      <div className="test">
        <TestComponent />
      </div>
  </HomeContainer>


export default Home
