/* global React ReactDOM */

/*Using webpack to compile all imports - cmd line is `webpack public/js/4A public/js/4` (webpack inputFile outputFile) */
/*
Production cmd
NODE_ENV=production webpack -p public/js/4A.js public/js/4.js

Develop cmd
webpack public/js/4A public/js/4
*/

import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './5B' //need to set root directory

var myComponent = React.createClass({
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

ReactDOM.render(React.createElement(myComponent), document.getElementById('app'))
