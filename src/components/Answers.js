import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context';

function Answers(props) {
    let [piece, setPiece] = useState('')
    const context = useContext(Context)
    const random = text => Math.floor(Math.random() * text.length)

    const handleClick = id => {
        let correct = id === props.answer[0].track_id
        if (correct) {
            context.setDataInContext('correct', context.state.correct + 1)
            alert('correct')
        } else {

        }
        console.log(context)
    }

    useEffect(() => {
        let answer = props.answer[0].lyrics_body.split('...')[0]
        let randomStart = random(answer)
        let start = randomStart < answer.length - 30 ? randomStart : answer.length - 30
        let finish = start + 30
        setPiece(answer.slice(start, finish))
        console.log(piece)
    }, [])

    return (
        <div id='answers'>
            <ul>
                {props.possible.map((t,i) => <li key={i} className='pick' onClick={() => handleClick(t[0].track_id)}>{t[0].track_name} - <i>{t[0].artist_name}</i></li>)}
            </ul>
            <div id='answer-piece'>
                ... {piece} ...
            </div>
        </div>
    )
}

export default Answers;