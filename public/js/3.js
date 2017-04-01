/* global React ReactDOM */

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

// createFactory method allows instances - convenience method
// can pass in read only properties to be rendered eg. different title values
var myTitleFactory = React.createFactory(myTitle)

var myComponent = React.createClass({
  render: function () {
    return (
			div(null,
					myTitleFactory({title: 'title attribute here', color: 'peru'}),
					myTitleFactory({title: 'another title attribute', color: 'mediumaquamarine'}),
					myTitleFactory({title: 'final title attribute', color: 'goldenrod'})
			)
    )
  }
})

ReactDOM.render(React.createElement(myComponent), document.getElementById('app'))
