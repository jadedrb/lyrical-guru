import React from 'react';

function Answers(props) {
    
    const random = text => Math.floor(Math.random() * text.length)

    let answer = props.answer[0].lyrics_body.split('...')[0]
    let randomStart = random(answer)
    let start = randomStart < answer.length - 30 ? randomStart : answer.length - 30
    let finish = start + 30
    let piece = answer.slice(start, finish)
    console.log(piece)
    return (
        <div id='answers'>
            <ul>
                {props.possible.map((t,i) => <li key={i}>{t[0].track_name} - <i>{t[0].artist_name}</i></li>)}
            </ul>
            <div id='answer-piece'>
                ... {piece} ...
            </div>
        </div>
    )
}

export default Answers;