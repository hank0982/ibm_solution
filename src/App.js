import React, { Component } from 'react';
import { Redirect, Switch, Link, withRouter, BrowserRouter as Router, Route } from "react-router-dom";
import { Menu, Input, Icon } from 'semantic-ui-react';
import FooterUI from './components/FooterUI';
import Home from './pages/Home';
import CarIntro from './pages/CarIntro';
import Qrcode from './pages/Qrcode'
import Profile from './pages/Profile'
import About from './pages/About'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

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
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      searchWord: undefined,
      username: null,
      role: null
    }
    this.getUser = this.getUser.bind(this);
    this.cookies = this.props.cookies;
  }
  componentWillMount(){
    const userData = this.cookies.get('userData');
    if(!userData){
      this.setState({
        no_auth: true
      })
    }else{
      this.setState({
        username: userData.username,
        role: userData.role,
        image_src: userData.pic_src
      })
    }
  }
  /* 
  * This function allows App to get username from qrcode page
  * which will thereby pass to qrcode page to get those params.
  */
  getUser(username, role, image_src){
    this.setState({
      username,
      role,
      image_src
    })
  }
  /**
   * TODO: Extract the Menu from this component
   */
  render() {
    const { username } = this.state;
      return (
        <div className="Site">
          <Router >
            <main className="Site-content">
              <Menu stackable>
                <Menu.Item name="home">
                    Hello {username}
                  </Menu.Item>
                <Link to="/">
                  <Menu.Item name="home">
                    <Icon name='home' />
                    Home
                  </Menu.Item>
              </Link>
              <Link to="/about">
                <Menu.Item name="about">
                <Icon name='info circle' />
                About
                </Menu.Item>
              </Link>
              <Menu.Item name="about">
                We solve the information asymmetry for you

                </Menu.Item>
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
                <Route path="/about" component={About}/>
                <Route path="/profile" component={Profile}/>
                <Route path='/qrcode' render={(props) => <Qrcode {...props}  getUser={this.getUser}/>}/>)
                <Route component={NoMatch} />
              </Switch>
            </main>
          </Router>
          <FooterUI />
        </div>
      );
    }
}

export default withCookies(App);
