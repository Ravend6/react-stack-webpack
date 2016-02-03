import React from 'react';

class Hello2 extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello2!'
    };
  }

  render() {
    return (
      <h4>{this.state.message}</h4>
    );
  }
}

export default Hello2;
