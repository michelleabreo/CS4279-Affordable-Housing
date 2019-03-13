import React, {Component} from 'react';
import '../styling/BudgetPage.css';

{/**The structure of this page will be as follows:

 Budget
    SalaryForm
    ExpenditureTable
        ExpenditureRow
            ExpenditureName
            ExpenditureValue
            ExpenditureChange   */}

class BudgetPage2 extends Component {
    render() {
        return(
            <div className={"Budget Page"}>
                <header>
                    <h1>Budget Page 2: The better version</h1>
                </header>
                <body>
                    <Budget />
                </body>
            </div>
        );
    }
}

class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
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
    }

    handleFoodChange(event) {
        let tmpPercents = this.state.percentages;
        tmpPercents.food = event.target.value;
        this.setState({percentages: tmpPercents});

    }

    render() {
        const ExpenditureChange = (parameters) => {
            return(
                <td>
                    <div>
                        <input type={"number"}
                               step={.001}
                               defaultValue={parameters.perc}
                               name={"food"}
                               onSubmit={parameters.func} />
                    </div>
                    <div>
                        Button to change percent
                    </div>
                </td>
            );
        };

        const ExpenditureRow = (parameters) => {
            return(
                <tr>
                    <td>{parameters.category}</td>
                    <td>{parameters.percent * this.state.salary}</td>
                    <td><ExpenditureChange perc={parameters.percent} func={parameters.func}/></td>
                </tr>
            );
        };

        const ExpenditureTable = () => {
            return(
                <table>
                    <th>Expenditures</th>
                    <tr>
                        <ExpenditureRow
                            category={"Food"}
                            percent={this.state.percentages.food}
                            func={this.handleFoodChange}/>
                    </tr>
                </table>
            );
        };

        return(
            <ExpenditureTable />
        );

    }
}

