import React, { useContext } from 'react';
import { Context } from '../context';

import Choice from './Choice'

function Choices() {
    const context = useContext(Context)

    const handleClick = input => context.apiCall({type: 'lyrics', input})

    return(
        <ul>
            {console.log(context.state.trackList)}
            {context.state.trackList.map((t,i) => <Choice key={i} song={t} onClick={() => handleClick(t.track_id)}/>)}
        </ul>
    )
}

export default Choices;