import React from 'react';
import {ListItem, Avatar} from 'material-ui';

// var {ListItem} = mui;

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem>
        {this.props.channel}
      </ListItem>

      // <li>
      //   {this.props.index + '. ' + this.props.message}
      // </li>
      // <li style={{color: 'purple'}} key={index}>{index + 1 + '. ' + message}</li>
      // <div>{this.props.message}</div>
    );
  }
}

// export default Message;
