import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { throws } from 'assert';

class FinancialInfo extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props;
        return(
        <Form color='blue' >
            <h1 className="ui centered">Step 2: Enter Financial and Family Information</h1>
            <Form.Field>
                <label>Monthly income</label>
                <input placeholder='Monthly Income'
                onChange={this.props.handleChange('income')}
                defaultValue={values.income}
                />
            </Form.Field>
            <Form.Field>
                <label>Family Size</label>
                <input placeholder='Family size'
                onChange={this.props.handleChange('familySize')}
                defaultValue={values.familySize}
                />
            </Form.Field>
            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Next</Button>
        </Form>
        )
    }
}

export default FinancialInfo;
