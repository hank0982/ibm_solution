import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './index';

storiesOf('Button', module)
  .add('with color', () => (
    <Button basic color='red' content='Red' />
  ))
  .add('with icon', () => (
    <Button icon='world' />
  ));