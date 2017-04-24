import React, { Component } from 'react';
import colors from '../ColorSelector/colors';
import './bar.css';

const sumItems = (sum, item) => sum + item.value;

export default class SplitBar extends Component {

  itemSum() {
    return this.props.items.reduce(sumItems, 0);
  }

  isOverLimit() {
    return this.props.total <= this.itemSum.bind(this);
  }

  renderBarPart(item) {
    const width = 100 * (item.value / this.props.total) + "%"
    return (
      <div
        key={item.name}
        className="BarPart"
        style={{width, background: item.color}}
      />
    );
  }

  renderLeftOver() {
    if (this.isOverLimit()) {
      return null;
    }
    return (
      <div
        key={'leftOver'}
        className="BarPart"
        style={{
          width: (this.props.total - this.itemSum()) / 10 + "%",
          background: colors.GRAY
        }}
      />
    )
  }

  render() {
    const {items} = this.props;
    const renderItems = items.map(this.renderBarPart.bind(this));
    const renderLeftOver = this.renderLeftOver();

    return (
      <div className="Bar">
        {renderItems}
        {renderLeftOver}
      </div>
    )
  }
}
