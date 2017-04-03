/* Adding REDUX */

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'

const { string, func, object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatch: func
  },
  handleSearchTermChange (event) {
    // this method comes from connect module
    // pass in the setSearchTerm function from actionCreator file
    this.props.dispatch(setSearchTerm(event.target.value))
  },
  handleSearchSubmit (event) {
    event.preventDefault()
    // go to search results page
    // context is global... hooks app together.. BE CAREFUL
    // programmatically navigate with router
    this.context.router.transitionTo('/search')
  },
  render () {
    return (
      <div className='landing'>
        <h1>My Landing</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input type='text' onChange={this.handleSearchTermChange} placeholder='Search' value={this.props.searchTerm} />
          <Link to='/search'>or Browse all</Link>
        </form>
      </div>
    )
  }
})

// Call redux store and store state
// This object will be passed in as a prop to Landing component
const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

// connect function will inject the object from mapStateToProps to PropTypes
export default connect(mapStateToProps)(Landing)
