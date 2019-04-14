import React, { Component } from 'react'
import '../App.css';
import {Link} from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
            <nav className="navbar">
                <span className="navbar-toggle" id="js-navbar-toggle">
                    <i className="fas fa-bars"></i>
                </span>
                <Link to="/" className="logo">logo</Link>
                <ul className="main-nav" id="js-menu">
                    <li className="active"> 
                        <Link to="/" className="nav-links ">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/contactUs" className="nav-links">Nous Contacter</Link>
                    </li>
                    <li>
                        <Link to="/aboutUs" className="nav-links">Qui Sommes Nous ?</Link>
                    </li>
                    <li>
                        <Link to="/map" className="nav-links">Où donner du sang ?</Link>
                    </li>
                </ul>
               
            </nav>
    )
  }
}
