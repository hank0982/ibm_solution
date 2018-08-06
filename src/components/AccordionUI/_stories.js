import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AccordionUI from './index';

storiesOf('Accordion', module)
  .add('preload', () => (
    <AccordionUI preload/>
  ))
  .add('with elements', () => (
    <AccordionUI elements = {[
      {
        open: true,
        child: <p>test</p>,
        title: 'test',
        key: 1
      },
    ]}/>
  ));