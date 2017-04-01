/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1

var myTitle = React.createClass({
  render: function () {
    return (
			div(null,
				h1(null, 'This is the title')
			)
    )
  }
})

// createFactory method allows instances - convenience method
var myTitleFactory = React.createFactory(myTitle)

var myComponent = React.createClass({
  render: function () {
		// Can also pass in multiple instances to be rendered
    return (
			div(null,
					myTitleFactory(null),
					myTitleFactory(null),
					myTitleFactory(null)
			)
    )
  }
})

ReactDOM.render(React.createElement(myComponent), document.getElementById('app'))
