/* Details page */

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from './13B'
import Search from './13C'
import Details from './13E'
// centralise data to share with components
import preload from '../../public/data.json'
import '../normalize.css'
import '../style.css'

// this view will be available on all pages.. consider this the layout view
// see nav and footer below which will available on all pages
// any pattern matches will load that page

// pass properties and data to components
// <Match
// pattern='/search'
// shows={preload.shows}
// component={(props) => <Search {...props} />}
// />
// props is passing the browser router properties to components

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          {/* <nav></nav> */}
          <Match exactly pattern='/' component={Landing} />
          <Match
            pattern='/search'
            component={(props) => <Search shows={preload.shows} {...props} />}
          />
          <Match
            pattern='/details/:id'
            component={(props) => {
              const shows = preload.shows.filter((show) => props.params.id === show.imdbID)
              return <Details show={shows[0]} {...props} />
            }}
          />
          {/* <footer></footer> */}
        </div>
      </BrowserRouter>
    )
  }
})

// <App /> short for react.createElement
render(<App />, document.getElementById('app'))
