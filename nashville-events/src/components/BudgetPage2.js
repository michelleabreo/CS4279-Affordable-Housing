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
}

class ExpenditureTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <table>
                <th>Expenditures</th>
                <tr>{/*insert table rows here*/}</tr>
            </table>
        );
    }
}

class ExpenditureRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <tr>
                <td>Food</td>
                <td>Price</td>
                <td>Buttons to change</td>
            </tr>
        );
    }
}

class ExpenditureChange extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <td>
                <div>
                    Form to change percent
                </div>
                <div>
                    Button to change percent
                </div>
            </td>
        );
    }
}

