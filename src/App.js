import React, { Component } from 'react';
import './App.css';

import SplitBar from './components/SplitBar/SplitBar';
import { genNextColor } from './components/ColorSelector/colors';
import IncomeManager from './components/income/IncomeManager';
import InputRowGroup from './components/InputRow/InputRowGroup';
import * as Store from './store/store';

const expenses = [
  { name: 'food', value: 100, color: genNextColor.next().value },
  { name: 'bills', value: 200, color: genNextColor.next().value },
  { name: 'things', value: 50, color: genNextColor.next().value },
];

const newExpenseColor = genNextColor.next().value;

class App extends Component {
  getExpenses() {
    const rows = this.props.store.getStoreValue('INPUT_ROWS', []);
    return rows.map((item) => {
      return {
        name: item.name,
        value: item.value,
        color: item.color,
      };
    });
  }
  render() {
    if (!this.props.store) {
      return null;
    }
    return (
      <div className="App">
        <IncomeManager />
        <SplitBar items={this.getExpenses()} total={this.props.store.getStoreValue('income')} />
        <InputRowGroup />
      </div>
    );
  }
}

export default Store.connect(App);
