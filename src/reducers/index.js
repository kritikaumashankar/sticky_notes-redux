import { combineReducers } from 'redux'
import stickyNotes from './stickyNotes'
import nextId from './nextId'

const rootReducer = combineReducers({
  stickyNotes,
  nextId,
})

export default rootReducer