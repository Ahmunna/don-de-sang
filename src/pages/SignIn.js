import React, { Component } from 'react'
import SignInForm from '../components/SignInForm';

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <h1 class="Title">Connexion</h1>
        <SignInForm />
      </div>
    )
  }
}
