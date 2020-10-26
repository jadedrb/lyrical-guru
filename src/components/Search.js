import React, { useState, useContext } from 'react';
import { Context } from '../context';

import Suggested from './Suggested'

function Search() {
  let [input, setInput] = useState('')
  const context = useContext(Context)
  let { results, loading } = context.state
  
  const onChange = (e) => {
    if (loading === false) context.setDataInContext('results', [])
    setInput(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    context.apiCall({type: 'results', input})
  }

  let classN = results.length || loading ? 'submit-form-button-results' : 'submit-form-button'

  return (
      <form onSubmit={onSubmit} className={classN}>
        <input value={input} onChange={onChange}></input>
        <button>SUBMIT</button> <br/><br/>
        {loading ? 'Loading...' : ''}
        {results.length ? <div id='header'><h6>TITLE</h6><h6>ARTIST</h6><h6>ALBUM</h6></div> : ''}
        {results.length ? results.map((l,i) => <Suggested key={i} song={l.track}/>) : ''}
      </form>
  );
}

export default Search;
