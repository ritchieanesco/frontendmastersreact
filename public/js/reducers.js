/* REDUCER - Used with redux */
/* Setting up Reducers
1. create default reducer
2. create store
3. create actions
4. create actionCreaters
5. add in the new actions
*/

import { SET_SEARCH_TERM } from './actions'

const DEFAULT_STATE = {
  searchTerm: ''
}

const setSearchTerm = (state, action) => {
  // extend state - merge new data with old
  // DO NOT MODIFY OLD OBJECT
  // redux will do a shallow comparison
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}

// ES6 default parameter (state=DEFAULT_STATE)
const rootReducer = (state = DEFAULT_STATE, action) => {
  // ES5 way
  // state = state || DEFAULT_STATE
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    default:
      return state
  }
}

export default rootReducer
