import React, { Component } from 'react';
import Input from './Input';
import ColorSelector from '../ColorSelector/ColorSelector';
import './inputRow.css';

export default class InputRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.initialColor
    }
  }

  handleChangeColor(color) {
    this.setState({color});
  }

  render() {
    return (
      <div className="InputRow">
        <ColorSelector
          color={this.state.color}
          onChange={this.handleChangeColor.bind(this)}
        />
        <Input color={this.state.color}/>
      </div>
    );
  }
}
