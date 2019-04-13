import React, { Component } from 'react'
import '../App.css';
import {Link} from 'react-router-dom';
export default class SignInForm extends Component {
  render() {
    return (
      <div>
           <form>
            <div class="formContainer">

                <label for="email">Email</label>
                <input type="text" name="email" />

                <label form="motdepasse">Mot de Passe</label>
                <input type="password" name="password" />
                
                <button type="submit" class="signupButton">Se connecter</button>
                <Link to="#" class="signinLink" >Mot de passe Oublié ?</Link><br/>
                <Link to="/signUp" class="signinLink" >Vous n'avez pas de compte ? inscrivez vous</Link><br/>

            </div>
        </form>

      </div>
    )
  }
}
