import React, { Component } from 'react'
import '../App.css';
import adnane from '../assets/images/adnane.jpg';
import ayoub from '../assets/images/ayoub.jpg';

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="card">
        <div className="cardImage">
          <img alt="portrait" src={adnane}/>
        </div>
        <div className="cardInformations">
          <h2>Adnane Hmunna</h2>
          <p><b>Email</b> : adn.hmunna@gmail.com</p>
          <p><b>Telephone</b> : +212641422333</p>
          <p><b>Github</b> : www.github.com/Ahmunna</p>
        </div>
        </div>
        <div className="card">
        <div className="cardImage">
          <img alt="portrait" src={ayoub}/>
        </div>
        <div className="cardInformations">
          <h2>Ayoub Echtaibi</h2>
          <p><b>Email</b> : ayoub.echtaibi@outlook.com</p>
          <p><b>Telephone</b> : +212675365675</p>
          <p><b>Github</b> : www.github.com/ayoubechtaibi</p>
        </div>
        </div>
      </div>
    )
  }
}
