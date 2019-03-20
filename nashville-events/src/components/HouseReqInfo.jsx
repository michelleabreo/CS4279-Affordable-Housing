import React, { Component } from 'react';
import { Dropdown, Form, Button } from 'semantic-ui-react';

const options = [
    { key: 1, text: '1', value: 1 },
    { key: 2, text: '2', value: 2 },
    { key: 3, text: '3', value: 3 },
    { key: 4, text: '4+', value: 4 },
]


class HouseReqInfo extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }


    render(){
        const { values } = this.props;
        return(
            <Form color='green' >
                <h1 className="ui centered">Step 3: Enter House Information</h1>
                <Form.Field>
                    <label>Number of bedrooms</label>
                    <Dropdown text='Bedrooms' options={options} simple item />



                    <input
                    placeholder='Number of bedrooms'
                    onChange={this.props.handleChange('numBedroom')}
                    defaultValue={values.numBedroom}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Number of bathrooms</label>
                    <input
                    placeholder='Number of bathrooms'
                    onChange={this.props.handleChange('numBathroom')}
                    defaultValue={values.numBathroom}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Next</Button>
            </Form>
        )
    }
}

export default HouseReqInfo;
