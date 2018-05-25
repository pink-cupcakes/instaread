import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './components/List.jsx';

import css from './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return <List changeView={this.changeView} />
  }
}

ReactDOM.render(<App />, document.getElementById('app'));