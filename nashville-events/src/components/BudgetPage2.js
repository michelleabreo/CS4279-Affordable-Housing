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

class BudgetPage extends Component {
    render() {
        return (
            <div className={"Budget Page"}>
                <header>
                    <h2>Create your budget here:</h2>
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

        this.handleHousingPercentChange = this.handleHousingPercentChange.bind(this);
        this.handleInsurancePercentChange = this.handleInsurancePercentChange.bind(this);
        this.handleFoodPercentChange = this.handleFoodPercentChange.bind(this);
        this.handleTransportationPercentChange = this.handleTransportationPercentChange.bind(this);
        this.handleUtilitiesPercentChange = this.handleUtilitiesPercentChange.bind(this);
        this.handleSavingsPercentChange = this.handleSavingsPercentChange.bind(this);
        this.handleFunPercentChange = this.handleFunPercentChange.bind(this);
        this.handleClothingPercentChange = this.handleClothingPercentChange.bind(this);
        this.handlePersonalPercentChange = this.handlePersonalPercentChange.bind(this);
    }

    handleSalaryChange(event) {
        this.setState({salary: event.target.value});
    }

    handleHousingPercentChange(event) {
        console.log("handleHousingPercentChange called: " + event.target.value);
        let tmpPercents = this.state.percentages;
        tmpPercents.housing = event.target.value;
        this.setState({percentages: tmpPercents});
    }

    handleFoodPercentChange(event) {
        console.log("handleFoodPercentChange called: " + event.target.value);
        let tmpPercents = this.state.percentages;
        tmpPercents.food = event.target.value;
        this.setState({percentages: tmpPercents});
    }

    handleInsurancePercentChange(event) {
        console.log("handleInsurancePercentChange called: " + event.target.value);
        let tmpPercents = this.state.percentages;
        tmpPercents.insurance = event.target.value;
        this.setState({percentages: tmpPercents});
    }

    handleTransportationPercentChange(event) {
        console.log("handleTransportationPercentChange called: " + event.target.value);
        let tmpPercents = this.state.percentages;
        tmpPercents.transportation = event.target.value;
        this.setState({percentages: tmpPercents});
    }

    handleUtilitiesPercentChange(event) {
        console.log("handleUtilitiesPercentChange called: " + event.target.value);
        let tmpPercents = this.state.percentages;
        tmpPercents.utilities = event.target.value;
        this.setState({percentages: tmpPercents});
    }

    handleSavingsPercentChange(event) {
        console.log("handleSavingsPercentChange called: " + event.target.value);
        let tmpPercents = this.state.percentages;
        tmpPercents.savings = event.target.value;
        this.setState({percentages: tmpPercents});
    }

    handleFunPercentChange(event) {
        console.log("handleFunPercentChange called: " + event.target.value);
        let tmpPercents = this.state.percentages;
        tmpPercents.fun = event.target.value;
        this.setState({percentages: tmpPercents});
    }

    handleClothingPercentChange(event) {
        console.log("handleClothingPercentChange called: " + event.target.value);
        let tmpPercents = this.state.percentages;
        tmpPercents.clothing = event.target.value;
        this.setState({percentages: tmpPercents});
    }

    handlePersonalPercentChange(event) {
        console.log("handlePersonalPercentChange called: " + event.target.value);
        let tmpPercents = this.state.percentages;
        tmpPercents.personal = event.target.value;
        this.setState({percentages: tmpPercents});
    }


    render() {
        let functionArray = {
            housing: this.handleHousingPercentChange,
            insurance: this.handleInsurancePercentChange,
            food: this.handleFoodPercentChange,
            transportation: this.handleTransportationPercentChange,
            utilities: this.handleUtilitiesPercentChange,
            savings: this.handleSavingsPercentChange,
            fun: this.handleFunPercentChange,
            clothing: this.handleClothingPercentChange,
            personal: this.handlePersonalPercentChange
        };


        const percentageArray = [
            this.state.percentages.housing,
            this.state.percentages.insurance,
            this.state.percentages.food,
            this.state.percentages.transportation,
            this.state.percentages.utilities,
            this.state.percentages.savings,
            this.state.percentages.fun,
            this.state.percentages.clothing,
            this.state.percentages.personal,
        ];

        let totalPercent = 0;
        let i;
        for (i = 0; i < percentageArray.length; ++i) {
            totalPercent += parseFloat(percentageArray[i]);
        }

        return (
            <table id={"budget-table"}>
                <th id={"expenditure-header"}>Expenditures</th>
                <tr id={"first-row"}>
                    Monthly salary: &nbsp;
                    <input type="number" value={this.state.salary} autoFocus={true}
                           onChange={this.handleSalaryChange}/>
                </tr>
                <ExpenditureTable percentages={this.state.percentages}
                                  functions={functionArray}
                                  salary={this.state.salary}
                />
                <tr>
                    Total percent: {(totalPercent * 100).toFixed(1)}%
                </tr>
            </table>
        );

    }
}

function ExpenditureChange(parameters) {
    return (
        <div>
            {parameters.func}
            <input type={"number"}
                   step={.001}
                   value={parameters.perc}
                   onChange={parameters.func}
            />
        </div>
    );
}

function ExpenditureRow(parameters) {
    return (
        <tr id={"expenditure-row"}>
            <td>{parameters.category} ({(parameters.percent * 100).toFixed(2)}%):</td>
            <td id={"salary-column"}>{(parameters.percent * parameters.salary).toFixed(2)}</td>
            <td id={"submit-column"}>
                <ExpenditureChange
                    perc={parameters.percent}
                    func={parameters.function}
                />
            </td>
        </tr>
    );
}

function ExpenditureTable(parameters) {
    return (
        <div>
            <ExpenditureRow
                category={"Food"}
                percent={parameters.percentages.food}
                function={parameters.functions.food}
                salary={parameters.salary}
            />
            <ExpenditureRow
                category={"Insurance"}
                percent={parameters.percentages.insurance}
                function={parameters.functions.insurance}
                salary={parameters.salary}
            />
            <ExpenditureRow
                category={"Housing"}
                percent={parameters.percentages.housing}
                function={parameters.functions.housing}
                salary={parameters.salary}
            />
            <ExpenditureRow
                category={"Transportation"}
                percent={parameters.percentages.transportation}
                function={parameters.functions.transportation}
                salary={parameters.salary}
            />
            <ExpenditureRow
                category={"Utilities"}
                percent={parameters.percentages.utilities}
                function={parameters.functions.utilities}
                salary={parameters.salary}
            />
            <ExpenditureRow
                category={"Savings"}
                percent={parameters.percentages.savings}
                function={parameters.functions.savings}
                salary={parameters.salary}
            />
            <ExpenditureRow
                category={"Fun"}
                percent={parameters.percentages.fun}
                function={parameters.functions.fun}
                salary={parameters.salary}
            />
            <ExpenditureRow
                category={"Personal"}
                percent={parameters.percentages.personal}
                function={parameters.functions.personal}
                salary={parameters.salary}
            />
        </div>
    );
}


export default BudgetPage2;
