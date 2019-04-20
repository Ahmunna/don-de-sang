import React, { Component } from 'react'

export default class RegisterReord extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="formContainer">
            <h3 style={{textAlign : 'center' , padding : '20px'}}>Prendre un rendez vous </h3>
            <div style={{textAlign : 'center' , padding : '20px'}}>
              <label for="recordDate">Choisissez une date   </label><br/>
              <input type="date" name="recordDate" />
            </div>
            <button className="signupButton">submit</button>
          </div>
        </form>
      </div>
    )
  }
}
