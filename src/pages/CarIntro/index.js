import React, { Component } from 'react';
import { Container, Image} from 'semantic-ui-react';
import HeaderUI from '../../components/HeaderUI'; 
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
      <Container className="Site-content">
        <HeaderUI content="Lexus-X1001" icon="car"/>
        <Image src='place_holder.png' width/>
      </Container>
    );
  }
}

export default CarIntro;
