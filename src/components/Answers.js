import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context';

function Answers(props) {
    let [piece, setPiece] = useState('')
    let [answerDiv, setAnswerDiv] = useState('none')
    let [answerText, setAnswerText] = useState('')
    let [bonusInput, setBonusInput] = useState('')
    let [bonusPoints, setBonusPoints] = useState('')
    const context = useContext(Context)
    const random = text => Math.floor(Math.random() * text.length)

    let { correct, correctStreak, points, pointsStreak, trackList } = context.state

    const toggleAnswerDiv = () => {
        console.log(answerDiv)
        if (answerDiv === 'none') setAnswerDiv('block') 
        else setAnswerDiv('none')
    }

    const handleClick = id => {
        console.log(props.answer)
        let correct = id === props.answer[0].track_id
        let { setDataInContext, state } = context
        if (correct) {
            let multiplier = state.trackList.length * 25
            if (state.correct + 1 > state.correctStreak) setDataInContext('correctStreak', state.correctStreak + 1)
            if (state.points + multiplier > state.pointsStreak) setDataInContext('pointsStreak', state.pointsStreak + multiplier)
            setDataInContext('correct', state.correct + 1)
            setDataInContext('points', state.points + multiplier)
            //alert('correct')
            setBonusInput(piece)
            toggleAnswerDiv()
            setAnswerText('Correct!')
        } else {

            toggleAnswerDiv()
            setAnswerText('Wrong.')

            setDataInContext('correct', 0)
            setDataInContext('points', 0)
           // alert('wrong')            
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

    const handleClose = () => {
        toggleAnswerDiv()
        props.selectPossibleSongs()
        sliceOfLyrics()
        setBonusPoints('')
    }

    const handleBonus = e => setBonusInput(e.target.value)

    const submitBonus = () => {
        let answer = props.answer[0].lyrics_body?.split('...')[0]
        let inputtedWords = bonusInput.split(' ')
        if (!answer) answer = ['???']
        let bonusPoints = 0;
        let bonusWordBank = {}
        piece.split(' ').forEach(word => bonusWordBank[word] = word)

        inputtedWords.forEach(word => {
            if (answer.includes(word) && !bonusWordBank.hasOwnProperty(word)) {
                bonusWordBank[word] = word
                bonusPoints += 25
            }
                
        })

        if (points + bonusPoints > pointsStreak) context.setDataInContext('pointsStreak', pointsStreak + bonusPoints)
        context.setDataInContext('points', points + bonusPoints)

        setBonusPoints(bonusPoints)
        setTimeout(handleClose, 3000)
    }

    useEffect(() => {
        sliceOfLyrics()
    }, [])

    let correctAnswer = answerText === 'Correct!' ? true : false
    let styleDiv = { display: answerDiv, backgroundColor: correctAnswer ? 'green' : 'red' }
    let correctDiv = correctAnswer ?
                    (
                        <>
                            <p>POINTS</p>
                            <p>Correct Answer: + {trackList.length * 25} (25 x {trackList.length})</p>
                            <p>Bonus: {`+ ${bonusPoints}`}</p>
                            <div id='bonus'>BONUS: <br/><input value={bonusInput} onChange={handleBonus} /></div>
                            <button onClick={submitBonus}>Done</button>
                        </>
                    ) :
                    ''

    return (
        <>
            <div 
              id="cover-div" 
              style={styleDiv}
              onClick={() => !correctAnswer ? handleClose() : null}>         
                {answerText}
                {correctDiv}
            </div>

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