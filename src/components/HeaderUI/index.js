import React, { Component } from 'react';
import {Header, Icon} from 'semantic-ui-react';
/**
 * @class HeaderUI
 * @extends {Component}
 * @prop {string} content - the text in header 
 * @prop {string} icon - the icon id
 * @description This class will generate Header 
 */
class HeaderUI extends Component {
  render() {
    const { content, icon } = this.props;
    return (
        <Header as = 'h2'>
            <Icon name = { icon } />
            <Header.Content>{ content }</Header.Content>
        </Header>
    );
  }
}

export default HeaderUI;
