import React, { Component } from 'react';
const url = 'http://localhost:3000'

class ResetForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "test@fake.com",
      sent: false,
    };
    this.submit=this.submit.bind(this);
  }
  componentDidMount() {

  }
  submit(e) {
    e.preventDefault();
    this.setState({
      email: e.target.elements[0].value,
      sent: true,
    })
  }
  render() {
    if (this.state.sent) {
      return (
        <div className="login-form-container email-form-container">
          <form
            className="login-form"
            method="GET"
            action="#/login"
            >
            <h2>Reset My Password</h2>
            <span>Please Check Your Email At</span>
            <p><a href={`mailto:${this.state.email}`}>{this.state.email}</a></p>
            <span>to change your password</span>
            <input type="submit" value="Okay" className="submit" />
          </form>
        </div>
      );
    }
    return (
      <div className="login-form-container email-form-container">
        <form
          className="login-form"
          method="POST"
          action={`${url}/users/reset`}
          encType="application/x-www-form-urlencoded"
          onSubmit={this.submit}
          >
          <h2>Reset My Password</h2>
          <label className="input-error-label">Invalid Email</label>
          <input
            required type="email"
            name="email"
            className="login-input-box"
            id="reset-email"
            placeholder="Email"
          />
          <input type="submit" value="Submit" className="submit email-submit"/>
          <a href="#/login" className="link">Nevermind I want to Log in</a>
        </form>
      </div>
    );
  }
}

export default ResetForm;
