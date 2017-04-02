/* Details page */
import React from 'react'
import ShowCard from './13D'
const { arrayOf, shape, string } = React.PropTypes

// render () function call is called enhanced object literal e6 syntax
// es6 is not about writing function

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  },
  getInitialState () {
    return {
      searchTerm: ''
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
          {this.props.shows
            .filter((show) => {
              return `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            })
            .map((show) => {
              return (
                <ShowCard key={show.imdbID} {...show} />
              )
            })
          }
        </div>
      </div>
    )
  }
})
/* <ShowCard key={show.imdbID} show={show} /> {...show} spread passes in the specified object */

export default Search
