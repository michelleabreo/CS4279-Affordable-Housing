import React from 'react';
import MainForm from './MainForm';

export default class Home extends React.Component  {
    state = {
      inNashville: true,
      salary: {
          pretax: 0,
          posttax: 0,
          yearly: 0,
          monthly: 0,
      }
    }
  

  render() {
    return ( 
    <div>
      <MainForm/>
    </div>
    );
  }

}
