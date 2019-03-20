import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import FinancialInfo from './FinancialInfo';
import HouseReqInfo from './HouseReqInfo';
import Confirmation from './Confirmation';
import Success from './Success';
//import "semantic-ui-css/semantic.min.css";


class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        income: '',
        familySize: '',
        numBedroom: '',
        numBathroom: '',

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
        const { firstName, lastName, email, income, familySize, numBedroom, numBathroom } = this.state;
        const values = { firstName, lastName, email, income, familySize , numBedroom, numBathroom };
        switch(step) {
        case 1:
            return <PersonalInfo
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <FinancialInfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <HouseReqInfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 4:
            return <Confirmation
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
            />
        case 5:
            return <Success />
        }
    }
}

export default MainForm;
