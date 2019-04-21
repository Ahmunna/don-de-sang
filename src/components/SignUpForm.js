import React, { Component } from 'react'
import '../App.css';
import {withRouter} from 'react-router-dom';
class SignUpForm extends Component {

    constructor()
    {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.state = {

        firstName : '',
        lastName : '',
        email : '',
        password : '',
        gender : 'male',
        bloodType : 'A',
        rhesus : '+'
      }
    }
   
    //function to handle the submit button
    handleSubmit(event)
    {
      event.preventDefault();
        fetch('http://localhost:8080/user',
        {
          method : 'POST',
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            password : this.state.password,
            gender : this.state.gender,
            bloodType : this.state.bloodType,
            rhesus : this.state.rhesus
          })
        }).then( () => this.props.history.push({ pathname : '/signIn' , state : { firstName : this.state.firstName}})  )
        
    }
    //function to handle the change of an input
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
        <form  onSubmit={this.handleSubmit}>
            <div className="formContainer">

                <label htmlFor="firstName"><b>Prenom</b></label>
                <input type="text" placeholder="Entrer prénom" name="firstName" value={this.state.firstName} required onChange={this.handleChange} />

                <label htmlFor="lastName"><b>Nom</b></label>
                <input type="text" placeholder="Entrer nom" name="lastName" value={this.state.lastName} required onChange={this.handleChange} />

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Entrer Email" name="email" value={this.state.email} required onChange={this.handleChange} />

                <label htmlFor="password"><b>Mot de passe</b></label>
                <input type="text" placeholder="Entrer mot de passe" name="password" value={this.state.password} required onChange={this.handleChange}/>
                
                <label htmlFor="gender"><b>Genre</b></label>
                <select name="gender" value={this.state.gender} onChange={this.handleChange}>
                  <option  value="male">male</option>
                  <option value="female">femelle</option>
                </select>
                <br/><br/> 


                <label htmlFor="bloodType"><b>Groupe Sanguin</b></label>
                <select name="bloodType" value={this.state.bloodType} onChange={this.handleChange}>
                    <option  value="A" >A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                </select>

                <label htmlFor="rhesus"><b>Rhésus</b></label>
                <select name="rhesus" value={this.state.rhesus} onChange={this.handleChange}>
                    <option  value="+" >+</option>
                    <option value="-">-</option>               
                </select>

                <button className="signupButton"  id="test" type="submit">S'inscrire</button>
            </div>  
        </form>

      </div>
    )
  }
}

export default withRouter(SignUpForm)