import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderUI from '../../components/HeaderUI';
import ProductGrids from '../../components/ProductGrids'
import { Container } from 'semantic-ui-react';
import Chance from 'chance';
const chance = new Chance();
/**
 * @function carDataGenerator
 * @param {Number} dataNum
 * @return {Array} data array of car data
 * @description This will generate random car data
 */
const carDataGenerator = (dataNum) => {
  const data = [];
  const carBrand = ['Lexus', 'BMW', 'Jaguar', 'Jeep', 'Chevrolet', 'Mitsubishi', 'Mini', 'Land Rover', 'Tesla', 'Saab', 'Lamborghini']
  for(let i = 1; i < dataNum; i++){
    const randomCarName = carBrand[Math.floor(Math.random() * carBrand.length)];
    data.push({
      auth: Math.floor(Math.random() * 10) < 3 ? true : false,
      imagePath: "https://loremflickr.com/320/240/car,lexus,BMW,Jeep/all?random="+i,
      header: `${randomCarName}-${chance.character({ alpha: true, casing: 'upper' })}${Math.floor(Math.random() * 1000)}`,
      metaData: chance.date({string: true}),
      description: chance.sentence({ words: 3 }),
      salesPerson: chance.first() + chance.last()
    })
  }
  return data;
}
/**
 * @class Home
 * @extends {Component}
 * @prop {string} searchWord - The searchWord from menu bar
 * This class is responsible for main page
 */
class Home extends Component {
  render() {
    const { searchWord } = this.props;
    const carData = carDataGenerator(29);
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
