/* Abstract reusable component and loop through data */

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from './10B'
import Search from './10C'
import '../normalize.css'
import '../style.css'

// this view will be available on all pages.. consider this the layout view
// see nav and footer below which will available on all pages
// any pattern matches will load that page
const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          {/* <nav></nav> */}
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
          {/* <footer></footer> */}
        </div>
      </BrowserRouter>
    )
  }
})

// <App /> short for react.createElement
render(<App />, document.getElementById('app'))
