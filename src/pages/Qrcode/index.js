import React, { Component } from 'react';
import { Card, Image, Button, Icon, Container, Grid} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import HeaderUI from '../../components/HeaderUI';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

/**
 * @class qrcode
 * @extends {Component}
 * @description the class will ask for the randomuser to produce an user and pass it 
 * to App.js and change the state of it which is username and role.
 */

class qrcode extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoaded: false,
            error: null,
            role: null
        }
        this.cookies = this.props.cookies;
    }
    /**
     * @function componentDidMount
     * @description The following function will fetch the api and change the state
     */
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
                    let role = this.state.role;
                    let pic_url = this.state.user.results[0].picture.large
                    this.props.getUser(username,role, pic_url);
                    this.cookies.set('userData', {
                        username,
                        role,
                        pic_url
                    })
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
            return <HeaderUI content="Loading...."/>
        }
        else {
            return (
                <Container textAlign='center' fluid>
                <HeaderUI content="Random User"/>
                <Grid centered columns={2}>
                    <Link to='/'>
                        <Card>
                            <Image src={user.results[0].picture.large} size='large'/>
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
                </Grid>
                </Container>
                    
            );
        }
    }
}

export default withCookies(qrcode);
