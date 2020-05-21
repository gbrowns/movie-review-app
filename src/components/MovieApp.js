import React, { Component } from 'react'
import MoviePane from './MoviePane'

const MovieScreen = (props) => {
     return (
          <div className = 'movie-screen'>
               <h2>Movie screen</h2>
          </div>
     )
}

class MovieApp extends Component {
     render() {
          return (
               <div className = 'movie-app'>
                    <h1>Movie app</h1>
                    < MovieScreen />
                    < MoviePane />
               </div>
          )
     }
}

export default MovieApp
