import React from "react";
import Tab from "./Tab";
import NavBar from "../components/NavBar";
import {Container} from "semantic-ui-react";

const Campaign = () => (
  <div>
    <NavBar active="campaign" fixed={true} />
    <div style={{ paddingTop: "5em" }}>
      <Container>
        <Tab />
      </Container>
    </div>
  </div>
);

export default Campaign;