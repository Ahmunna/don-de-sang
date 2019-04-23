import React, { Component } from 'react'
import Welcome from '../components/Welcome';
import Settings from '../components/Settings';
import Records from '../components/Records';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import RegisterRecord from '../components/RegisterRecord';
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1 className="Title">Dashboard</h1>
        <Router>
          <Switch>
            <Route path="/dashboard" exact  component={Welcome}/>
            <Route path="/dashboard/settings" component={Settings} />
            <Route path="/dashboard/record" component={Records} />
            <Route path="/dashboard/createRecord" component={RegisterRecord} />
          </Switch>
        </Router>
        
      </div>
    )
  }
}
