import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-xs-12 ">
            <p>Content space for bx--col-xs-12 bx--col-sm-6</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
