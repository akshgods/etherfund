import React from 'react'
import PropTypes from 'prop-types'
import { Responsive, Visibility, Segment, Container, Header, Button, Menu } from 'semantic-ui-react'
import HomeHeading from './HomeHeading'
import NavBar from '../components/NavBar'

class HomeContainer extends React.Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
            <NavBar active="home" fixed={fixed}/>
            <HomeHeading />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

export default HomeContainer
