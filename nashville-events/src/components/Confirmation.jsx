import React, { Component } from 'react';
import {Button, Form, List, Grid} from 'semantic-ui-react';

class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { firstName, lastName, email, income, familySize, numBedroom, numBathroom }} = this.props;

        return(
            <Grid container>
                <Grid.Column width={10}>
                    <div>
                        <h1 className="ui centered">Confirm your Details</h1>
                        <p>Click Confirm if the following details have been correctly entered</p>

                        <List>
                            <List.Item>
                                {/*<List.Icon name='users' />*/}
                                <List.Content>Name: {firstName + " " + lastName}</List.Content>
                            </List.Item>
                            <List.Item>
                                {/*<List.Content>*/}
                                {/*<a href='mailto:jack@semantic-ui.com'>{email}</a>*/}
                                {/*</List.Content>*/}
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
                        <Button onClick={this.back}>Back</Button>
                        <Button onClick={this.saveAndContinue}>Confirm</Button>

                    </div>
                </Grid.Column>
            </Grid>

        )
    }
}

export default Confirmation;
