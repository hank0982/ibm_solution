import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';

storiesOf('Button', module)
  .add('with color', () => (
    <Button basic color='red' content='Red' />
  ))
  .add('with icon', () => (
    <Button icon='world' />
  ));