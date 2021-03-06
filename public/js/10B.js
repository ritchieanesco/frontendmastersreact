/* Abstract reusable component and loop through data */

import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>My Landing</h1>
        <input type='text' placeholder='Search' />
        <Link to='/search'>or Browse all</Link>
      </div>
    )
  }
})

export default Landing
