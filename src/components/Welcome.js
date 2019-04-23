import React, { Component } from 'react'
import '../App.css';
import {Redirect,Link,withRouter} from 'react-router-dom';
class Welcome extends Component {

  constructor()
  {
    super();
    this.state = {
      user : {}
    }
  }
 componentDidMount()
 {
   this.setState({
     user : this.props.location.state.user
   })
 }
  render() {

    if(this.props.location.state === undefined)
    {
      return <Redirect to={{pathname : '/signIn'}}/>
    }
    return (
        <div className="flexContainer">
        <div className="dashboard">
          <h1 className="Title">Bienvenue {this.state.user.firstName}</h1>
          <Link className="signupButton" style={{textDecoration : 'none' , textAlign : 'center'}} to={{pathname : "/dashboard/record" , state : {id : this.state.user.id}}}>Consulter l'historique des dons</Link>
          <Link className="signupButton" style={{textDecoration : 'none' , textAlign : 'center'}} to={{pathname : "/dashboard/createRecord" , state : {id : this.state.user.id}}}>S'enregistrer pour un don de sang</Link>
          <Link className="signupButton" style={{textDecoration : 'none' , textAlign : 'center'}} to={{pathname : "/dashboard/settings" , state : {id : this.state.user.id}}}>modifier le profil</Link>
          
        </div>
      </div>
    )
  }
}
export default withRouter(Welcome);
