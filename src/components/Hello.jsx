import React from 'react';

class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello!'
    };
  }

  render() {
    return (
      <h4>{this.state.message}</h4>
    );
  }
}

export default Hello;
