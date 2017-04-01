/* global React ReactDOM */

/*JSX - html in javascript*/

import React from 'react'

const div = React.DOM.div
const h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    var style = {color: this.props.color}
    return (
      <div>
        <h1 style= { style } >
          {this.props.title}
        </h1>
      </div>
    )
  }
})

export default MyTitle