/* Adding a header component */

import React from 'react'
import { Link } from 'react-router'

// es6 classes
class Header extends React.Component {

  render () {
    return (
      <header className='header'>
        <h1>
          <Link to='/'>My First Component</Link>
        </h1>
      </header>
    )
  }

}

export default Header
