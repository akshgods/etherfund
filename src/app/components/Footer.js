import React from 'react'
import { Menu, Image } from 'semantic-ui-react'

const Footer = props => (
  <Menu
      fixed={props.fixed ? "bottom" : null}
      style={{marginTop: props.fixed ? '1em' : '30em'}}
      borderless
      size="tiny"
    >
      <Menu.Item>
        <Image src='/static/images/logo_horizontal_on_white.png' id="footerImg" />
      </Menu.Item >
      <Menu.Item position="right" name='github' icon="github" href='https://github.com/lichen777' target='_blank'/>
      <Menu.Item name='LinkedIn' icon="linkedin square" href='https://www.linkedin.com/in/chenli777/' target='_blank'/>
      <Menu.Item position="right">
        <span>© 2018 Chen Li All Rights Reserved</span>
      </Menu.Item>
    </Menu>
)

export default Footer
