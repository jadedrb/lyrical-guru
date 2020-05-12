import React, { useContext } from 'react';
import { Context } from '../context';

function Choices() {
    const context = useContext(Context)

    const handleClick = input => context.apiCall({type: 'lyrics', input})

    return(
        <ul>
            {context.state.trackList.map((t,i) => <li key={i} onClick={() => handleClick(t.track_id)}>"{t.track_name}" - {t.artist_name}</li>)}
        </ul>
    )
}

export default Choices;