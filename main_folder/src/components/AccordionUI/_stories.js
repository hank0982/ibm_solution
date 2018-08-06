import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Accordion from './index';

storiesOf('Accordion', module)
  .add('with text', () => (
    <Accordion preload/>
  ));