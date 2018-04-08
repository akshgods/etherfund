import React from "react";
import { Link } from "react-router-dom";
import LoginSignup from "../user/LoginSignup";
import { connect } from "react-redux";
import { Modal, Button, Dropdown } from "semantic-ui-react";
import { logout } from "../user/userActionCreator";

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin,
  user: state.auth.userInfo
});

const mapDispatchToProps = dispatch => ({
  onLogoutClick() {
    dispatch(logout());
  }
});

class UserProfile extends React.Component {
  handleClick = () => {
    this.props.onLogoutClick();
  };

  render() {
    const { fixed, isLogin } = this.props;

    switch (isLogin) {
      case true:
        const { firstName, lastName } = this.props.user;
        return <div className="down">
            <Dropdown text={"Hello, " + firstName}>
              <Dropdown.Menu>
                <Dropdown.Item disabled>
                  <span>
                    Signed in as <strong>
                      {firstName} {lastName}
                    </strong>
                  </span>
                </Dropdown.Item>
                <Link className="item" to="/explore">
                  {"Your Profile"}
                </Link>
                <Link className="item" to="/explore">
                  {"Your Wallet"}
                </Link>
                <Dropdown.Item onClick={this.handleClick}>
                  {"Sign Out"}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>;

      default:
        return <div>
            <Modal size="tiny" trigger={<Button size="medium" compact className={!fixed ? "inverted" : "google plus"}>
                  Log In
                </Button>}>
              <LoginSignup isLogin={true} />
            </Modal>
            <Modal size="tiny" trigger={<Button size="medium" compact className={!fixed ? "inverted" : "primary"} style={{ marginLeft: "0.5em" }}>
                  Sign Up
                </Button>}>
              <LoginSignup isLogin={false} />
            </Modal>
          </div>;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
