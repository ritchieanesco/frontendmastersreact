/* Details page */

import React from 'react'
// type annotataions for data
const {string} = React.PropTypes

const ShowCard = React.createClass({
  propTypes: {
    poster: string,
    title: string,
    year: string,
    description: string
  },
  render () {
    // destructuring - e6 feature
    const { poster, title, year, description } = this.props
    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
})

export default ShowCard
