/* Abstract out browser specific code for server side rendering */
/* i.e. browser router and react-dom render*/

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
import App from './App'

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))