
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
/**
 * @class FooterUI
 * @extends {Component}
 * @description This class is responsible for footer
 * TODO: Should modify the content
 */
class FooterUI extends Component {  
  render() {
    return (
        <div className="ui inverted vertical footer segment" style={{marginTop:'20px'}}>
        <div className="ui center aligned container">
          <div className="ui stackable inverted divided grid">
            <div className="three wide column">
              <h4 className="ui inverted header">Pages</h4>
              <div className="ui inverted link list">
                <a href='#' className='item'>Home</a>
                <a href='#' className='item'>About</a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Blockchain</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">Immutable</a>
                <a href="#" className="item">Chaincode</a>
                <a href="#" className="item">Consensus</a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Hyperledger</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">Private and Permissioned</a>
                <a href="#" className="item">Channel </a>
                <a href="#" className="item">18 premier members</a>
              </div>
            </div>
            <div className="seven wide column">
              <h4 className="ui inverted header">AutoChain</h4>
              <p>By leveraging the power of Hyperledger, AutoChain aims to solve the information asymmetry in current second-handed car market.
</p>
            </div>
          </div>
          <div className="ui inverted section divider"></div>
          <div className="ui horizontal inverted small divided link list">
            <a className="item" href="#">Site Map</a>
            <a className="item" href="#">Contact Us</a>
            <a className="item" href="#">Terms and Conditions</a>
            <a className="item" href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterUI;

    