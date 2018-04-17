import React from 'react'
import { Grid, Image, Header, Container } from 'semantic-ui-react'

const Marketing = () => (
  <Container>
    <Header style={{ color: "#2b5fa7" }} as="h1" textAlign="left">
      Featured
    </Header>
    <Image
      rounded
      src="http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder4.png"
    />
    <Header style={{ color: "#2b5fa7" }} as="h1" textAlign="left">
      Trending
    </Header>
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Image
            rounded
            src="http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder4.png"
          />
        </Grid.Column>
        <Grid.Column>
          <Image
            rounded
            src="http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder4.png"
          />
        </Grid.Column>
        <Grid.Column>
          <Image
            rounded
            src="http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder4.png"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default Marketing
