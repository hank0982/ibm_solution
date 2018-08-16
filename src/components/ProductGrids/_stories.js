import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductGrids from './index';
const place_holder = "./place_holder.png";
const carData = [
  { auth: true, imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
  { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
  { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
  { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
  { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
  { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
  { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
  { imagePath: place_holder, header: 'Lexus', metaData:"2018-09-11", description:"this is goo"},
];
storiesOf('ProductGrids', module)
  .add('4 grids in one line', () => (
    <ProductGrids data={carData} gridInEachLine={4} />
  ))
  .add('3 grids in one line', () => (
    <ProductGrids data={carData} gridInEachLine={3} />
  ));