import React, { Component } from 'react'

export default class Settings extends Component {
  render() {
    return (
      <div>
          <form>
            <div className="formContainer">

              <label for="firstName">Prenom </label>
              <input type="text"  name="firstName"/>

              <label for="lastName">Nom</label>
              <input type="text"  name="lastName"/>

              <label for="email" > Email </label>
              <input type="text"  name="email"/>

              <label for="password">Password</label>
              <input type="password"  name="password"/>

              <button className="signupButton" style={{backgroundColor : 'green'}}>modifier</button>
              <button className="signupButton" style={{backgroundColor : 'red'}} >annuler</button>
            </div>
          </form>
      </div>
    )
  }
}
