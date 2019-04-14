import React, { Component } from 'react'
import '../App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class GoogleMap extends Component {

constructor(props)
{
  super(props);
  this.state = {
    center : {
        lat :31.630000,
        lng :  -8.008889
    },
    zoom : 10,
    CRTS : 
    {
      lat : 31.640671,
      lng : -8.014984
    }
};
}
  render() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <h1 className="Title">Centre régional de transfusion sanguine de Marrakech</h1>
        <Map
          google={this.props.google}
          zoom={this.state.zoom}
          center={this.state.center}
          style={{width : '50%' , height : '50%' , margin : '0 auto'}}
        >
          <Marker  position={this.state.CRTS}/>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey : 'AIzaSyCbatbtjxT_4UVqhhy_YbjREuOp42QxwJ8'
})(GoogleMap)