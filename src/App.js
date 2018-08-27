import React, { Component } from 'react';
import { Switch, Link, withRouter, BrowserRouter as Router, Route } from "react-router-dom";
import { Menu, Input, Icon } from 'semantic-ui-react';
import FooterUI from './components/FooterUI';
import Home from './pages/Home';
import CarIntro from './pages/CarIntro';
import Qrcode from './pages/Qrcode'
import './App.css';
/**
 * @function NoMatch
 * @description Return class when there is no match path 
 */
const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);
/**
 * @class App
 * @extends {Component}
 * @description Main react frontend class
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: undefined,
      username: null,
      role: null
    }
    this.getUser = this.getUser.bind(this);
  }

  /* 
  * This function allows App to get username from qrcode page
  * which will thereby pass to qrcode page to get those params.
  */
  getUser(username_g, role_g){
    this.setState({
      username : username_g,
      role : role_g
    })
  }

  /**
   * TODO: Extract the Menu from this component
   */
  render() {
    //console.log(this.state.searchWord);
    //console.log(this.state.role,this.state.username);
    return (
      <div className="Site">
        <Router >
          <main className="Site-content">
            <Menu>
              <Link to="/">
                <Menu.Item name="home">
                  <Icon name='home' />
                  Home
              </Menu.Item>
              </Link>
              <Link to="/">
                <Menu.Item name="about">
                  <Icon name='info circle' />
                  Feature
              </Menu.Item>
              </Link>
              <Link to="/">
                <Menu.Item name="price">
                  <Icon name='dollar sign' />
                  Pricing
              </Menu.Item>
              </Link>
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Input
                    onChange={(e) => this.setState({ searchWord: e.target.value })}
                    transparent
                    icon={{ name: 'search', link: true }}
                    placeholder='Search cars...'
                  />
                </Menu.Item>
              </Menu.Menu>
            </Menu>
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} searchWord={this.state.searchWord} />} />
              <Route path="/car_intro/:id" component={CarIntro} />
              <Route path='/qrcode' render={(props) => <Qrcode {...props}  getUser={this.getUser}/>}/>
              <Route component={NoMatch} />
            </Switch>
          </main>
        </Router>
        <FooterUI />
      </div>
    );
  }
}

export default withRouter(App);
