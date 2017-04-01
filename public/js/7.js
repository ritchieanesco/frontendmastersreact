/* Routing Urls */

import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Match } from 'react-router'
import Landing from './7B'
import '../normalize.css'
import '../style.css'

const App = React.createClass({
  render () {
    return (
      <HashRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
        </div>
      </HashRouter>
    )
  }
})

// <App /> short for react.createElement
render(<App />, document.getElementById('app'))
