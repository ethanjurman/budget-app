import React, { Component } from 'react';
import './App.css';

import SplitBar from './components/SplitBar/SplitBar';
import { genNextColor } from './components/ColorSelector/colors';
import IncomeManager from './components/income/IncomeManager';
// import ColorSelect from './components/ColorSelector/ColorSelector';

// import Input from './components/InputRow/Input';
import InputRow from './components/InputRow/InputRow';

class App extends Component {
  render() {
    const expenses = [
      {name: 'food', value: 100, color: genNextColor.next().value},
      {name: 'bills', value: 200, color: genNextColor.next().value},
      {name: 'things', value: 50, color: genNextColor.next().value}
    ]
    const total = 1000
    return (
      <div className="App">
        <IncomeManager />
        <SplitBar items={expenses} total={total}/>
        {
        // <Input color={genNextColor.next().value} />
        // <ColorSelect />
        }
        <InputRow initialColor={genNextColor.next().value} />
      </div>
    );
  }
}

export default App;
