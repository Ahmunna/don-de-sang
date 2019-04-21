import React, { Component } from 'react'
import '../App.css';
import {Link,withRouter} from 'react-router-dom';
class SignInForm extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      email : '',
      password : '',
      errorMessage : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleSubmit(event)
  {
    event.preventDefault();
    fetch('http://localhost:8080/login',{
      method : 'POST',
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        email : this.state.email,
        password : this.state.password
      })
    })
    .then(response => {
      const contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1 )
      {
        return response.json().then(data => this.props.history.push({
          pathname : '/dashboard',
          state : { id : data.id , firstName : data.firstName}
        }) )
      }
      else
      {
        this.setState({
          errorMessage : 'email ou mot de passe incorrect'
        })
      }
    })

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

    handleRedirect(Response)
    {
      const data = JSON.parse(Response);
      console.log(data);
    }


  render() {
    return (
      <div>
           <form onSubmit={this.handleSubmit}>
            <div className="formContainer">
                <h2 style={{textAlign : 'center' , color : 'red'}}>{this.state.errorMessage}</h2>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />

                <label htmlFor="motdepasse">Mot de Passe</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                
                <button type="submit" className="signupButton">Se connecter</button>
                <Link to="#" className="signinLink" >Mot de passe Oublié ?</Link><br/>
                <Link to="/signUp" className="signinLink" >Vous n'avez pas de compte ? inscrivez vous</Link><br/>

            </div>
        </form>

      </div>
    )
  }
}
export default withRouter(SignInForm);