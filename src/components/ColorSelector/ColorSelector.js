import React, { Component } from 'react';
import colors, { colorKeys } from './colors';
import './color.css';

const getColorFromIndex = (index) => colors[colorKeys[index]];

export default class ColorSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
      open: false
    }
  }

  handleToggleOpen(index) {
    const newColor = getColorFromIndex(index);

    this.setState({
      open: !this.state.open,
      color: newColor
    });

    if (this.props.onChange) {
      this.props.onChange(newColor);
    }
  }

  renderColors(color, index) {
    let rotation = 'rotate(0deg)';
    let zIndex = '';
    if (this.state.open) {
      rotation = 'rotate(' + (index * 30) + 'deg)';
    }
    if (this.state.color === getColorFromIndex(index)) {
      zIndex = '10';
    }
    return (
      <div
        key={index}
        className="ColorCircle"
        onClick={this.handleToggleOpen.bind(this, index)}
        style={{
          background: color,
          transform: rotation,
          zIndex
        }}
      />
    );
  }

  render() {
    return (
      <div className="ColorSelector">
        {colorKeys
          .map(color => colors[color])
          .map(this.renderColors.bind(this))}
      </div>
    )
  }
}
