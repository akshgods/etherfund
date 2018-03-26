import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container } from 'semantic-ui-react'

const NavBar = (props) =>
  <Menu fixed="top" pointing secondary>
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
    </Container>
  </Menu>


export default NavBar
