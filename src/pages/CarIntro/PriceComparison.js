import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {List, Label} from 'semantic-ui-react'
import './PriceComparison.css';
/**
 * @class PriceComparison
 * @extends {Component}
 * @description This class is compare cars of same class 
 */
function compare(a,b) {
  if (a.diff < b.diff)
    return -1;
  if (a.diff > b.diff)
    return 1;
  return 0;
}

class PriceComparison extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    const initCarData = JSON.parse(JSON.stringify(require('../carData')));
    this.setState({
      carData: initCarData,
    });
  }
  render() {
    const { id } = this.props;
    const similarCar = [];
    const carData = this.state.carData;
    const carHeader = Object.keys(carData);
    for ( let i = 0; i < carHeader.length; i += 1) {
      if(carData[carHeader[i]].className === carData[id].className && carData[carHeader[i]] !== carData[id]){
        similarCar.push({
          name: carHeader[i],
          price: carData[carHeader[i]].price,
          diff: Math.abs(carData[carHeader[i]].price-carData[id].price),
        });
      }
    }
    similarCar.sort(compare);
    const carShowInDiv = [];
    for( let i = 0; i < 4; i += 1) {
      carShowInDiv.push(similarCar[i]); 
      if(i === similarCar.length-1) break;
    }
    return (
      <div>
      <Label as='a' color='red' ribbon>
          You may want to see ...
        </Label>
        <List animated>
            {carShowInDiv.map(car => 
              (
                <List.Item as='a'>
                <List.Content floated='right'>
                  <Label tag color='green' horizontal size='small'>${car.price}</Label>
                  </List.Content>
                  <List.Content >
                  <Link to={`/car_intro/${car.name}`} key={car.name}>{car.name}</Link>
                  </List.Content>
                  
                </List.Item>
              ))}
        </List>
      </div>
    );
  }
}

export default PriceComparison;
