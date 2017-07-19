import React, { Component } from 'react';
const url = 'http://localhost:3000'

class LoginForm extends Component {
  submit(e) {
    // console.log('submit');
    // e.preventDefault();
  }
  render() {
    return (
      <div className="login-form-container">
        <form
          className="login-form"
          method="POST"
          action={`${url}/users/login`}
          encType="application/x-www-form-urlencoded"
          >
          <label className="input-error-label">Invalid Email</label>
          <input
            required type="email"
            name="email"
            className="login-input-box"
            placeholder="Email"
          />
          <label className="input-error-label">Invalid Password</label>
          <input
            required type="password"
            name="password"
            className="login-input-box"
            placeholder="Password"
          />
          <a href="#/reset" className="link login-reset-link">Reset My Password</a>
          <label className="login-checkbox-container">
            <input type="checkbox" name="remember" className="checkbox"/>
            <span className="faux-checkbox"></span>
            <span className="unselectable">Keep me signed in</span>
          </label>
          <input type="submit" value="login" onClick={this.submit} className="submit" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
