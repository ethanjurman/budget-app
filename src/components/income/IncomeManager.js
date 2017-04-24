import React, { Component } from 'react';
import './income.css';
import IncomeInputExpandField from './IncomeInputExpandField';

export default class IncomeManager extends Component {
  render() {
    return (
      <div className="IncomeManager">
        <span className="income-text"> income </span> <IncomeInputExpandField />
      </div>
    );
  }
}
