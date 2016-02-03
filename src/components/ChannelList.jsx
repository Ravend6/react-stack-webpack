import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';

var {Card, List} = mui;

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: [
        'Dogs',
        'Cats',
        'Lols',
      ]
    };
  }

  render() {
    var channelNodes = this.state.channels.map((channel, index) => {
      return (
        <Channel key={index} channel={channel} />
      );
    });

    return (
      // <ul>{messageNodes}</ul>
      <Card style={{
        flexGrow: 1,  
      }}>
        <List>
          {channelNodes}
        </List>
      </Card>
    );
  }
}
