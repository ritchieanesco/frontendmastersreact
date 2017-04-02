/* Adding a header component */

import React from 'react'

// promise based http client
import axios from 'axios'
import Header from './14F'
const { shape, string } = React.PropTypes

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
    })
  },

  getInitialState () {
    return {
      omdbData: {}
    }
  },

  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?i=${this.props.show.imdbID}`)
    .then((response) => {
      this.setState({omdbData: response.data})
    })
    .catch((error) => console.error('axios error', error))
    // if promise callback is standard function call... will have to bind to this or call self
    // axios.get(...).then(function () { this.setState({omdbData: response.data}) }.bind(this) )
  },

  render () {
    const { title, year, poster, trailer, description } = this.props.show
    let rating
    if (this.state.omdbData.imdbRating) {
      rating = <h3>{this.state.omdbData.imdbRating}</h3>
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

// stateless functional component example
// these components just render stuff
// you can pass props to it via parameter eg. const Details = (props) => {}
// const Details = () => {
//   return <h1>Static method equivalent</h1>
// }

export default Details
