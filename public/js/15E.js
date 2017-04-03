/* Adding REDUX */

import React from 'react'

// promise based http client
import { connect } from 'react-redux'
import { getOMDBDetails } from './actionCreators'
import Header from './15F'
const { shape, string, func } = React.PropTypes

// componentDidMount method - hook to call when component is loaded

const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string,
      year: string,
      poster: string,
      trailer: string,
      description: string,
      imdbID: string
    }),
    omdbData: shape({
      imdbData: string
    }),
    dispatch: func
  },

  componentDidMount () {
    // call ajax if imdb rating is not stored
    if (!this.props.omdbData.imdbRating) {
      this.props.dispatch(getOMDBDetails(this.props.show.imdbID))
    }
  },

  render () {
    const { title, year, poster, trailer, description } = this.props.show
    let rating
    if (this.props.omdbData.imdbRating) {
      rating = <h3>{this.props.omdbData.imdbRating}</h3>
    } else {
      rating = <img src='/public/img/loading.png' alt='loading indicator' />
    }
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
})

// ownProps param get properties from component
const mapStateToProps = (state, ownProps) => {
  const omdbData = state.omdbData[ownProps.show.imdbID] ? state.omdbData[ownProps.show.imdbID] : {}
  return {
    omdbData
  }
}

// stateless functional component example
// these components just render stuff
// you can pass props to it via parameter eg. const Details = (props) => {}
// const Details = () => {
//   return <h1>Static method equivalent</h1>
// }

export default connect(mapStateToProps)(Details)
