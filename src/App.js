import React, { Component } from 'react';
import { Link, withRouter, BrowserRouter as Router, Route } from "react-router-dom";
import { Menu, MenuItem } from 'semantic-ui-react';
import Home from './pages/Home'
import CarIntro from './pages/CarIntro'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu>
            <Link to="/">
              <Menu.Item name="home">
              Home
              </Menu.Item>
            </Link>
          </Menu>
          <Route exact path="/" component={Home} />
          <Route path="/car_intro" component={CarIntro} />
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
