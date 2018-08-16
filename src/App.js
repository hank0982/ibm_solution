import React, { Component } from 'react';
import { Switch, Link, withRouter, BrowserRouter as Router, Route } from "react-router-dom";
import { Menu, Input, Icon } from 'semantic-ui-react';
import FooterUI from './components/FooterUI';
import Home from './pages/Home';
import CarIntro from './pages/CarIntro';
import './App.css';
/**
 * @function NoMatch
 * Return class when there is no match path 
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
 * Main react frontend class
 */
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchWord: undefined,
    }
  }
  /**
   * TODO: Extract the Menu from this component
   */
  render() {
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
                  onChange={(e) => this.setState({searchWord: e.target.value})}
                  transparent
                  icon={{ name: 'search', link: true }}
                  placeholder='Search cars...'
                />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} searchWord={this.state.searchWord} />} />
            <Route path="/car_intro" component={CarIntro} />
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
