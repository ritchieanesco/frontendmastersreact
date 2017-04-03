/* Adding REDUX */

import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
import { Link } from 'react-router'

// es6 classes
class Header extends React.Component {
  constructor (props) {
    super(props)
    // this needs to be done to keep `this` context
    // it needs to point to Header class
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  }

  render () {
    // depending on showSearch property show input field
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input onChange={this.handleSearchTermChange} type='text' value={this.props.searchTerm} placeholder='Search' />
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
  showSearch: bool,
  searchTerm: string,
  dispatch: func
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
