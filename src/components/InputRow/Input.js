import React, { Component } from 'react';
import './inputRow.css';

export default class Input extends Component {
  render() {
    return (
      <div className="Input">
        <input
          type="text"
          style={{
            color: this.props.color,
            borderBottomColor: this.props.color
          }}
        />
      </div>
    );
  }
}
