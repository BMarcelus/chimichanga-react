import React, { Component } from 'react';
import './login.css';
import LoginForm from './LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <div id="login-root">
        <img
          width="100px"
          height="100px"
          src="http://localhost:3000/images/Portal_logo_updated-02_white.svg"
          // src="https://placeholdit.imgix.net/~text?txtsize=28&bg=0099ff&txtclr=ffffff&txt=portal&w=200&h=200"
          alt="The Portal"
          className="portal-logo"
        />
        {this.props.content}
      </div>
    );
  }
}

LoginPage.defaultProps = {
  content: <LoginForm />,
}



export default LoginPage;
