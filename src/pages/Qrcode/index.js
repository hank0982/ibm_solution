import React, { Component } from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class qrcode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoaded: false,
            error: null,
            role: null
        }
    }
    componentDidMount() {
        fetch("https://randomuser.me/api/", { method: 'GET' })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        user: result,
                        isLoaded: true
                    });
                    if (Math.floor(Math.random() * 10) % 2 === 0) {
                        this.setState({
                            role: 'seller'
                        })
                    }
                    else {
                        this.setState({
                            role: 'buyer'
                        })
                    }
                    let username = this.state.user.results[0].name.first + ' ' + this.state.user.results[0].name.last;
                    this.props.getUser(username,this.state.role);
                },
                (error) => {
                    this.setState({
                        error: true,
                        isLoaded: true
                    });
                }
            )
    }


    render() {      
        const { user, isLoaded, error, role } = this.state;
        if (error) {
            return <h1>User Fetch Error</h1>
        }
        else if (isLoaded === false) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <Link to='/'>
                    <Card>
                        <Image src={user.results[0].picture.large} />
                        <Card.Content>
                            <Card.Header>{user.results[0].name.first + ' ' + user.results[0].name.last}</Card.Header>
                            <Card.Meta>{role}</Card.Meta>
                        </Card.Content>
                        <Button animated>
                            <Button.Content visible>Next</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow right' />
                            </Button.Content>
                        </Button>
                    </Card>
                </Link>
            );
        }
    }
}

export default qrcode;
