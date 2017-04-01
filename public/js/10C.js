/* Abstract reusable component and loop through data */

import React from 'react'
import preload from '../../public/data.json'
import ShowCard from './10D'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        { /* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */ }
        {preload.shows.map((show) => {
          return (
            <ShowCard key={show.imdbID} {...show} />
          )
        })}
      </div>
    )
  }
})
/* <ShowCard key={show.imdbID} show={show} /> {...show} spread passes in the specified object */

export default Search
