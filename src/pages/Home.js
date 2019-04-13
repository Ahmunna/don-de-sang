import React, { Component } from 'react'
import Banner from '../components/Banner';
import Information from '../components/Information';
import Register from '../components/Register';
export default class Home extends Component {
  render() {
    return (
      <div>
         <Banner />
          <Information />
          <Register />
      </div>
    )
  }
}
