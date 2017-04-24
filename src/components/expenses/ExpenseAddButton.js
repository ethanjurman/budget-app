import React, { Component } from 'react';

export default class ExpenseAddButton extends Component {
  addExpense() {
    this.props.onAddExpense();
  }

  render() {
    return (
      <button onClick={this.addExpense.bind(this)} className="ExpenseAddButton">
        +
      </button>
    );
  }
}
