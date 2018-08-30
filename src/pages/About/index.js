import React, { Component } from 'react';
import HeaderUI from '../../components/HeaderUI';
import { Container ,Segment, Table, Grid, List, Header, Icon} from 'semantic-ui-react';
const square = { width: '100%', height: '100%' }


/**
 * @class Home
 * @extends {Component}
 * @prop {string} searchWord - The searchWord from menu bar
 * @description This class is responsible for main page
 */
class About extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (<Container>
            <HeaderUI icon='settings' content="About AutoChain"/>
            <HeaderUI content="Mission Statement" as="h3"/>
            <Segment color='red'>
                By leveraging the power of Hyperledger, AutoChain aims to solve the information asymmetry in current second-handed car market.
            </Segment>
            <HeaderUI content="Current Market" as="h3"/>

            <Segment color='blue'>
            <Grid container columns={2}>
                <Grid.Column>
                
                <HeaderUI content="Second-handed cars versus new cars (Ratio) in 2017" as="h3"/>
                <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Country</Table.HeaderCell>
                    <Table.HeaderCell>Ratio (new/second-handed)</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>America</Table.Cell>
                        <Table.Cell>2.4</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>China</Table.Cell>
                        <Table.Cell>0.4</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Taiwan</Table.Cell>
                        <Table.Cell>1.4</Table.Cell>
                    </Table.Row>
                </Table.Body>
                
            </Table>
                </Grid.Column>
                <Grid.Column>
                <HeaderUI content="Customer Compaints for Car in Taiwan (Ranked)" as="h3"/>
                <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Year</Table.HeaderCell>
                    <Table.HeaderCell>Ranking</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>2015</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2013</Table.Cell>
                        <Table.Cell>4</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2012</Table.Cell>
                        <Table.Cell>4</Table.Cell>
                    </Table.Row>
                </Table.Body>
                
            </Table>
                </Grid.Column>
            </Grid>
            </Segment>
            <HeaderUI content="Why Blockchain?" as="h3"/>
            <Segment color='green'>
                <Grid columns={3}>
                    <Grid.Column>
                        <Header as='h2' icon textAlign='center'>
                        <Icon name='balance scale' circular/>
                        <Header.Content>Immutable</Header.Content>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h2' icon textAlign='center'>
                        <Icon name='settings' circular/>
                        <Header.Content>Smart Contract</Header.Content> 
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h2' icon textAlign='center'>
                        <Icon name='book' circular/>
                            Consensus
                        </Header>
                    </Grid.Column>
                </Grid>
        
            </Segment>
            <HeaderUI content="Why Hyperledger?" as="h3"/>
            <Segment color='brown'>
            <Grid columns={3}>
                    <Grid.Column>
                    <Header as='h2' icon textAlign='center'>
                    <Icon name='pencil alternate' circular/>
                    <Header.Content>Auditability</Header.Content>
                    <Header.Subheader>
                    </Header.Subheader>
                    </Header>
                    </Grid.Column>
                    <Grid.Column>
                    <Header as='h2' icon textAlign='center'>
                    <Icon name='chain' circular/>
                        Channel
                    <Header.Subheader>
                    </Header.Subheader>
                    </Header>
                    </Grid.Column>
                    <Grid.Column>
                    <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular/>
                        18 premier members
                    <Header.Subheader>
                        
                    </Header.Subheader>
                    </Header>
                    </Grid.Column>

                </Grid>
            
            </Segment>
        </Container>)
        
    }
}

export default About;
