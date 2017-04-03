/* Adding a header component */

import React from 'react'
import { Link } from 'react-router'

// es6 classes
class Header extends React.Component {
  render () {
    // depending on showSearch property show input field
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input onChange={this.props.handleSearchTermChange} type='text' value={this.props.searchTerm} placeholder='Search' />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>Back</Link>
        </h2>
      )
    }
    return (
      <header className='header'>
        <h1>
          <Link to='/'>My First Component</Link>
        </h1>
        {utilSpace}
      </header>
    )
  }

}

const { func, bool, string } = React.PropTypes

// propTypes have to be set here as its not available via es6 classes
Header.propTypes = {
  handleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string
}

export default Header
