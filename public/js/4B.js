/* global React ReactDOM */

import React from 'react'

// Factories and props

var div = React.DOM.div
var h1 = React.DOM.h1

// param objects can be passed using this.props
// this.props.title being passed from myTitleFactory declaration
var myTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({
  style: {
    color: this.props.color
  }
}, this.props.title)
      )
    )
  }
})

export default myTitle