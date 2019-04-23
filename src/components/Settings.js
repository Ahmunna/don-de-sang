import React, { Component } from 'react'
export default class Settings extends Component {

  constructor()
  {
    super();

    this.state = {
      firstName : '',
      lastName : '',
      email : '',
      password : '',
      message : '',
    }
    this.id = 1;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleSubmit(event)
  {
    event.preventDefault();
    fetch('http://localhost:8080/user/modify/'+ this.id,{
      method : 'PUT',
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        firstName : this.state.firstName,
        lastName : this.state.lastName,
        email : this.state.email,
        password : this.state.password
      })
    }).then(response => {
        const msg = response.status === 200 ? 'success' : 'error'
        this.setState({
          message : msg
        })
    } )
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
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <div className="formContainer">
                <h2 style={{color : 'black' , textAlign : 'center' }}>{this.state.message}</h2>
              <label for="firstName">Prenom </label>
              <input type="text"  name="firstName" value={this.state.firstName} onChange={this.handleChange}/>

              <label for="lastName">Nom</label>
              <input type="text"  name="lastName" value={this.state.lastName} onChange={this.handleChange}/>

              <label for="email" > Email </label>
              <input type="text"  name="email" value={this.state.email} onChange={this.handleChange}/>

              <label for="password">Password</label>
              <input type="password"  name="password" value={this.state.password} onChange={this.handleChange}/>

              <button className="signupButton" style={{backgroundColor : 'green'}} type="submit">modifier</button>
              <button className="signupButton" style={{backgroundColor : 'red'}} >annuler</button>
            </div>
          </form>
      </div>
    )
  }
}
