
const stickyNotes = ( state = [], action ) => {
  switch(action.type) {
    case 'ADD_STICKY_NOTES':
      return [action.stickyNote, ...state]
       case 'EDIT_STICKY_NOTES':
       return state.map( sn => {
         debugger
         if(sn.id === action.id){
           sn = action
         }
             
        return sn
      })
      case 'DELETE_STICKY_NOTES':
      return state.filter( t => t.id !== action.id )
    default:
      return state
  }
}

export default stickyNotes