import React, { Component } from 'react';
import ColorPicker from './ColorPicker.jsx';
import ColoredHeader from './ColoredHeader.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'black'
    };
  }

  render() {
    return (
      <div>
        <ColoredHeader color={this.state.color}>Hello React :)</ColoredHeader>
        <ColorPicker
          colors={['red', 'green', 'blue', 'pink', 'purple']}
          onNewColor={this._onNewColor}
        />
      </div>
    );
  }

  _onNewColor = color => {
    console.log('got color', color);
    this.setState({ color });
  };
}

export default App;
