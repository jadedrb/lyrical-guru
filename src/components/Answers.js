import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context';

function Answers(props) {
    let [piece, setPiece] = useState('')
    let [answerDiv, setAnswerDiv] = useState('block')
    let [answerText, setAnswerText] = useState('')
    const context = useContext(Context)
    const random = text => Math.floor(Math.random() * text.length)

    let { correct, correctStreak, points, pointsStreak } = context.state

    const toggleAnswerDiv = () => answerDiv === 'none' ? setAnswerDiv('block') : setAnswerDiv('none')

    const handleClick = id => {
        let correct = id === props.answer[0].track_id
        let { setDataInContext, state } = context
        if (correct) {
            if (state.correct + 1 > state.correctStreak) setDataInContext('correctStreak', state.correctStreak + 1)
            if (state.points + 100 > state.pointsStreak) setDataInContext('pointsStreak', state.pointsStreak + 100)
            setDataInContext('correct', state.correct + 1)
            setDataInContext('points', state.points + 100)
            alert('correct')
            //setAnswerText('Correct!')
            //setTimeout(toggleAnswerDiv(), 1000)
            console.log(props)
            props.selectPossibleSongs()
            sliceOfLyrics()
        } else {
            //setAnswerText('Wrong.')
            //setTimeout(toggleAnswerDiv(), 1000)
            setDataInContext('correct', 0)
            setDataInContext('points', 0)
            alert('wrong')
            console.log(props)
            props.selectPossibleSongs()
            sliceOfLyrics()
        }
        console.log(context)
    }

    const sliceOfLyrics = () => {
        console.log(props.answer)
        console.log(props.possible)
        let answer = props.answer[0].lyrics_body?.split('...')[0]
        if (!answer) answer = '???'
        let randomStart = random(answer)
        let start = randomStart < answer.length - 30 ? randomStart : answer.length - 30
        let finish = start + 30
        setPiece(answer.slice(start, finish))
        console.log(piece)
    }

    useEffect(() => {
        sliceOfLyrics()
    }, [])

    return (
        <>
            {/*<div id="cover-div" style={{ display: answerDiv }}>
                {answerText}
            </div>
            */}
            <div id="scoreboard">
                <h6>High Score</h6>
                <div>Correct: {correctStreak}</div>
                <div>Points: {pointsStreak}</div>
                <h6>Current</h6>
                <div>Correct: {correct}</div>
                <div>Points: {points}</div>
            </div>
            <div id='answers'>
                <h3>Songs</h3>
                <ul>
                    {props.possible.map((t,i) => <li key={i} className='pick' onClick={() => handleClick(t[0].track_id)}>{t[0].track_name} - <i>{t[0].artist_name}</i></li>)}
                </ul>
                <h3>Lyric</h3>
                <div id='answer-piece'>
                    ... {piece} ...
                </div>
            </div>
        </>
    )
}

export default Answers;