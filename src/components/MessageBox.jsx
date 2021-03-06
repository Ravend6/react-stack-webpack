import React from 'react';
import {Card} from 'material-ui';
import trim from 'trim';
import Firebase from 'firebase';

// var {ListItem} = mui;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.firebaseRef = new Firebase('https://react-stack6.firebaseio.com/messages');
    this.state = {
      message: '',
      countMessages: 0,
    };
    // var vm = this;
    this.firebaseRef.on("value", function(snapshot) {
      var count = snapshot.numChildren();
      this.setState({
        countMessages: count
      });
    }.bind(this));
  }

  onChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  onKeyUp(e) {
    if (e.keyCode === 13 && trim(e.target.value) != '') {
      e.preventDefault();
      this.firebaseRef.push({
        message: this.state.message
      });

      this.setState({
        message: ''
      });
      console.log('send', trim(e.target.value), 1);
      console.log('send', this.state.countMessages);
    }

  }

  render() {
    return (
      <Card
        style={{
          maxWidth: 1200,
          margin: '30px auto',
          padding: 30
        }}
      >
        <textarea
          value={this.state.message}
          onChange={this.onChange.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
          style={{
            width: '100%',
            borderColor: '#D0D0D0',
            resize: 'none',
            borderRadius: 3,
            minHeight: 50,
            color: '#555',
            fontSize: 14,
            outline: 'auto 0px'
          }}
        />
      </Card>
    );
  }
}
