import React from "react";
import LoginForm from "../components/LoginForm";
import HomeContainer from "./HomeContainer";

const Home = () => 
  <HomeContainer>
      <div className="content">
        <LoginForm />
      </div>
  </HomeContainer>


export default Home