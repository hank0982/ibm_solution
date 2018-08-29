import React, { Component } from 'react';
import HeaderUI from '../../components/HeaderUI';
import ProductGrids from '../../components/ProductGrids'
import { Container } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'

/**
 * @function carDataGenerator
 * @param {Number} dataNum
 * @return {Array} data array of car data
 * @description This will generate random car data
 */
<<<<<<< HEAD
=======

>>>>>>> b43b1285f456fda1f8c6e30bc721fd14238f4c49

/**
 * @class Home
 * @extends {Component}
 * @prop {string} searchWord - The searchWord from menu bar
 * @description This class is responsible for main page
 */
class Home extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      carData: [],
      page: 1,
      no_auth: false
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
    if(this.state.no_auth){
      return <Redirect to="/qrcode"/>
    }
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
