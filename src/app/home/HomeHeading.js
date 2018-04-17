import React from 'react'
import { Header, Container, Grid, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const HomeHeading = ({ mobile }) => (
  <Container id="jumbotron">
    <Image id="bigLogo" src="./static/images/logo.png"/>
    <Header
      as="h2"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    >
      <p>Blockchain based crowd funding platform</p>
      <p>Be part of the future, Be a backer.</p>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Image src="http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder4.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder4.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder4.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Header>
  </Container>
);

HomeHeading.propTypes = {
  mobile: PropTypes.bool
}

export default HomeHeading
