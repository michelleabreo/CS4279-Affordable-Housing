import React, { Component } from 'react';

class BudgetPage extends Component {
  render() {
    return (
      <div className="Budget Page">
        <header className="Title">
          <h1>Budget Page</h1>
        </header>
        <div>
          <BudgetSheet />
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
    this.input = React.createRef();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleFormSubmit(event) {
    console.log('handleFormSubmit called')
    console.log(this.input.current.value);
    const tmpPercents = this.state.percentages;
    switch (event.target.name) {
      case 'housing':
        console.log('housing percentage changed by form');
        tmpPercents.housing = (event.target.value);
        break;
      case 'insurance':
        console.log('insurance percentage changed by form');
        tmpPercents.insurance = event.target.value;
        break;
      case 'food':
        console.log('food percentage changed by form');
        tmpPercents.food = event.target.value;
        break;
      case 'transportation':
        console.log('transportation percentage changed by form');
        tmpPercents.transportation = event.target.value;
        break;
      case 'utilities':
        console.log('utilities percentage changed by form');
        tmpPercents.utilities = event.target.value;
        break;
      case 'savings':
        console.log('savings percentage changed by form');
        tmpPercents.savings = event.target.value;
        break;
      case 'fun':
        console.log('fun percentage changed by form');
        tmpPercents.fun = event.target.value;
        break;
      case 'clothing':
        console.log('clothing percentage changed by form');
        tmpPercents.clothing = event.target.value;
        break;
      case 'personal':
        console.log('personal percentage changed by form');
        tmpPercents.personal = event.target.value;
        break;
    }
    this.setState({ percentages: tmpPercents });
  }

  changePercentage(subtract, field) {
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
    this.setState({ percentages: tmpPercents });
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
      const num = parameters.num;
      return (
        <div>
          <button onClick={this.changePercentage.bind(this, 1, name)}>-</button>
          <button onClick={this.changePercentage.bind(this, 0, name)}>+</button>
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <input type={"number"}
                   step={.001}
                   defaultValue={percentageArray[num]}
                   name={name}
                   ref={this.input}
            />
            <input type={"submit"} value={"Submit"} />
          </form>
        </div>
      );
    };

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>
            Yearly salary? (in thousands)
            <input type="number" value={this.state.value} onChange={this.handleChange} />
          </h2>
        </label>
        <ul>
          <li>
            <div>
              <BudgetAllocation name="Housing" percent={percentages.housing} total={salary} />
              <ButtonSet name="housing" num={0} />
            </div>
          </li>
          <li>
            <BudgetAllocation name="Insurance" percent={percentages.insurance} total={salary} />
            <ButtonSet name="insurance" num={1}/>
          </li>
          <li>
            <BudgetAllocation name="Food" percent={percentages.food} total={salary} />
            <ButtonSet name="food" num={2} />
          </li>
          <li>
            <BudgetAllocation
              name="Transportation"
              percent={percentages.transportation}
              total={salary}
            />
            <ButtonSet name="transportation" num={3} />
          </li>
          <li>
            <BudgetAllocation name="Utilities" percent={percentages.utilities} total={salary} />
            <ButtonSet name="utilities" num={4}/>
          </li>
          <li>
            <BudgetAllocation name="Savings" percent={percentages.savings} total={salary} />
            <ButtonSet name="savings" num={5}/>
          </li>
          <li>
            <BudgetAllocation name="Fun" percent={percentages.fun} total={salary} />
            <ButtonSet name="fun" num={6}/>
          </li>
          <li>
            <BudgetAllocation name="Clothing" percent={percentages.clothing} total={salary} />
            <ButtonSet name="clothing" num={7}/>
          </li>
          <li>
            <BudgetAllocation name="Personal" percent={percentages.personal} total={salary} />
            <ButtonSet name="personal" num={8}/>
          </li>
        </ul>
        <h2>
          Total percent of entered income:
          {(totalPercent * 100).toFixed(1)}
%
        </h2>
      </form>
    );
  }
}

class BudgetAllocation extends React.Component {
  constructor(props) {
    super(props);
    this.props = { name: '', total: {}, percent: {} };
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
