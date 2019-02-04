import React, {Component} from 'react';

class BudgetPage extends Component {
    render() {
        return (
            <div className="Budget Page">
                <header className="Title">
                    <h1>
                        Budget Page
                    </h1>
                </header>
                <body>
                <BudgetSheet/>
                </body>
            </div>
        );
    }
}

class BudgetSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '', percentages: {
                housing: .28,
                insurance: .10,
                food: .125,
                transportation: .125,
                utilities: .075,
                savings: .125,
                fun: .075,
                clothing: .025,
                personal: .075
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        updatePercentage = updatePercentage.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChangeButton() {
    }

    render() {
        const percentages = this.state.percentages;
        const salary = this.state.value * 1000;
        var percentageArray = [
            percentages.housing
            , percentages.insurance
            , percentages.food
            , percentages.transportation
            , percentages.utilities
            , percentages.savings
            , percentages.fun
            , percentages.clothing
            , percentages.personal
        ];

        var totalPercent = 0;
        var i;
        for (i = 0; i < percentageArray.length; ++i) {
            totalPercent += percentageArray[i];
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <h2>
                        Yearly salary? (in thousands)
                        <input type="number" value={this.state.value} onChange={this.handleChange}/>
                    </h2>
                </label>
                <ul>
                    <li>
                        <BudgetAllocation name="Housing" percent={percentages.housing} total={salary}/>
                    </li>
                    <li>
                        <BudgetAllocation name={"Insurance"} percent={percentages.insurance} total={salary}/>
                    </li>
                    <li>
                        <BudgetAllocation name="Food" percent={percentages.food} total={salary}/>
                    </li>
                    <li>
                        <BudgetAllocation name="Transportation" percent={percentages.transportation} total={salary}/>
                    </li>
                    <li>
                        <BudgetAllocation name="Utilities" percent={percentages.utilities} total={salary}/>
                    </li>
                    <li>
                        <BudgetAllocation name="Savings" percent={percentages.savings} total={salary}/>
                    </li>
                    <li>
                        <BudgetAllocation name="Fun" percent={percentages.fun} total={salary}/>
                    </li>
                    <li>
                        <BudgetAllocation name="Clothing" percent={percentages.clothing} total={salary}/>
                    </li>
                    <li>
                        <BudgetAllocation name="Personal" percent={percentages.personal} total={salary}/>
                    </li>
                </ul>
                <h2>
                    Total percent of entered income: {(totalPercent * 100).toFixed(0)}%
                </h2>
            </form>
        );
    }
}

function updatePercentage(field,number) {
    //nothing now
}

class BudgetAllocation extends React.Component {
    constructor(props) {
        super(props);
        this.props = ({name: "", total: {}, percent: {}, changeFunc: {}});
    }

    render() {
        const budgetSection = this.props.name;
        const expenditure = this.props.percent * this.props.total;
        return (
            <body>
                <h3>{budgetSection} ({
                    (this.props.percent * 100).toFixed(1)
                }%): ${numberWithCommas(expenditure.toFixed(2))}
                <EditPercentageButtons />
                </h3>
            </body>

        );
    }
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


class EditPercentageButtons extends React.Component {
    constructor(props) {
        super(props);
        this.props = ({field: ""});
    }


    render() {
        return(
            <body>
                <button>
                    <p>-</p>
                </button>
                &nbsp;&nbsp;
                <button>
                    <p>+</p>
                </button>
            </body>
        );
    }
}

export default BudgetPage;