import React, { Component } from 'react';
import { Link, withRouter, BrowserRouter as Router, Route } from "react-router-dom";
import { Menu, Input, Icon} from 'semantic-ui-react';
import FooterUI from './components/FooterUI';
import Home from './pages/Home';
import CarIntro from './pages/CarIntro';
import './App.css';

class App extends Component {
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
                  transparent
                  icon={{ name: 'search', link: true }}
                  placeholder='Search cars...'
                />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <Route exact path="/" component={Home} />
          <Route path="/car_intro" component={CarIntro} />
          
        </main>
      </Router>
      <FooterUI />
      </div>
    );
  }
}

export default withRouter(App);
