import React, { Component } from 'react'
import '../App.css';
export default class Records extends Component {

  constructor()
  {
    super();
    this.state = {
      record : [],
      userId : 0
    }
    this.mapItems = this.mapItems.bind(this);
  }

  componentDidMount()
  {
    this.setState({
      userId : this.props.location.state.id
    }, (() => {

      fetch('http://localhost:8080/record/'+ this.state.userId + '/create',{

        method : 'GET',
        headers : {  "Content-Type" : "application/json"}
        })
        .then(response => response.json())
        .then(this.mapItems)
        
    }))
  }
  mapItems(data)
  {
    this.setState({
      record : data
    })
  }
  render() {
    const items = this.state.record.map(record => <div key={record.recordId} className="recordContainer"><h3>Record Id : {record.recordId}</h3><div> Record Date : {record.recordDate}</div></div>)
    return (
      <div>
        <h1 className="Title">Mes Enregistrements</h1>
        {items}
      </div>
    )
  }
}
