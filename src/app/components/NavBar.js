import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container, Button } from 'semantic-ui-react'

const NavBar = props => (
  <Menu
    fixed={props.fixed ? "top" : null}
    inverted={!props.fixed}
    pointing={!props.fixed}
    secondary={!props.fixed}
    borderless
  >
    <Container>
      <Menu.Item as="a" header id="logo" content="Etherfund" />
      <Link
        className={`item ${props.active === "home" ? "active" : ""}`}
        to="/"
      >
        {"Home"}
      </Link>
      <Link
        className={`item ${props.active === "explore" ? "active" : ""}`}
        to="/explore"
      >
        {"Explore"}
      </Link>
      <Link
        className={`item ${props.active === "about" ? "active" : ""}`}
        to="/about"
      >
        {"About Us"}
      </Link>
      <Link
        className={`right item ${props.active === "campaign" ? "active" : ""}`}
        to="/campaign"
      >
        {"Start a Campaign"}
      </Link>
      <Link
        className={`item ${props.active === "wallet" ? "active" : ""}`}
        to="/wallet"
      >
        {"Wallet"}
      </Link>
      <Menu.Item position="right">
        <Link
          className={`button ui ${!props.fixed ? "inverted" : "google plus"}`}
          role="button"
          to="login"
        >
          Log in
        </Link>
        <Link
          className={`button ui ${!props.fixed ? "inverted" : "primary"}`}
          role="button"
          to="signup"
          style={{ marginLeft: "0.5em" }}
        >
          Sign Up
        </Link>
      </Menu.Item>
    </Container>
  </Menu>
);


export default NavBar
