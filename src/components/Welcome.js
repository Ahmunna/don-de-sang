import React, { Component } from 'react'
import '../App.css';
export default class Welcome extends Component {
  render() {
    return (
        <div className="flexContainer">
        <div className="dashboard">
          <h1 className="Title">Bienvenue Adnane</h1>
          <button className="signupButton">Consulter l'historique des dons</button>
          <button className="signupButton">S'enregistrer pour un don de sang</button>
          <button className="signupButton">modifier le profil</button>
        </div>
      </div>
    )
  }
}
