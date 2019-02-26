import React, { Component } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Confirmation from './Confirmation';
import Success from './Success';

class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        income: '',
        familySize: '',

    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
        const {step} = this.state;
        const { firstName, lastName, email, income, familySize } = this.state;
        const values = { firstName, lastName, email, income, familySize};
        switch(step) {
        case 1:
            return <Step1
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <Step2
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 4:
            return <Success />
        }
    }
}

export default MainForm;
