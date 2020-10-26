import React, { Component } from 'react';
import axios from 'axios';

export const Context = React.createContext();

export class Provider extends Component {
    state = {
        loading: undefined,
        results: [],
        trackList: [],
        lyrics: [],
        correct: 0,
        points: 0,
        correctStreak: 0,
        pointsStreak: 0,
        timeBonus: 0
    }
    /* DOCS: https://developer.musixmatch.com/documentation/api-reference/track-chart-get */
    /* track.lyrics.get?track_id= ...trackList[0].track_id...  &apikey= */
    /* track.search?q_track= ...user input... &page_size=10&page=1&s_track_rating=desc */
    /* OTHER SEARCH OPTIONS: q_artist, q_lyrics */
    setTypeText = type => {
        let typeSearch, moreDetails;
        if (type === 'results') {
            typeSearch = 'track.search?q_track='
            moreDetails = '&page_size=10&page=1&s_track_rating=desc&apikey='
        } else { 
            typeSearch = 'track.lyrics.get?track_id='
            moreDetails = '&apikey='
        }
        return {typeSearch, moreDetails}
    }

    setTypeState = (type, res, track_id) => {
        console.log('setTypeState', type)
        if (type === 'results') this.setState({results: res.data.message.body.track_list, loading: false})
        else this.setState({lyrics: [...this.state.lyrics, {...res.data.message.body.lyrics, track_id}], loading: false })
        console.log(this.state)
    }

    apiCall = ({type, input}) => {
        let cors = 'https://cors-anywhere.herokuapp.com/'
        let startApi = 'https://api.musixmatch.com/ws/1.1/'
        let { typeSearch, moreDetails } = this.setTypeText(type)
        console.log('apiCall')
        this.setState({loading: true})
        console.log(cors + startApi + typeSearch + input + moreDetails + process.env.REACT_APP_KEY)
        axios
            .get(cors + startApi + typeSearch + input + moreDetails + process.env.REACT_APP_KEY)
            .then(res => this.setTypeState(type, res, input))
            .catch(err => console.log(err))
    }

    setDataInContext = (property, data) => this.setState({ [property]: data })

    render() {
        let { state, apiCall, setDataInContext } = this
        return(
            <Context.Provider value={{state, apiCall, setDataInContext}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;