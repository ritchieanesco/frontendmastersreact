// { SET_SEARCH_TERM } is a named export... i.e. the const in ./actions file is already available
import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'
import axios from 'axios'

export function setSearchTerm (searchTerm) {
  // below is ES6 and is equivalent to return {type: SET_SEARCH_TERM, searchTerm: searchTerm}
  // i.e. don't need to set searchTerm property can pass the argument name to that object
  return {type: SET_SEARCH_TERM, searchTerm}
}

export function addOMDBData (imdbID, omdbData) {
  return {type: ADD_OMDB_DATA, imdbID, omdbData}
}

export function getOMDBDetails (imdbID) {
  // getState param retrives the current state from redux
  return function (dispatch, getState) {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
    .then((response) => {
      dispatch(addOMDBData(imdbID, response.data))
    })
    .catch((error) => console.error('axios error', error))
  }
}
