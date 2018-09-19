import React from 'react'
import { connect } from 'react-redux'
import StickyNotesForm from './StickyNotesForm';
 import { deleteStickyNote } from '../actions/stickyNotes';

class StickyNote extends React.Component{
  state={id:0 , description: '',edit: false}


  toggleEdit=()=> {
    debugger
    this.setState({edit: !this.state.edit})
  }

  show(){
    return(
      <div className="boxed">
        {this.props.description}
      </div>
      )
  }
  form(){
    debugger
    const sn = this.props
    return(<StickyNotesForm sn={sn} />)  
  }
  render(){
    const { edit } = this.state
    const {id} = this.props
    return (
      <div>
        { edit ? this.form() : this.show() }
        <button onClick={this.toggleEdit}>
          { edit ? 'Cancel' : 'Edit' }
        </button>
        <button onClick={ () => this.props.dispatch(deleteStickyNote(this.props.id)) }>X</button>

      </div>
    )
  }
}

export default connect()(StickyNote)