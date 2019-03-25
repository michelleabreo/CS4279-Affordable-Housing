import React, { Component } from 'react';
import {Button, Form, List, Grid} from 'semantic-ui-react';
const firebase = require('firebase');
require('firebase/firestore');

const db = firebase.firestore();

class Confirmation extends Component{

    pushToFirebase(values) {
        console.log(values[0]);
        db.collection('users')
            .add({
                Name: values[0] + values[1],
                Email: values[2],
                Income: values[3],
                Family_Size: values[4],
                Number_of_Bedrooms: values[5],
                Number_of_Bathrooms: values[6]
            })
            .then(() => {
                console.log('Document successfully written!');
            })
            .catch((error) => {
                console.error('Error writing document: ', error);
            });
    }

    saveAndContinue = (e, vals) => {

        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: 'AIzaSyC3VoNgu4Vpep3bUWK6_kMUb3Ag_9Pnu6g',
                authDomain: 'housing-project-7e733.firebaseapp.com',
                databaseURL: 'https://housing-project-7e733.firebaseio.com',
                projectId: 'housing-project-7e733',
                storageBucket: 'housing-project-7e733.appspot.com',
                messagingSenderId: '378164429411',
            });
        }

        this.pushToFirebase(vals);

        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { firstName, lastName, email, income, familySize, numBedroom, numBathroom }} = this.props;
        const vals = [firstName, lastName, email, income, familySize, numBedroom, numBathroom];

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
                        <Button onClick={this.saveAndContinue(vals)}>Confirm</Button>
                    </div>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Confirmation;
