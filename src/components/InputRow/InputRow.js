import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import ColorSelector from '../ColorSelector/ColorSelector';
import './inputRow.css';

class InputRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.initialColor,
    };
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChangeColor(color) {
    this.setState({ color });
  }

  render() {
    return (
      <div className="InputRow">
        <ColorSelector
          color={this.state.color}
          onChange={this.handleChangeColor}
        />
        <Input
          color={this.state.color}
          inputKey={this.props.inputRowKey}
          onUpdate={this.props.onUpdateName}
        />
        <Input
          color={this.state.color}
          inputKey={this.props.inputRowKey}
          onUpdate={this.props.onUpdateValue}
        />
      </div>
    );
  }
}

InputRow.propTypes = {
  inputRowKey: PropTypes.string.isRequired,
  initialColor: PropTypes.string.isRequired,
  onUpdateName: PropTypes.func.isRequired,
  onUpdateValue: PropTypes.func.isRequired,
};

export default InputRow;
