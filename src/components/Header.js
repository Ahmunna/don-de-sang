import React, { Component } from 'react'
import '../App.css';
import {NavLink} from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
            <nav className="navbar">
                <span className="navbar-toggle" id="js-navbar-toggle">
                    <i className="fas fa-bars"></i>
                </span>
                <NavLink to="/" className="logo">logo</NavLink>
                <ul className="main-nav" id="js-menu">
                    <li className="active"> 
                        <NavLink  to="/" className="nav-links ">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contactUs" className="nav-links">Nous Contacter</NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutUs" className="nav-links">Qui Sommes Nous ?</NavLink>
                    </li>
                    <li>
                        <NavLink to="/map" className="nav-links">Où donner du sang ?</NavLink>
                    </li>
                </ul>
               
            </nav>
    )
  }
}
