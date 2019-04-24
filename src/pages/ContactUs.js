import React, { Component } from 'react'

export default class ContactUs extends Component {
  constructor()
  {
    super();
    this.state = {
      email : '',
      message : '',
      subject : '',
      result : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }
  handleSubmit(event)
  {
      event.preventDefault();
      fetch('http://localhost:8080/contact',{
        method : 'POST',
        headers : {"content-type" : "application/json"},
        body : JSON.stringify({
          from : this.state.email,
          to : "dondesang2019@gmail.com",
          subject : this.state.subject,
          text : this.state.message
        })
      }).then(Response => Response.json())
      .then(data => this.handleResponse(data))
  } 
  handleChange(event)
  {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleResponse(res)
  {
    if(res === true)
    {
        this.setState({
          result : 'success'
        })
    }
    else
    {
      this.setState({
        result : 'error'
      })
    }
  }
  render() {
    return (
      <div className="formContainer" style={{marginTop : 50}}>
      <h1 style={{textAlign : 'center'}}>Nous Contacter</h1>
      <h2 style={{color : 'black' , textAlign : 'center'}}>{this.state.result}</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email" >Email</label>
          <input type="text" name="email" value={this.state.email}  onChange={this.handleChange}/>
          <label htmlFor="subject" >Sujet</label>
          <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} />
          <label htmlFor="message">Message</label>
          <textarea  name="message" value={this.state.message}  onChange={this.handleChange}/>
          <button type="submit" className="signupButton">Envoyer</button>
        </form>
      </div>
    )
  }
}
