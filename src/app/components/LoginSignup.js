import React from 'react'
import { Button, Form, Grid, Header, Message, Segment, Label } from 'semantic-ui-react'

class LoginSignup extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isLogin : props.isLogin
    }
  }

  handleClick = () => {
    this.setState({
      isLogin : !this.state.isLogin
    })
  }

  render() {
    const { isLogin } = this.state

    return (
      <div className='signup-form'>
        <Grid
          textAlign='center'
          style={{ padding: '4em 4em' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' textAlign='center'>
              {isLogin ? "Log in to your account" : "Sign up new account"}
            </Header>
            <Form size='large'>
              <Segment stacked>
                {isLogin ? "" : <Form.Input
                  fluid
                  icon='user circle'
                  iconPosition='left'
                  placeholder='First Name'
                />}
                {isLogin ? "" : <Form.Input
                  fluid
                  icon='user circle'
                  iconPosition='left'
                  placeholder='Last Name'
                />}
                <Form.Input
                  fluid
                  icon='mail'
                  iconPosition='left'
                  placeholder='E-mail address'
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
                {isLogin ?
                  <Button color='blue' fluid size='large'>Login</Button>
                :
                  <div>
                    <Button color='blue' fluid size='large'>Create an account</Button>
                    <br/>
                    <p>By signing up you agree to our Terms of Use and Privacy Policy.</p>
                  </div>
                }
              </Segment>
            </Form>
            <Message>
            {isLogin ?
              <div>
                New to us? <Label onClick={this.handleClick}>Sign Up</Label>
              </div>
            :
              <div>
                Already have an account? <Label onClick={this.handleClick}>Log In</Label>
              </div>
            }
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default LoginSignup
