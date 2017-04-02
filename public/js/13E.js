/* Details page */

import React from 'react'
const { shape, string } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string,
      year: string,
      poster: string,
      trailer: string,
      description: string
    })
  },
  render () {
    const { title, year, poster, trailer, description } = this.props.show
    return (
      <div className='details'>
        <header>
          <h1>Details page</h1>
        </header>
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
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
