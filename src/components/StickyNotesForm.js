import React from 'react';
import { connect } from 'react-redux';
import { incId } from '../actions/nextId'
import { addStickyNote } from '../actions/stickyNotes'
import { editStickyNote } from '../actions/stickyNotes'

class StickyNotesForm extends React.Component {
  state = { description: '' }

  componentDidUpdate(prevProps, prevState){
    
    if(prevProps.id !== this.props.id){
      debugger
      this.setState({description: this.props.descript})
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch,id } = this.props 
    const { description } = this.state
    const stickyNote = { description, id }
     if(this.props.id===0){
       debugger
      dispatch(addStickyNote(stickyNote))
      dispatch(incId())
      this.setState({ description: '' })
    }else{
      debugger
      dispatch(editStickyNote(stickyNote.id, stickyNote.description))
    }
    
   
  }

  handleChange = (e) => {
    this.setState({ description: e.target.value })
  }

  render() {
  
    const { description } = this.state
    console.log(description)
    
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input name="Description" value={description} onChange={this.handleChange} />
          </form>
        </div>
      )
    
  }
}

const mapStateToProps = (state) => {
  return {id: state.nextId}
}

export default connect(mapStateToProps)(StickyNotesForm)