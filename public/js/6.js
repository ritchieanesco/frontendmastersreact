/* global React ReactDOM */

/* Importing CSS in React */

import React from 'react'
import { render } from 'react-dom'
import '../normalize.css'
import '../style.css'

const App = React.createClass({
	render () {
		return (
			<div className='app'>
				<div className='landing'>
					<h1>My New App</h1>
					<input type='text' placeholder='Search' />
					<a>or Browse all</a>
				</div>
			</div>
		)
	}
})

//<App /> short for react.createElement
render(<App />, document.getElementById('app'))