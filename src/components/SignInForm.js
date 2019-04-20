import React, { Component } from 'react'
import '../App.css';
import {Link} from 'react-router-dom';
export default class SignInForm extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
    
    }
  }
  render() {
    return (
      <div>
           <form>
            <div className="formContainer">

                <label for="email">Email</label>
                <input type="text" name="email" />

                <label form="motdepasse">Mot de Passe</label>
                <input type="password" name="password" />
                
                <button type="submit" className="signupButton">Se connecter</button>
                <Link to="#" className="signinLink" >Mot de passe Oublié ?</Link><br/>
                <Link to="/signUp" className="signinLink" >Vous n'avez pas de compte ? inscrivez vous</Link><br/>

            </div>
        </form>

      </div>
    )
  }
}
