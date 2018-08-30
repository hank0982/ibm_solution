import React, { Component } from 'react';
import HeaderUI from '../../components/HeaderUI';
import { Container ,Segment, Table, Grid, List} from 'semantic-ui-react';


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
            <List divided verticalAlign='middle'>
                <List.Item>
                <List.Content>
                    Immutable
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Content>
                    Smart Contract / Chaincode
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Content>
                    Consensus
                </List.Content>
                </List.Item>
            </List>
            </Segment>
            <HeaderUI content="Why Hyperledger?" as="h3"/>
            <Segment color='brown'>
            <List divided verticalAlign='middle'>
                <List.Item>
                <List.Content>
                    Private and Permissioned
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Content>
                    Channel - some participants might be competitors and not want every transaction they make
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Content>
                    18 premier members and various general members and acadamia to support the development of Hyperledger
                </List.Content>
                </List.Item>
            </List>
            </Segment>
        </Container>)
        
    }
}

export default About;
