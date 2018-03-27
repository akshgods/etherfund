import React from 'react'
import PropTypes from 'prop-types'
import { Container, Header, Button, Icon } from 'semantic-ui-react'

const HomeHeading = ({ mobile }) => (
  <Container>
    <Header
      as='h1'
      content='Find, Fund and Have Fun'
      inverted
      style={{
        fontSize: mobile ? '1em' : '3em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em'
      }}
    />
    <Header
      as='h2'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em'
      }}
    ><p>Blockchain based crowd funding platform</p>
    <p>Be part of the future, Be a backer and Get rewards</p>
    </Header>
    <Button primary size='huge'>
      SIGN UP NOW
    </Button>
  </Container>
)

HomeHeading.propTypes = {
  mobile: PropTypes.bool
}

export default HomeHeading
