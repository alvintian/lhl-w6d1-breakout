import React, { Component } from 'react';

class ColorPicker extends Component {
  render() {
    const buttons = this.props.colors.map(color => {
      return (
        <button key={color} onClick={this._onColorChange(color)}>
          {color}
        </button>
      );
    });
    return (
      <div>
        {buttons}
        {/* <button onClick={this._onColorChange('red')}>Red</button>
        <button onClick={this._onColorChange('blue')}>Blue</button>
        <button onClick={this._onColorChange('green')}>Green</button> */}
      </div>
    );
  }

  _onColorChange = color => () => {
    this.props.onNewColor(color);
  };
}

export default ColorPicker;
