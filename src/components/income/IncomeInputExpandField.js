
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Store from '../../store/store';

class IncomeInputExpandField extends Component {
  constructor(props) {
    super(props);

    this.updateStoreIncome = this.updateStoreIncome.bind(this);
  }

  updateStoreIncome({ target: { value } }) {
    this.props.store.setStore('income', +value);
    console.log(this.props.store.getStoreValue('income'));
  }

  render() {
    return (
      <div className="IncomeInputExpandField">
        <input onChange={this.updateStoreIncome} type="text" />
      </div>
    );
  }
}

IncomeInputExpandField.propTypes = {
  store: PropTypes.instanceOf(Store.Store).isRequired,
};

export default Store.connect(IncomeInputExpandField);
