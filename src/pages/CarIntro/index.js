import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import HeaderUI from '../../components/HeaderUI';
/**
 * @class CarIntro
 * @extends {Component}
 * @description This class is responsible for each car's own page
 */
class CarIntro extends Component {
  constructor(props){
    super(props);
    this.id = this.props.match.params.id;
  }

  render() {
    return (
      <div>
        <Container className="Site-content">
          <HeaderUI icon="car" content={this.id}/>
        </Container>
      </div>
    );
  }
}

export default CarIntro;
