import React, { Component } from 'react'

export default class ContactUs extends Component {
  constructor()
  {
    super();
    this.state = {
      email : '',
      message : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event)
  {

  }
  handleChange(event)
  {

  }
  render() {
    return (
      <div className="formContainer" style={{marginTop : 50}}>
      <h1 style={{textAlign : 'center'}}>Nous Contacter</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email" >Email</label>
          <input type="text" name="email" value={this.state.email}  onChange={this.handleChange}/>
          <label htmlFor="message">Message</label>
          <textarea  name="message" value={this.state.message}  onChange={this.handleChange}/>
          <button type="submit" className="signupButton">Envoyer</button>
        </form>
      </div>
    )
  }
}
