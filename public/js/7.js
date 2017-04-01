/* Routing Urls */

import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Match } from 'react-router'
import Landing from './7B'
import '../normalize.css'
import '../style.css'

//this view will be available on all pages.. consider this the layout view
// see nav and footer below which will available on all pages
//any pattern matches will load that page
const App = React.createClass({
  render () {
    return (
      <HashRouter>
        <div className='app'>
          // <nav></nav> 
          <Match exactly pattern='/' component={Landing} />
          // <footer></footer>
        </div>
      </HashRouter>
    )
  }
})

// <App /> short for react.createElement
render(<App />, document.getElementById('app'))
