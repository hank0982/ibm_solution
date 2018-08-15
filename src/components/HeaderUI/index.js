import React, { Component } from 'react';
import {Header, Icon} from 'semantic-ui-react';
class HeaderUI extends Component {
  render() {
    const {content, icon} = this.props;
    return (
        <Header as='h2'>
            <Icon name={icon} />
            <Header.Content>{content}</Header.Content>
        </Header>
    );
  }
}

export default HeaderUI;
