import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// activating redux devtools - make sure its in browser and has devtools for redux
// (f) => f means do nothing / return what you are given
const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

export default store
