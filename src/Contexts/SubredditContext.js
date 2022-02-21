import React, { useState } from 'react'

export const SubredditContext = React.createContext({
  subreddit: 'politics',
  setSubreddit: () => {}
})

export const SubredditProvider = (props) => {

  const setSubreddit = (subreddit) => {
    setState({...state, subreddit: subreddit})
  }

  const initState = {
    subreddit: 'politics',
    setSubreddit: setSubreddit
  } 

  const [state, setState] = useState(initState)

  return (
    <SubredditContext.Provider value={state}>
      {props.children}
    </SubredditContext.Provider>
  )
}