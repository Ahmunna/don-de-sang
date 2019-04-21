import React, { Component } from 'react'
import '../App.css';
import {Link} from 'react-router-dom';
export default class Register extends Component {
  render() {
    return (
        <div className="register">
            <Link to="/signIn" className="button">Commencer</Link>
        </div>

    )
  }
}
