import React, {Component} from 'react';
import '../styling/BudgetPage.css';

{/**The structure of this page will be as follows:

 Budget
 SalaryForm
 ExpenditureTable
 ExpenditureRow
 ExpenditureName
 ExpenditureValue
 ExpenditureChange   */
}

class BudgetPage2 extends Component {
    render() {
        return (
            <div className={"Budget Page"}>
                <header>
                    <h1>Budget Page 2: The better version</h1>
                </header>
                <body>
                <Budget/>
                </body>
            </div>
        );
    }
}

class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: '',
            percentages: {
                housing: 0.275,
                insurance: 0.1,
                food: 0.125,
                transportation: 0.125,
                utilities: 0.075,
                savings: 0.125,
                fun: 0.075,
                clothing: 0.025,
                personal: 0.075,
            },
        };

        this.handleSalaryChange = this.handleSalaryChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFoodChange = this.handleFoodChange.bind(this);
    }

    handleFoodChange(event) {
        console.log("handleFoodChange called.");
        let tmpPercents = this.state.percentages;
        tmpPercents.food = event.target.value;
        this.setState({percentages: tmpPercents});
    }

    handleSalaryChange(event) {
        this.setState({salary: event.target.value});
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log('handleFormSubmit called');
        const tmpPercents = this.state.percentages;


        tmpPercents.housing = parseFloat(this.housingPercent.value);
        tmpPercents.insurance = parseFloat(this.insurancePercent.value);
        tmpPercents.food = parseFloat(this.foodPercent.value);

        {/*
        tmpPercents.transportation = parseFloat(this.transportationPercent.value);
        tmpPercents.utilities = parseFloat(this.utilitiesPercent.value);
        tmpPercents.savings = parseFloat(this.savingsPercent.value);
        tmpPercents.fun = parseFloat(this.funPercent.value);
        tmpPercents.clothing = parseFloat(this.clothingPercent.value);
        tmpPercents.personal = parseFloat(this.personalPercent.value);
        */
        }


        this.setState({percentages: tmpPercents});

    }

    render() {
        const ExpenditureChange = (parameters) => {
            return (
                <td>
                    <input type={"number"}
                           step={.001}
                           defaultValue={parameters.perc}
                           name={"food"}
                           ref={(input) => this.foodPercent = input}
                    />
                </td>
            );
        };

        const ExpenditureRow = (parameters) => {
            return (
                <tr>
                    <td>{parameters.category} ({parameters.percent * 100}%):</td>
                    <td>{parameters.percent * this.state.salary}</td>
                    <td>
                        <ExpenditureChange
                            perc={parameters.percent}
                            varToChange={parameters.ref}
                        />
                    </td>
                </tr>
            );
        };

        const ExpenditureTable = () => {
            return (
                <div>
                    <form onSubmit={this.handleFormSubmit}>
                        <ExpenditureRow
                            category={"Housing"}
                            percent={this.state.percentages.housing}
                            ref={this.housingPercent}
                        />
                        <ExpenditureRow
                            category={"Insurance"}
                            percent={this.state.percentages.insurance}
                            ref={this.insurancePercent}
                        />
                        <ExpenditureRow
                            category={"Food"}
                            percent={this.state.percentages.food}
                            ref={this.foodPercent}
                        />
                        <ExpenditureRow
                            category/>
                    </form>
                </div>
            );
        };

        return (
            <table>
                <th>Expenditures</th>
                <tr>
                    Monthly salary:
                    <input type="number" value={this.state.salary} autoFocus={true}
                           onChange={this.handleSalaryChange}/>
                </tr>
                <tr>
                    <ExpenditureTable/>
                </tr>
            </table>
        );

    }
}


export default BudgetPage2;
