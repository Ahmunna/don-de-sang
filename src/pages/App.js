import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';
import { Route,  BrowserRouter as Router ,Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/contactUs" component={ContactUs} />
          </Switch>
        </div>
     </Router>
    );
  }
}

export default App;
