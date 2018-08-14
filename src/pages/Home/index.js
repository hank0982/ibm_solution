import React, { Component } from 'react';
import HeaderUI from '../../components/HeaderUI'
import { Container, Grid, Card, List, Sticky } from 'semantic-ui-react';
class Home extends Component {
  constructor(props){
    super(props);
  }
  carColumn = (imagePath, header, metaData, description) => {
    return <Grid.Column>
    <Card
      image={imagePath}
      header={header}
      meta={metaData}
      description={description}
    />
  </Grid.Column>
  }
  render() {
    return (
      <div>
      <Container>
        <HeaderUI icon="car" content="Cars"/>
        <Grid container columns={4}>
          {this.carColumn("./place_holder.png", "Lexus", "2018-09-11", "this is goo")}
          {this.carColumn("./place_holder.png", "Lexus", "2018-09-11", "this is goo")}
          {this.carColumn("./place_holder.png", "Lexus", "2018-09-11", "this is goo")}
          {this.carColumn("./place_holder.png", "Lexus", "2018-09-11", "this is goo")}
        </Grid>
        <Grid container columns={4}>
          {this.carColumn("./place_holder.png", "Lexus", "2018-09-11", "this is goo")}
          {this.carColumn("./place_holder.png", "Lexus", "2018-09-11", "this is goo")}
          {this.carColumn("./place_holder.png", "Lexus", "2018-09-11", "this is goo")}
          {this.carColumn("./place_holder.png", "Lexus", "2018-09-11", "this is goo")}
        </Grid>
      </Container>
      <Sticky bottomOffset={50} offset={50} pushing>
        <List floated='right' horizontal>
          <List.Item disabled href='#'>
            © GitHub, Inc.
          </List.Item>
          <List.Item href='#'>Terms</List.Item>
          <List.Item href='#'>Privacy</List.Item>
          <List.Item href='#'>Contact</List.Item>
        </List>

        <List horizontal>
          <List.Item href='#'>About Us</List.Item>
          <List.Item href='#'>Jobs</List.Item>
        </List>    
      </Sticky>
      </div>
    );
  }
}

export default Home;
