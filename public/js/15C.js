/* Adding REDUX */

import React from 'react'
import { connect } from 'react-redux'
import ShowCard from './15D'
import Header from './15F'
const { arrayOf, shape, string } = React.PropTypes

// render () function call is called enhanced object literal e6 syntax
// es6 is not about writing function

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    })),
    searchTerm: string
  },
  render () {
    // showSearch without the value is short for showSearch={true}
    return (
      <div className='search'>
        <Header showSearch />
        { /* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */ }
        <div>
          {this.props.shows
            .filter((show) => {
              return `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0
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

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Search)
