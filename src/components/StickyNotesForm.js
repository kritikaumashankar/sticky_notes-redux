import React from 'react';
import { connect } from 'react-redux';
import { incId } from '../actions/nextId'
import { addStickyNote } from '../actions/stickyNotes'

class StickyNotesForm extends React.Component {
  defaultValues = {description: ''}
  state = {...this.defaultValues}

    componentDidMount(){
      if(this.props.sn!==null){
        this.setState({...this.props.sn})
      }
    }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch,id } = this.props 
    const { description } = this.state
    const stickyNote = { id,description}
     if(this.props.sn!==null){
       this.props.submit(description)
      
    }else{     
      dispatch(addStickyNote(stickyNote))
      dispatch(incId())
      this.setState({...this.defaultValues})
    }
    
    
  }

  handleChange = (e) => {
    this.setState({ description: e.target.value })
  }

  render() {

    const { description } = this.state
   
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