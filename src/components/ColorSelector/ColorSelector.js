import React, { Component } from 'react';
import PropTypes from 'prop-types';
import colors, { colorKeys } from './colors';
import './color.css';

const getColorFromIndex = index => colors[colorKeys[index]];

const ColorCircleItem = (props) => {
  const onClick = () => props.onClick(props.index);
  return (
    <div
      className="ColorCircle"
      onClick={onClick}
      style={{
        background: props.color,
        transform: props.rotation,
        zIndex: props.zIndex,
      }}
    />
  );
};

ColorCircleItem.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  rotation: PropTypes.string.isRequired,
  zIndex: PropTypes.string.isRequired,
};

class ColorSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
      open: false,
    };
    this.handleToggleOpen = this.handleToggleOpen.bind(this);
    this.renderColors = this.renderColors.bind(this);
  }

  handleToggleOpen(index) {
    const newColor = getColorFromIndex(index);

    this.setState({
      open: !this.state.open,
      color: newColor,
    });

    if (this.props.onChange) {
      this.props.onChange(newColor);
    }
  }

  renderColors(color, index) {
    let rotation = 'rotate(0deg)';
    let zIndex = '';
    if (this.state.open) {
      rotation = `rotate(${index * 30}deg)`;
    }
    if (this.state.color === getColorFromIndex(index)) {
      zIndex = '10';
    }
    return (
      <ColorCircleItem
        key={index}
        index={index}
        color={color}
        onClick={this.handleToggleOpen}
        rotation={rotation}
        zIndex={zIndex}
      />
    );
  }

  render() {
    return (
      <div className="ColorSelector">
        {colorKeys
          .map(color => colors[color])
          .map(this.renderColors)}
      </div>
    );
  }
}

ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ColorSelector;
