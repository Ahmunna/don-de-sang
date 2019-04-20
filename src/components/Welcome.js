import React, { Component } from 'react'
import '../App.css';
import {Link} from 'react-router-dom';
export default class Welcome extends Component {
  render() {
    return (
      
        <div className="flexContainer">
        <div className="dashboard">
          <h1 className="Title">Bienvenue Adnane</h1>
          <Link className="signupButton" style={{textDecoration : 'none' , textAlign : 'center'}} to="/dashboard/record">Consulter l'historique des dons</Link>
          <Link className="signupButton" style={{textDecoration : 'none' , textAlign : 'center'}} to="/dashboard/create">S'enregistrer pour un don de sang</Link>
          <Link className="signupButton" style={{textDecoration : 'none' , textAlign : 'center'}} to="/dashboard/settings">modifier le profil</Link>
          
        </div>
      </div>
    )
  }
}
