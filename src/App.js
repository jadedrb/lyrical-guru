import React, { Component } from 'react';
import './App.css';
import { Provider } from './context';

import NavBar from './components/NavBar'

class App extends Component {

  render() {
    return (
      <Provider>
        <NavBar/>
      </Provider>
    );
  }
}

export default App;
