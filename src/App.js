import React, { Component } from 'react';
import './App.css';

import SplitBar from './components/SplitBar/SplitBar';
import { genNextColor } from './components/ColorSelector/colors';
import IncomeManager from './components/income/IncomeManager';
import * as Store from './store/store';

// import Input from './components/InputRow/Input';
import InputRow from './components/InputRow/InputRow';

const expenses = [
  { name: 'food', value: 100, color: genNextColor.next().value },
  { name: 'bills', value: 200, color: genNextColor.next().value },
  { name: 'things', value: 50, color: genNextColor.next().value },
];

class App extends Component {
  render() {
    if (!this.props.store) {
      return null;
    }
    return (
      <div className="App">
        <IncomeManager />
        <SplitBar items={expenses} total={this.props.store.getStoreValue('income')} />
        <InputRow initialColor={genNextColor.next().value} />
      </div>
    );
  }
}

export default Store.connect(App);
