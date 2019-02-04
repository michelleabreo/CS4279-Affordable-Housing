import React from 'react';
import ReactDOM from 'react-dom';
import BudgetPage from './BudgetPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BudgetPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
