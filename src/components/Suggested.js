import React, { useContext } from 'react';
import { Context } from '../context';

function Suggested(props) {
    const context = useContext(Context)

    const handleClick = () => context.setDataInContext('trackList', [...context.state.trackList, props.song])

    return(
        <div className='suggested' onClick={handleClick}>
            <div>
                <p>{props.song.track_name}</p>
            </div>
            <div>
                <p>{props.song.artist_name}</p>
            </div>
            <div>
                <p>{props.song.album_name}</p>
            </div>
        </div>
    )
}

export default Suggested;