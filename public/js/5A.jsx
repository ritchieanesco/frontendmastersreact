/* global React ReactDOM */

/* Using JSX (html markup in JS) */
/* Custom component names need to be uppercase */

import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './5B' //need to set root directory

var MyComponent = React.createClass({
  render: function () {
    return (
		<div>
			<MyTitle title= 'title attribute here' color= 'peru' />
			<MyTitle title= 'another title attribute' color= 'mediumaquamarine' />
			<MyTitle title= 'final title attribute' color= 'goldenrod' />
		</div>
    )
  }
})

ReactDOM.render(React.createElement(MyComponent), document.getElementById('app'))
