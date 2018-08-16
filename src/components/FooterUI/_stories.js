import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import FooterUI from './index';

storiesOf('FooterUI', module)
  .add('footer UI ', () => (
    <FooterUI />
  ));