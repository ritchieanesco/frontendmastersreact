/* REDUCER - Used with redux */
/* Setting up Reducers
1. create default reducer
2. create store
3. create actions
4. create actionCreaters
5. add in the new actions
*/

import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'

const DEFAULT_STATE = {
  searchTerm: '',
  omdbData: {}
}

const setSearchTerm = (state, action) => {
  // extend state - merge new data with old
  // DO NOT MODIFY OLD OBJECT
  // redux will do a shallow comparison
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}

const addOMDBData = (state, action) => {
  // merge omdbdata
  const newOMDBData = {}
  Object.assign(newOMDBData, state.omdbData, {[action.imdbID]: action.omdbData})
  const newState = {}
  // merge state
  Object.assign(newState, state, {omdbData: newOMDBData})
  return newState
}

// ES6 default parameter (state=DEFAULT_STATE)
const rootReducer = (state = DEFAULT_STATE, action) => {
  // ES5 way
  // state = state || DEFAULT_STATE
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case ADD_OMDB_DATA:
      return addOMDBData(state, action)
    default:
      return state
  }
}

export default rootReducer
