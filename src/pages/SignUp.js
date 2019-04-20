import React, { Component } from 'react'
import SignUpForm from '../components/SignUpForm';
export default class SignUp extends Component {
  render() {
    return (
      <div>
        <h1 className="Title" id="title">Inscription</h1>
        <SignUpForm />
      </div>
    )
  }
}
