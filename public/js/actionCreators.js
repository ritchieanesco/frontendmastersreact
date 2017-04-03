// { SET_SEARCH_TERM } is a named export... i.e. the const in ./actions file is already available
import { SET_SEARCH_TERM } from './actions'

export function setSearchTerm (searchTerm) {
  // below is ES6 and is equivalent to return {type: SET_SEARCH_TERM, searchTerm: searchTerm}
  // i.e. don't need to set searchTerm property can pass the argument name to that object
  return {type: SET_SEARCH_TERM, searchTerm}
}
