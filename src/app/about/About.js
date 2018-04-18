import React from "react";
import { Image, Header, Container, Divider, Icon, Grid } from "semantic-ui-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const About = () => (
  <div>
    <NavBar active="about" fixed={true} />
    <div style={{ padding: "6em 0" }}>
      <Container textAlign="center">
        <Header style={{ color: "#2b5fa7" }} as="h1" textAlign="left">
          HOW IT WORKS
        </Header>
        <Divider hidden />
        <Image rounded centered style={{width: "55%"}} src="/static/images/Diagram.png" />
        <Divider section hidden />
        <Divider section hidden />
        <Header style={{ color: "#2b5fa7" }} as="h1" textAlign="left">
          ABOUT ME
        </Header>
        <Header as="h2" textAlign="left">
          <Image
            circular
            src="https://avatars0.githubusercontent.com/u/9433422?s=460&v=4"
          />{" "}
          Chen Li
          <Header.Subheader style={{padding: "1em 0"}}>
            A Full-Stack Engineer - Javascript, NodeJS, React/Redux,
            Blockchain
          </Header.Subheader>
        </Header>
        <Grid columns={10}>
          <Grid.Row>
            <Grid.Column>
              <Header as="h2" icon>
                <a href="https://github.com/lichen777">
                  <Icon name="github square" />
                </a>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2" icon>
                <a
                  href="https://www.linkedin.com/in/chenli777/">
                  <Icon name="linkedin square" />
                </a>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
    <Footer fixed={false} />
  </div>
);

export default About;
