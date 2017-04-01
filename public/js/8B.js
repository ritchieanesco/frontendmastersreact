/* Routing Urls */

import React from 'react'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>My Landing</h1>
        <input type='text' placeholder='Search' />
        <a>or Browse all</a>
      </div>
    )
  }
})

export default Landing
