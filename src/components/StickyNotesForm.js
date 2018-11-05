import React from 'react';
import { connect } from 'react-redux';
import { incId } from '../actions/nextId'
import { addStickyNote } from '../actions/stickyNotes'
import styled from 'styled-components'

class StickyNotesForm extends React.Component {
  defaultValues = {description: ''}
  state = {...this.defaultValues}

  componentDidMount(){
    if(this.props.sn!==null && this.props.sn!==undefined)
    this.setState({description: this.props.sn.description})
  }
  componentDidUpdate(prevProps, prevState){
    if(this.props.sn!==null && this.props.sn!==prevProps.sn){
      this.setState({description: this.props.sn.description})
    }
  }
  
  handleSubmit = (e) => {
    if(e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault()
      const { dispatch,id } = this.props 
      const { description } = this.state
      const stickyNote = { id,description} 
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
          <form onSubmit={this.handleSubmit}>
            <Textarea 
              name="Description" 
              id="taid" 
              value={description} 
              cols="35" 
              wrap="soft" 
              rows="15" 
              placeholder="Add a note!" 
              onChange={this.handleChange}
              onKeyDown={this.handleSubmit}>
            </Textarea>
          </form>
      ) 
    }
}

const mapStateToProps = (state) => {

  return {id: state.nextId}
}
const Textarea = styled.textarea`

  background: hsl(${360*Math.random()},${25 + 70 * Math.random()}%,${85 + 10 * Math.random()}%)
  margin: 0 auto;
  border: none;
  border-radius: 10px;
`
export default connect(mapStateToProps)(StickyNotesForm)