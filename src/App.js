import React from 'react';
import './App.css';
import { Provider } from './context';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Search from './components/Search';
import Choices from './components/Choices';

function App() {

  return (
    <Provider>
      <Router>
        <Link to='/'>Lyrical Guru</Link>
        <Link to='/choices'>Choices</Link>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route path='/choices' component={Choices} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
