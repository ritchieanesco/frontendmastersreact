/* Loading Data */

import React from 'react'
import preload from '../../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        { /* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */ }
        {preload.shows.map((show) => {
          return (
            <h3>{show.title}</h3>
          )
        })}
      </div>
    )
  }
})
export default Search
