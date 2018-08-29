import React, { Component } from 'react';
import { Container, Image, Grid, Segment, List, Statistic, Header, Icon, Label} from 'semantic-ui-react';
import HeaderUI from '../../components/HeaderUI'; 
import PriceComparison from './PriceComparison'; 
/**
 * @class CarIntro
 * @extends {Component}
 * @description This class is responsible for each car's own page
 */
const action_color_mapping = {
  Fix:'red',
  Change: 'orange',
  Info: 'blue',
  Transfer: 'green'
}
class CarIntro extends Component {
  constructor(props){
    super(props);
    //this.id = this.props.match.params.id;
  }
  componentWillMount() {
    const initCarData = JSON.parse(JSON.stringify(require('../carData')));
    this.setState({
      allCarData: initCarData,
    });
  }
  render() {
<<<<<<< HEAD
    const id = this.props.match.params.id;
    const carData = this.state.allCarData[id];
=======
    const star_list = []
      for(let i = 1; i <= 5; i ++){
        if(i <= Number(
          this.state.carData['stars']
        )){
          star_list.push(<Icon  color='yellow' name='star' />)
        }else{
          star_list.push(<Icon name='star outline' disabled/>)
        }
      }
>>>>>>> b43b1285f456fda1f8c6e30bc721fd14238f4c49
    return (
      <div>
        <Container className="Site-content">
          <HeaderUI icon="car" content={id}/>
          <Grid stackable>
          
            <Grid.Row columns={'equal'}>
              <Grid.Column width={8}>
                <Segment>
                  <Image src={carData['imagePath']} fluid rounded/>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <HeaderUI content={'Maintenance Record'} as='h2'/>
                <Segment>
                <List size='tiny' relaxed >
                  {
                    this.state.carData['mainTenanceRecord'].map((data)=>{
                      return <List.Item>
                        <Label color={action_color_mapping[data.action]} size='tiny' horizontal>{data.action}</Label>
                        {data.text}
                        </List.Item>
                    })
                  }
                </List>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <HeaderUI content='Price' as='h2'/>
                <Statistic>
                  <Statistic.Value>${carData['price'].toLocaleString()}</Statistic.Value>
                  <Statistic.Label>TWD</Statistic.Label>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <HeaderUI content={'Introduction'} as='h2'/>
                <Segment>
                {this.state.carData.auth == true? 
                <Label as='a' color='red' ribbon>
                <Icon name='thumbs up'/>
                  Authenticated
                </Label> : null}
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <HeaderUI content={'Salesperson Info'} as='h2'/>
                <Segment >
                <Header as='h3' icon textAlign='center'>
                  <Icon name='user' circular />
<<<<<<< HEAD
                  <Header.Content>{carData['salesPerson']}</Header.Content>
=======
                  <Header.Content>
                    {this.state.carData['salesPerson'].name}
                  </Header.Content>
>>>>>>> b43b1285f456fda1f8c6e30bc721fd14238f4c49
                </Header>
                
                <List>
                  <List.Item>
                    <List.Content floated='left'>
                      <Label color='yellow' horizontal>Stars</Label>
                    </List.Content>
                    <List.Content floated='right'>
                      {star_list}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content floated='left'>
                    <Label color='green' horizontal>Address</Label> 
                    </List.Content>
                    <List.Content floated='right'>
                    {this.state.carData['salesPerson'].address}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                  <List.Content floated='left'>
                  <Label color='blue' horizontal>Phone</Label>
                    </List.Content>
                    <List.Content floated='right'>
                    {this.state.carData['salesPerson'].phone}
                    </List.Content>
                  </List.Item>
                </List>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <HeaderUI content='Price Comparison' as='h2'/>
                <Segment>
                  <PriceComparison id={id}/>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default CarIntro;
