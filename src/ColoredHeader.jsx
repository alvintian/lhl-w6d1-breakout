import React, { Component } from 'react';

class ColoredHeader extends Component {
  render() {
    const style = { color: this.props.color };
    return <h1 style={style}>{this.props.children}</h1>;
  }
}

export default ColoredHeader;
