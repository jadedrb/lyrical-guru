import React, { useContext } from 'react';
import { Context } from '../context';

function Choice(props) {
    const context = useContext(Context)

    const handleClick = () => context.setDataInContext('trackList', [...context.state.trackList].filter(t => t.track_id !== props.song.track_id)) 

    return(
        <div className='choice'>
            <div>
                <p>{props.song.track_name}</p>
            </div>
            <div>
                <p>{props.song.artist_name}</p>
            </div>
            <div>
                <p>{props.song.album_name}</p>
            </div>
            <div className='undo-choice' onClick={handleClick}>X</div>
        </div>
    )
}

export default Choice;