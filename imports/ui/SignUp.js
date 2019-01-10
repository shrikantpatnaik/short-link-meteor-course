import React from "react";
import {Link} from "react-router-dom";
import {Accounts} from 'meteor/accounts-base'
import {Meteor} from "meteor/meteor";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  componentDidMount() {
    if (Meteor.userId()) {
      this.props.history.replace('/links');
    }
  }

  onSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    if (password.length < 7) {
      return this.setState({
        error: 'Password must be greater than 6 characters ling'
      })
    }
    Accounts.createUser({email, password}, (err) => {
      if (err) {
        this.setState({
          error: err.reason
        })
      } else {
        this.setState({
          error: ''
        })
      }
    });
  }

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Join Short Lnk</h1>
          {this.state.error ? <p>{this.state.error}</p> : null}
          <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button className="button">Create Account</button>
          </form>
          <Link to='/'>Have an Account?</Link>
        </div>
      </div>

    )
  }
}