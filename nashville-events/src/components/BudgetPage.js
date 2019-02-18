import React, {Component} from 'react';
import '../styling/BudgetPage.css';


class BudgetPage extends Component {
    render() {
        return (
            <div className="Budget Page">
                <header className="Title">
                    <h1>Budget Page</h1>
                </header>
                <div>
                    <BudgetSheet/>
                </div>
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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changePercentage = this.changePercentage.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log('handleFormSubmit called')
        const tmpPercents = this.state.percentages;

        tmpPercents.housing = parseFloat(this.housingPercent.value);
        tmpPercents.insurance = parseFloat(this.insurancePercent.value);
        tmpPercents.food = parseFloat(this.foodPercent.value);
        tmpPercents.transportation = parseFloat(this.transportationPercent.value);
        tmpPercents.utilities = parseFloat(this.utilitiesPercent.value);
        tmpPercents.savings = parseFloat(this.savingsPercent.value);
        tmpPercents.fun = parseFloat(this.funPercent.value);
        tmpPercents.clothing = parseFloat(this.clothingPercent.value);
        tmpPercents.personal = parseFloat(this.personalPercent.value);

        this.setState({percentages: tmpPercents});
    }

    changePercentage(subtract, field, event) {
        if (event.detail === 0) {
            return;
        }
        console.log('changePercentage called');
        const multiplier = subtract === 0 ? 1 : -1;
        const change = 0.005 * multiplier;
        const tmpPercents = this.state.percentages;
        switch (field) {
            case 'housing':
                console.log('housing percentage changed');
                tmpPercents.housing += change;
                break;
            case 'insurance':
                console.log('insurance percentage changed');
                tmpPercents.insurance += change;
                break;
            case 'food':
                console.log('food percentage changed');
                tmpPercents.food += change;
                break;
            case 'transportation':
                console.log('transportation percentage changed');
                tmpPercents.transportation += change;
                break;
            case 'utilities':
                console.log('utilities percentage changed');
                tmpPercents.utilities += change;
                break;
            case 'savings':
                console.log('savings percentage changed');
                tmpPercents.savings += change;
                break;
            case 'fun':
                console.log('fun percentage changed');
                tmpPercents.fun += change;
                break;
            case 'clothing':
                console.log('clothing percentage changed');
                tmpPercents.clothing += change;
                break;
            case 'personal':
                console.log('personal percentage changed');
                tmpPercents.personal += change;
                break;
        }
        this.setState({percentages: tmpPercents});
    }

    render() {
        const percentages = this.state.percentages;
        const salary = this.state.value * 1000;
        const percentageArray = [
            percentages.housing,
            percentages.insurance,
            percentages.food,
            percentages.transportation,
            percentages.utilities,
            percentages.savings,
            percentages.fun,
            percentages.clothing,
            percentages.personal,
        ];

        let totalPercent = 0;
        let i;
        for (i = 0; i < percentageArray.length; ++i) {
            totalPercent += percentageArray[i];
        }

        const ButtonSet = (parameters) => {
            const name = parameters.name;
            return (
                <div>
                    <button onClick={this.changePercentage.bind(this, 1, name)}>-</button>
                    <button onClick={this.changePercentage.bind(this, 0, name)}>+</button>
                </div>
            );
        };

        return (
            <form onSubmit={this.handleFormSubmit} className={"allocationList"}>
                <table>
                    <div classname="firstElt">
                        Monthly salary? (in thousands)
                    </div>
                    <th><input type="number" value={this.state.value} onChange={this.handleChange}/>
                    </th>
                    <tr className={"allocationElt"}>
                        <td className={"allocationName"}>
                            <BudgetAllocation name="Housing" percent={percentages.housing} total={salary}/>
                        </td>
                        <td>
                            <ButtonSet name="housing" className={"buttons"}/>
                        </td>
                        <td>
                            <input type={"number"}
                                   step={.001}
                                   defaultValue={percentages.housing}
                                   name={"housing"}
                                   ref={(input) => this.housingPercent = input}
                            />
                        </td>
                    </tr>
                    <tr className={"allocationElt"}>
                        <td>
                            <BudgetAllocation name="Insurance" percent={percentages.insurance} total={salary}/>
                        </td>
                        <td>

                            <ButtonSet name="insurance"/>
                        </td>
                        <td>

                            <input type={"number"}
                                   step={.001}
                                   defaultValue={percentages.insurance}
                                   name={"insurance"}
                                   ref={(input) => this.insurancePercent = input}
                            />
                        </td>
                    </tr>
                    <tr className={"allocationElt"}>
                        <td>
                            <BudgetAllocation name="Food" percent={percentages.food} total={salary}/>
                        </td>
                        <td>
                            <ButtonSet name="food"/>
                        </td>
                        <td>
                            <input type={"number"}
                                   step={.001}
                                   defaultValue={percentages.food}
                                   name={"food"}
                                   ref={(input) => this.foodPercent = input}
                            />
                        </td>
                    </tr>
                    <tr className={"allocationElt"}>
                        <td>
                            <BudgetAllocation
                                name="Transportation"
                                percent={percentages.transportation}
                                total={salary}
                            />
                        </td>
                        <td>
                            <ButtonSet name="transportation"/>
                        </td>
                        <td>
                            <input type={"number"}
                                   step={.001}
                                   defaultValue={percentages.transportation}
                                   name={"transportation"}
                                   ref={(input) => this.transportationPercent = input}
                            /></td>
                    </tr>
                    <tr className={"allocationElt"}>
                        <td>
                            <BudgetAllocation name="Utilities" percent={percentages.utilities} total={salary}/>
                        </td>
                        <td>
                            <ButtonSet name="utilities"/>
                        </td>
                        <td>
                            <input type={"number"}
                                   step={.001}
                                   defaultValue={percentages.utilities}
                                   name={"utilities"}
                                   ref={(input) => this.utilitiesPercent = input}
                            /></td>
                    </tr>
                    <tr className={"allocationElt"}>
                        <td>
                            <BudgetAllocation name="Savings" percent={percentages.savings} total={salary}/>
                        </td>
                        <td><ButtonSet name="savings"/>
                        </td>
                        <td><input type={"number"}
                                   step={.001}
                                   defaultValue={percentages.savings}
                                   name={"savings"}
                                   ref={(input) => this.savingsPercent = input}
                        /></td>
                    </tr>
                    <tr className={"allocationElt"}>
                        <td>
                            <BudgetAllocation name="Fun" percent={percentages.fun} total={salary}/>
                        </td>
                        <td><ButtonSet name="fun"/>
                        </td>
                        <td><input type={"number"}
                                   step={.001}
                                   defaultValue={percentages.fun}
                                   name={"fun"}
                                   ref={(input) => this.funPercent = input}
                        />
                        </td>
                    </tr>
                    <tr className={"allocationElt"}>
                        <td>
                            <BudgetAllocation name="Clothing" percent={percentages.clothing} total={salary}/>
                        </td>
                        <td>
                            <ButtonSet name="clothing"/>
                        </td>
                        <td>
                            <input type={"number"}
                                   step={.001}
                                   defaultValue={percentages.clothing}
                                   name={"clothing"}
                                   ref={(input) => this.clothingPercent = input}
                            />
                        </td>
                    </tr>
                    <tr className={"allocationElt"}>
                        <td><BudgetAllocation name="Personal" percent={percentages.personal} total={salary}/>
                        </td>
                        <td><ButtonSet name="personal" num={8}/>
                        </td>
                        <td><input type={"number"}
                                   step={.001}
                                   defaultValue={percentages.personal}
                                   name={"personal"}
                                   ref={(input) => this.personalPercent = input}
                        /></td>
                    </tr>
                    <tr className={"totalElt"}>
                        <td>
                            Total percent of entered income:
                            {(totalPercent * 100).toFixed(1)}
                            %
                        </td>
                        <td>
                            <input type={"submit"} value={"Submit"}/>
                        </td>
                    </tr>
                </table>
            </form>
        );
    }
}

class BudgetAllocation extends React.Component {
    constructor(props) {
        super(props);
        this.props = {name: '', total: {}, percent: {}};
    }

    render() {
        const budgetSection = this.props.name;
        const expenditure = this.props.percent * this.props.total;
        return (
            <div>
                <h5>
                    {budgetSection}
                    {' '}
                    (
                    {(this.props.percent * 100).toFixed(1)}
                    %): $
                    {numberWithCommas(expenditure.toFixed(2))}
                </h5>
            </div>
        );
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default BudgetPage;
