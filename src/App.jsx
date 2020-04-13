import React, { Component } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import DevicesIcon from '@material-ui/icons/Devices';
import Main from './Main';
import Home from './routes/Home';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null,
    };
  }

  render() {
    const routes = [
      {
        path: 'home',
        name: 'Home',
        icon: <DevicesIcon />,
        component: (props) => (<Home {...props} />),
      },
    ];
    return (
      <Router>
        <div>
          <Main routes={routes} />
        </div>
      </Router>
    );
  }
}

export default App;
