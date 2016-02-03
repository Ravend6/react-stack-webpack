import React from 'react';
import mui from 'material-ui';
import AppBar from 'material-ui/lib/app-bar';
import Colors from 'material-ui/lib/styles/colors';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';
import Login from './Login.jsx';
import Hello from './Hello.jsx';
import Hello2 from './Hello2.jsx';

// var ThemeManager = new mui.Styles.ThemeManager();
// var Colors = mui.Styles.Colors;
// var AppBar = mui.AppBar;

@connectToStores
class App extends React.Component {
  constructor() {
    super();

    // ThemeManager.setPalette({
    //   primary1Color: Colors.blue500,
    //   primary2Color: Colors.blue700,
    //   primary3Color: Colors.blue100,
    //   accent1Color: Colors.pink400,
    // });

    this.state = {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
      open: false
    };
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext() {
    return {muiTheme: this.state.muiTheme};
  }

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {accent1Color: Colors.deepOrange500});

    this.setState({muiTheme: newMuiTheme});
  }

  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  render() {
    var view = <Login />;
    if (this.props.user) {
      view = (
        <div>
          <div style={{
            display: 'flex',
            flexFlow: 'row wrap',
            maxWidth: 1200,
            width: '100%',
            margin: '30px auto',
            // padding: '0 10px',
          }}>
            <ChannelList />
            <MessageList />
          </div>
          <MessageBox />
        </div>
      );
    }

    return (
      <div>
        <AppBar title="Chat"/>
        {{view}}
      </div>
    );
  }
}

export default App;
