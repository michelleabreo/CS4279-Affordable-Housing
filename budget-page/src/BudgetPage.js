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
            value: '',
            percentages: {
                housing: .275,
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
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    
    changePercentage(subtract, field) {
        let multiplier = subtract === 0 ? 1 : -1;
        let change = .005 * multiplier;
        let tmpPercents = this.state.percentages;
        switch (field) {
            case "housing":
                console.log("housing percentage changed");
                tmpPercents.housing = tmpPercents.housing + change;
                break;
            case "insurance":
                console.log("insurance percentage changed");
                tmpPercents.insurance = tmpPercents.insurance + change;
                break;
            case "food":
                console.log("food percentage changed");
                tmpPercents.food = tmpPercents.food + change;
                break;
            case "transportation":
                console.log("transportation percentage changed");
                tmpPercents.transportation = tmpPercents.transportation + change;
                break;
            case "utilities":
                console.log("utilities percentage changed");
                tmpPercents.utilities = tmpPercents.utilities + change;
                break;
            case "savings":
                console.log("savings percentage changed");
                tmpPercents.savings = tmpPercents.savings + change;
                break;
            case "fun":
                console.log("fun percentage changed");
                tmpPercents.fun = tmpPercents.fun + change;
                break;
            case "clothing":
                console.log("clothing percentage changed");
                tmpPercents.clothing = tmpPercents.clothing + change;
                break;
            case "personal":
                console.log("personal percentage changed");
                tmpPercents.personal = tmpPercents.personal + change;
                break;
        }
        this.setState({percentages: tmpPercents});
    }

    render() {
        const percentages = this.state.percentages;
        const salary = this.state.value * 1000;
        let percentageArray = [
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

        let totalPercent = 0;
        let i;
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
                        <div>
                        <BudgetAllocation name="Housing" percent={percentages.housing} total={salary}/>
                            <button onClick = {this.changePercentage.bind(this, 1, "housing")}>-</button>
                            <button onClick={this.changePercentage.bind(this,0, "housing")}>+</button>
                        </div>
                    </li>
                    <li>
                        <BudgetAllocation name="Insurance" percent={percentages.insurance} total={salary}/>
                            <button onClick = {this.changePercentage.bind(this, 1, "insurance")}>-</button>
                            <button onClick={this.changePercentage.bind(this,0, "insurance")}>+</button>
                    </li>
                    <li>
                        <BudgetAllocation name="Food" percent={percentages.food} total={salary}/>
                        <button onClick = {this.changePercentage.bind(this, 1, "food")}>-</button>
                        <button onClick={this.changePercentage.bind(this,0, "food")}>+</button>
                    </li>
                    <li>
                        <BudgetAllocation name="Transportation" percent={percentages.transportation} total={salary}/>
                        <button onClick = {this.changePercentage.bind(this, 1, "transportation")}>-</button>
                        <button onClick={this.changePercentage.bind(this,0, "transportation")}>+</button>
                    </li>
                    <li>
                        <BudgetAllocation name="Utilities" percent={percentages.utilities} total={salary}/>
                        <button onClick = {this.changePercentage.bind(this, 1, "utilities")}>-</button>
                        <button onClick={this.changePercentage.bind(this,0, "utilities")}>+</button>
                    </li>
                    <li>
                        <BudgetAllocation name="Savings" percent={percentages.savings} total={salary}/>
                        <button onClick = {this.changePercentage.bind(this, 1, "savings")}>-</button>
                        <button onClick={this.changePercentage.bind(this,0, "savings")}>+</button>
                    </li>
                    <li>
                        <BudgetAllocation name="Fun" percent={percentages.fun} total={salary}/>
                        <button onClick = {this.changePercentage.bind(this, 1, "fun")}>-</button>
                        <button onClick={this.changePercentage.bind(this,0, "fun")}>+</button>
                    </li>
                    <li>
                        <BudgetAllocation name="Clothing" percent={percentages.clothing} total={salary}/>
                        <button onClick = {this.changePercentage.bind(this, 1, "clothing")}>-</button>
                        <button onClick={this.changePercentage.bind(this,0, "clothing")}>+</button>
                    </li>
                    <li>
                        <BudgetAllocation name="Personal" percent={percentages.personal} total={salary}/>
                        <button onClick = {this.changePercentage.bind(this, 1, "personal")}>-</button>
                        <button onClick={this.changePercentage.bind(this,0, "personal")}>+</button>
                    </li>
                </ul>
                <h2>
                    Total percent of entered income: {(totalPercent * 100).toFixed(1)}%
                </h2>
            </form>
        );
    }
}


class BudgetAllocation extends React.Component {
    constructor(props) {
        super(props);
        this.props = ({name: "", total: {}, percent: {}, handler: {}});
    }



    render() {
        const budgetSection = this.props.name;
        const expenditure = this.props.percent * this.props.total;
        return (
            <body>
                <h3>{budgetSection} ({
                    (this.props.percent * 100).toFixed(1)
                }%): ${numberWithCommas(expenditure.toFixed(2))}
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
