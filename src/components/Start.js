import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context';

import Answers from './Answers';

function Start() {
    const context = useContext(Context)
    let [game, setGame] = useState(false)
    let [type, setType] = useState('')
    let [possibleSongs, setPossibleSongs] = useState([])
    let [answer, setAnswer] = useState([])
    
    useEffect(() => {
        for (let song of context.state.trackList) {
            let input = song.track_id
            context.apiCall({type: 'lyrics', input})
        }
    }, []) 

    useEffect(() => {
        let { trackList, lyrics } = context.state
        if (trackList.length === lyrics.length) {
            setGame(true)
            typeOfQuestion()
        }
    }, [context])

    const randomIndexOfArr = arr => Math.floor(Math.random() * arr.length)

    const typeOfQuestion = () => {
        let types = ['lyric-piece']
        setType(types[randomIndexOfArr(types)])
        selectPossibleSongs()
    }

    const selectPossibleSongs = () => {
        let { trackList, lyrics } = context.state
        let pool = [...trackList]
        let atMostFive = lyrics.length >= 5 ? 5 : lyrics.length
        let finalSelection = []
        while (atMostFive) {
            finalSelection.push(pool.splice(randomIndexOfArr(pool),1))
            atMostFive--
        }
        let findAnswerLyrics = finalSelection[randomIndexOfArr(finalSelection)][0]['track_id']
        console.log(findAnswerLyrics)
        let foundAnswer = lyrics.filter(t => t.track_id === findAnswerLyrics)
        setPossibleSongs(finalSelection)
        setAnswer(foundAnswer)
        console.log(foundAnswer)
    }

    return(
        <div>
            {game ? 'Quiz' : 'Loading...'}
            {answer.length ? <Answers possible={possibleSongs} answer={answer}/> : ''}
        </div>
    )
}

export default Start;