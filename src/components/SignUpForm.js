import React, { Component } from 'react'
import '../App.css';
export default class SignUpForm extends Component {
  render() {
    return (
      <div>
        <form method="GET">
            <div className="formContainer">

                <label for="prenom"><b>Prenom</b></label>
                <input type="text" placeholder="Entrer prénom" name="prenom" required />

                <label for="nom"><b>Nom</b></label>
                <input type="text" placeholder="Entrer nom" name="nom" required />

                <label for="telephone"><b>Telephone</b></label>
                <input type="text" placeholder="Entrer telephone" name="telephone" required />

                <label for="Email"><b>Email</b></label>
                <input type="text" placeholder="Entrer Email" name="Email" required />

                <label for="motdepasse"><b>Mot de passe</b></label>
                <input type="text" placeholder="Entrer mot de passe" name="motdepasse" required />
                
                <label for="genre"><b>Genre</b></label>
                <input type="radio" id="masculin" />
                <label for="masculin">masculin</label>
                <input type="radio" id="masculin" />
                <label for="feminin">Féminin</label>
                <br/><br/> 


                <label for="groupeSanguin"><b>Groupe Sanguin</b></label>
                <select>
                    <option>A</option>
                    <option>B</option>
                    <option>AB</option>
                    <option>O</option>
                </select>

                <label for="rhesus"><b>Rhésus</b></label>
                <select>
                    <option>+</option>
                    <option>-</option>               
                </select>

                <button className="signupButton"  id="test"type="submit">S'inscrire</button>
            </div>  
        </form>

      </div>
    )
  }
}
