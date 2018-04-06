import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { fetchItems } from "../explore/exploreActionCreator";
import { Responsive, Visibility, Segment } from 'semantic-ui-react'
import HomeHeading from './HomeHeading'
import NavBar from '../components/NavBar'

class HomeContainer extends React.Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  componentDidMount() {
    this.props.dispatch(fetchItems());
  }

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <div>
        <Responsive {...Responsive.onlyComputer}>
          <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
            <Segment inverted textAlign='center' style={{ minHeight: 500, padding: '0em' }} vertical>
              <NavBar active="home" fixed={fixed}/>
              <HomeHeading />
            </Segment>
          </Visibility>
          {children}
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
            <Segment inverted textAlign='center' style={{ minHeight: 500, padding: '0em' }} vertical>
              <NavBar active="home" fixed={fixed}/>
              <HomeHeading />
            </Segment>
          </Visibility>
          {children}
        </Responsive>
      </div>
    )
  }
}

export default connect()(HomeContainer)
