export const ADD_STICKY_NOTES = 'ADD_STICKY_NOTES'
export const EDIT_STICKY_NOTES = 'EDIT_STICKY_NOTES'
export const DELETE_STICKY_NOTES = 'DELETE_STICKY_NOTES'

export const addStickyNote = (stickyNote) => {
  return { type: ADD_STICKY_NOTES, stickyNote }
}

export const editStickyNote = (id,description) => {
  return { type: EDIT_STICKY_NOTES, id,description }
}

export const deleteStickyNote = (id) => {
  return { type: DELETE_STICKY_NOTES, id }
}
