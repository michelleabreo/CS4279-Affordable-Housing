import React, { Component } from 'react';
import {Form, Button, Grid} from 'semantic-ui-react';


class PersonalInfo extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Grid container>
                <Grid.Column width={10}>
                    <Form>
                        <h1 className="ui centered">Step 1: Enter Personal Information</h1>
                        <Form.Field>
                            <label>First Name</label>
                            <input
                                placeholder='First Name'
                                onChange={this.props.handleChange('firstName')}
                                defaultValue={values.firstName}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input
                                placeholder='Last Name'
                                onChange={this.props.handleChange('lastName')}
                                defaultValue={values.lastName}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Email Address</label>
                            <input
                                type='email'
                                placeholder='Email Address'
                                onChange={this.props.handleChange('email')}
                                defaultValue={values.email}
                            />
                        </Form.Field>
                        <Button onClick={this.saveAndContinue}>Next</Button>
                    </Form>
                </Grid.Column>
                <Grid.Column/>
            </Grid>
        )
    }
}

export default PersonalInfo;
