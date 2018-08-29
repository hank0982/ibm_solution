import React, { Component } from 'react';
import HeaderUI from '../../components/HeaderUI';
import ProductGrids from '../../components/ProductGrids'
import { Container } from 'semantic-ui-react';
//import Chance from 'chance';
//const chance = new Chance();
/**
 * @function carDataGenerator
 * @param {Number} dataNum
 * @return {Array} data array of car data
 * @description This will generate random car data
 */

/**
 * @class Home
 * @extends {Component}
 * @prop {string} searchWord - The searchWord from menu bar
 * @description This class is responsible for main page
 */
class Home extends Component {
  constructor(){
    super();
    this.state = {
      carData: [],
      //carShow: [],
      page: 1,
    };
    this.handleCarShowChange = this.handleCarShowChange.bind(this);
  }


  handleCarShowChange(searchWord) {
    let newCarFilter = [];
    const carData = this.state.carData;
    if (searchWord === undefined || searchWord === ' ') {
      newCarFilter = carData;
    }

    else{
      const carHeader = Object.keys(carData);
      for ( let i = 0; i < carHeader.length; i += 1) {
        if (carHeader[i].toLowerCase().indexOf(searchWord.toLowerCase())>-1) {
          newCarFilter.push(carData[carHeader[i]]);
        }
      }
    }
    
    return newCarFilter;
  }

  componentWillMount() {
    const initCarData = JSON.parse(JSON.stringify(require('../carData')));
    this.setState({
      carData: initCarData,
    });
  }

  render() {
    const { searchWord } = this.props;
    const carShow = this.handleCarShowChange(searchWord);
    return (
      <div>
      <Container className="Site-content">
        <HeaderUI icon="car" content="Cars"/>
        <ProductGrids
          page={this.state.page}
          gridInEachLine={4}
          lineInEachPage={4}
          data={carShow}
        />
      </Container>
      </div>
    );
  }
}

export default Home;
