import React, { Component } from 'react';
import { Container, Image, Grid, Segment, List, Statistic, Header, Icon} from 'semantic-ui-react';
import HeaderUI from '../../components/HeaderUI'; 
/**
 * @class CarIntro
 * @extends {Component}
 * @description This class is responsible for each car's own page
 */
class CarIntro extends Component {
  constructor(props){
    super(props);
    this.id = this.props.match.params.id;
  }
  componentWillMount() {
    const initCarData = JSON.parse(JSON.stringify(require('../carData')))[this.id];
    this.setState({
      carData: initCarData,
    });
  }
  render() {
    return (
      <div>
        <Container className="Site-content">
          <HeaderUI icon="car" content={this.id}/>
          <Grid stackable>
            <Grid.Row columns={'equal'}>
              <Grid.Column width={8}>
                <Segment>
                  <Image src={this.state.carData['imagePath']} fluid rounded/>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <HeaderUI content={'Maintenance Record'} as='h2'/>
                <Segment>
                <List>
                  <List.Item>
                    <List.Header>New York City</List.Header>
                    A lovely city
                  </List.Item>
                  <List.Item>
                    <List.Header>Chicago</List.Header>
                    Also quite a lovely city
                  </List.Item>
                  <List.Item>
                    <List.Header>Los Angeles</List.Header>
                    Sometimes can be a lovely city
                  </List.Item>
                  <List.Item>
                    <List.Header>San Francisco</List.Header>
                    What a lovely city
                  </List.Item>
                </List>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <HeaderUI content='Price' as='h2'/>
                <Statistic>
                  <Statistic.Value>${this.state.carData['price'].toLocaleString()}</Statistic.Value>
                  <Statistic.Label>TWD</Statistic.Label>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <HeaderUI content={'Introduction'} as='h2'/>
                <Segment>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <HeaderUI content={'Salesperson Info'} as='h2'/>
                <Segment>
                <Header as='h3' icon textAlign='center'>
                  <Icon name='user' circular />
                  <Header.Content>{this.state.carData['salesPerson']}</Header.Content>
                  {
                    Array
                  }
                </Header>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <HeaderUI content='Price Comparison' as='h2'/>
                
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default CarIntro;
