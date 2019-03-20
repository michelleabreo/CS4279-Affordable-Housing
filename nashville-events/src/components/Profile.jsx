import React, { Component } from 'react';
import {Grid, Button, Form, List} from 'semantic-ui-react';


class Profile extends Component{
    render(){
        const {values: { firstName, lastName, email, income, familySize, numBedroom, numBathroom }} = this.props;

        return(
            <Grid container>
                <Grid.Column width={10}>
                    <div>
                        <h1 className="ui centered">User Profile</h1>
                        <List>
                            <List.Item>
                                {/*<List.Icon name='users' />*/}
                                <List.Content>Name: {firstName + " " + lastName}</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>Email: {email}</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>Monthly Income: {income}</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>Family Size: {familySize}</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>Number of bedrooms: {numBedroom}</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>Number of bathrooms: {numBathroom}</List.Content>
                            </List.Item>
                        </List>
                    </div>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Profile;
