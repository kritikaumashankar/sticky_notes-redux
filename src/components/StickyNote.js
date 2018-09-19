import React from 'react'
import { connect } from 'react-redux'
import StickyNotesForm from './StickyNotesForm';
 import { deleteStickyNote } from '../actions/stickyNotes';
 import { editStickyNote } from '../actions/stickyNotes'


 class StickyNote extends React.Component {

   state = {id:null, description: '' ,edit: false}
   componentDidMount(){
    this.setState({id: this.props.id, description: this.props.description})

   }

  toggleEdit=()=> {
  this.setState({edit: !this.state.edit})
}

submit =(description) => {
  const { dispatch } = this.props 
  this.setState({description : description})
  dispatch(editStickyNote(this.state.id, description))
}

 show = () => {
   const {description} = this.state
  return(
    <div>
      {description}
    </div>
    )
}

 form= (id,description) => {
  const sn = {id, description}
  return(<StickyNotesForm sn={sn} submit={this.submit}/>)  
}

  render(){

    const {edit}= this.state
    const {id}= this.props
    const {description}= this.state
    return (
      <div>
        { edit ? this.form(id,description) : this.show() }
        <button onClick={this.toggleEdit}>
        { edit ? 'Done' : 'Edit' }
        </button>
        <button onClick={ () => this.props.dispatch(deleteStickyNote(id)) }>X</button>

      </div>
    )
  }
    
  }


export default connect()(StickyNote)