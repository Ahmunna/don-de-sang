import React, { Component } from 'react'

export default class RegisterReord extends Component {
  
  constructor()
  {
    super();
    this.state = {
      recordDate : '',
      userId : {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount()
  {
    console.log(this.props)
    this.setState({
      userId: this.props.location.state.id
    })
  }
  handleSubmit(event)
  {
      event.preventDefault();
      fetch('http://localhost:8080/record/'+this.state.userId+'/create',
      {
        method : 'POST',
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          recordDate : this.state.recordDate
        })
      }).then(Response => console.log(Response.status)) 
  }
  handleChange(event)
  {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="formContainer">
            <h3 style={{textAlign : 'center' , padding : '20px'}}>Prendre un rendez vous </h3>
            <div style={{textAlign : 'center' , padding : '20px'}}>
              <label for="recordDate">Choisissez une date   </label><br/>
              <input type="date" name="recordDate"  value={this.state.recordDate} onChange={this.handleChange}/>
            </div>
            <button className="signupButton" type="submit">submit</button>
          </div>
        </form>
      </div>
    )
  }
}
