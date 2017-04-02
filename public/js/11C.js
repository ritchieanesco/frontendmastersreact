/* Setting application state */
import React from 'react'
import preload from '../../public/data.json'
import ShowCard from './10D'

// render () function call is called enhanced object literal e6 syntax
// es6 is not about writing function


const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'this is the default string'
    }
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
    // setState is the gatekeeper to changing state
    this.forceUpdate()
    // force everything to re-render - not a good thing
    // usually used for third party scripts
  },
  render () {
    return (
      <div className='search'>
        <header>
          <h1>Search ({this.state.searchTerm})</h1>
          <input onChange={this.handleSearchTermChange} type='text' value={this.state.searchTerm} placeholder='Search' />
        </header>
        { /* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */ }
        <div>
          {preload.shows.map((show) => {
            return (
              <ShowCard key={show.imdbID} {...show} />
            )
          })}
        </div>
      </div>
    )
  }
})
/* <ShowCard key={show.imdbID} show={show} /> {...show} spread passes in the specified object */

export default Search
