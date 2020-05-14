import React from 'react';
import './App.css';
import { Provider, Consumer } from './context';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

import Search from './components/Search';
import Choices from './components/Choices';
import Start from './components/Start';

function App() {

  return (
    <Provider>
      <Router>
        <Link to='/'>Lyrical Guru</Link>
        <Link to='/choices'>Choices</Link>
        <Consumer>
        {v => v.state.trackList.length >= 3 ? <Link to='/start'>Start</Link> : `${v.state.trackList.length}/3`}
        </Consumer>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route path='/choices' component={Choices} />
          <Route path='/start' component={Start} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
