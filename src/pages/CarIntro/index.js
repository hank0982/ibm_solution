import React, { Component } from 'react';
/**
 * @class CarIntro
 * @extends {Component}
 * This class is responsible for each car's own page
 */
class CarIntro extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-xs-12 ">
            <p>car intro</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CarIntro;
