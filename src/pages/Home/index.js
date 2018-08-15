import React, { Component } from 'react';
import HeaderUI from '../../components/HeaderUI';
import ProductGrids from '../../components/ProductGrids'
import { Container, List, Sticky } from 'semantic-ui-react';
const place_holder = "./place_holder.png";
const carData = [
  [{ imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
  { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
  { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
  { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"}],
  [{ imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
  { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
  { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
  { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"}]
];
class Home extends Component {

  render() {
    return (
      <div>
      <Container className="Site-content">
        <HeaderUI icon="car" content="Cars"/>
        <ProductGrids gridInEachLine={4} data={carData} />
      </Container>
      
      </div>
    );
  }
}

export default Home;
