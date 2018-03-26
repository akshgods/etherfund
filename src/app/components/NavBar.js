import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container, Button } from 'semantic-ui-react'

const NavBar = (props) =>
  <Menu
    fixed={props.fixed ? 'top' : null}
    inverted={!props.fixed}
    pointing={!props.fixed}
    secondary={!props.fixed}>
    <Container>
      <Menu.Item as="a" header id="logo">
        ?
      </Menu.Item>
      <Link className={`item ${props.active === 'home' ? "active" : ""}`} to="/">
        {"Home"}
      </Link>
      <Link className={`item ${props.active === 'blog' ? "active" : ""}`} to="/blog">
        {"Blog"}
      </Link>
      <Link className={`item ${props.active === 'event' ? "active" : ""}`} to="/event">
        {"Event"}
      </Link>
      <Link className={`item ${props.active === 'portfolio' ? "active" : ""}`} to="/portfolio">
        {"Portfolio"}
      </Link>
      <Link className={`item ${props.active === 'about' ? "active" : ""}`} to="/about">
        {"About"}
      </Link>
      <Menu.Item position='right'>
        <Button as='a' inverted={!props.fixed}>Log in</Button>
        <Button as='a' inverted={!props.fixed} primary={props.fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
      </Menu.Item>
    </Container>
  </Menu>


export default NavBar
