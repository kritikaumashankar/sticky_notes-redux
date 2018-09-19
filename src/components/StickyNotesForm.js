import React from 'react';
import { connect } from 'react-redux';
import { incId } from '../actions/nextId'
import { addStickyNote } from '../actions/stickyNotes'
import { editStickyNote } from '../actions/stickyNotes'
let prevId =null
let prevDesc =null
class StickyNotesForm extends React.Component {
  state = { description: '' }

    componentDidUpdate(prevProps, prevState){
      debugger
      if(prevProps.sn !== null){
        prevId = prevProps.id
        prevDesc = prevState
       // this.setState({description: prevState})
      }
      
    }
  
  handleSubmit = (e) => {
    debugger
    e.preventDefault()
    const { dispatch,id } = this.props 
    const { description } = this.state
    const stickyNote = { description, id }
     if(this.props.id !==prevId){
       debugger
      dispatch(addStickyNote(stickyNote))
      dispatch(incId())
      
    }else{
      debugger
      dispatch(editStickyNote(stickyNote.id, stickyNote.description))
    }
    
    this.setState({ description: '' })
  }

  handleChange = (e) => {
    this.setState({ description: e.target.value })
  }

  render() {
    debugger
    let  description =''
    if(prevId !== null ){
        description  = prevDesc
    }else{
        description  = this.state.description
   
    }
    console.log(description)
   
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
          <h3>Add a sticky note</h3>
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