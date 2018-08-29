import React, { Component } from 'react';
import HeaderUI from '../../components/HeaderUI';
import { Container ,Segment, Table, Grid, List} from 'semantic-ui-react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import ProductGrids from '../../components/ProductGrids'
var Chance = require('chance');
const chance = new Chance();

/**
 * @class Home
 * @extends {Component}
 * @prop {string} searchWord - The searchWord from menu bar
 * @description This class is responsible for main page
 */
class Profile extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };
    constructor(props){
        super(props);
        this.userData = this.props.cookies.get('userData')
    }
    mainTenanceRecord = (dataNum) =>{
        const vin = chance.cf()
        const carParts = ['Air Bag', 'Air Cleaner','Stabilizer Bar','Steering Column','Piston','Cylinder Head','Valve']
        const actions = ['Fix', 'Change']
        let records = []
        records.push({
          text: 'Car vin is ' + vin,
          action: 'Info'
        })
        for(let i = 1; i < dataNum; i++){
          const dice = chance.integer({min: 0, max: 10})
          if(dice != 0){
            const action = actions[chance.integer({min:0, max:1})]
            records.push(
              {
                text: `${action} ${carParts[chance.integer({min:0, max:6})]}`,
                action: action
              }
            )
          }else{
            records.push(
                {
                  text: 'Transfer to ' + chance.name(),
                  action: 'Transfer'
                }
              )
            }
          }
          return records
      } 
    carDataGenerator = (dataNum) => {
        console.log(this.userData)
        const data = {};
        const carBrand = ['Lexus', 'BMW', 'Jaguar', 'Jeep', 'Chevrolet', 'Mitsubishi', 'Mini', 'Land Rover', 'Tesla', 'Saab', 'Lamborghini']
        const carClass = ['Economy', 'Compact', 'Standard', 'Compact SUV', 'Intermediate', 'Full Size', 'Intermediate SUV']
        for(let i = 1; i < dataNum; i++){
            const randomBrand = carBrand[Math.floor(Math.random() * carBrand.length)];
            const randomClass = carClass[Math.floor(Math.random() * carBrand.length)];
            const price = chance.integer({min: 100000, max: 1000000})
            const randomCarName = `${randomBrand}-${chance.character({ alpha: true, casing: 'upper' })}${Math.floor(Math.random() * 1000)}`;
            const address = chance.address();
            const phone = chance.phone();
            const username = this.userData.username
            data[randomCarName] = {
            price,
            className: randomClass,
            auth: Math.floor(Math.random() * 10) < 3 ? true : false,
            imagePath: "https://loremflickr.com/320/240/car,lexus,BMW,Jeep/all?lock="+i,
            header: randomCarName,
            metaData: chance.date({string: true}),
            description: chance.sentence({ words: 3 }),
            stars: chance.integer({max: 5, min: 0}),
            salesPerson: {
                name: `${username}`,
                address: `${address}`,
                phone: `${phone}`
            },
            mainTenanceRecord: this.mainTenanceRecord(chance.integer({min:1, max:10}))
            }
        }
        return data;
      }
    render() {
        return (
            <Container>
                <HeaderUI icon="user" content="User Profile"/>
                {/* <ProductGrids data={this.carDataGenerator(4)} gridInEachLine={4} lineInEachPage={1}/> */}
            </Container>
        )
        
    }
}

export default withCookies(Profile);
