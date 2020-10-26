import React, { useContext } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Context } from '../context';

import Search from './Search';
import Choices from './Choices';
import Start from './Start';

const NavBar = () => {
    const context = useContext(Context)
    let startButton = context.state.trackList.length >= 3 ? <Link to='/start'>Start</Link> : `${context.state.trackList.length}/3`
    let bigText = context.state.results.length || context.state.loading ? <Link to='/'>Lyrical Guru</Link> : <div className='default-page'>Lyrical Guru</div>

    let starterPageText = (
        <p className='starter-text'>
            Try your best to identify lyrics from your favorite songs... or test your friends! 
            
            <br/>Choose at least three songs, but preferably five.
            <br/><br/>Hopefully you listen to music!
            <br/><br/><Link to='/choices'>Choices</Link>
        </p>
    )

    let displayStarterPageText = context.state.results.length || context.state.loading ? <Link to='/choices'>Choices</Link> : starterPageText

    return (
        <Router>    
            {bigText}
            {displayStarterPageText}
            {startButton}
            <Switch>
                <Route exact path='/' component={Search} />
                <Route path='/choices' component={Choices} />
                <Route path='/start' component={Start} />
            </Switch>
        </Router>
    )
}

export default NavBar;


