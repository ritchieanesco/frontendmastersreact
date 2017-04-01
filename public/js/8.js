/* Routing Urls */

import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Match } from 'react-router'
import Landing from './8B'
import Search from './8C'
import '../normalize.css'
import '../style.css'

// this view will be available on all pages.. consider this the layout view
// see nav and footer below which will available on all pages
// any pattern matches will load that page
const App = React.createClass({
  render () {
    return (
      <HashRouter>
        <div className='app'>
          {/* <nav></nav> */}
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
          {/* <footer></footer> */}
        </div>
      </HashRouter>
    )
  }
})

// <App /> short for react.createElement
render(<App />, document.getElementById('app'))
