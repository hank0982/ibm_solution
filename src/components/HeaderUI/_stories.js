import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderUI from './index';

storiesOf('HeaderUI')
  .add('world', () => (
    <HeaderUI content={'This is great'} icon={'world'}/>
  ));