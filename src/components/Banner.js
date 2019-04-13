import React, { Component } from 'react'
import '../App.css';
import banner from '../assets/images/banner-8.jpg';
export default class Banner extends Component {
  render() {
    return (

        <div className="affiche">
            <h2 className="texteAffiche">Donnez du sang,Sauvez une vie</h2>
            <img src= {banner} className="imageAffiche" alt="banner"/>
         </div>

    )
  }
}
