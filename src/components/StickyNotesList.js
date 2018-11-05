import React from 'react';
import { connect } from 'react-redux';
import StickyNote from './StickyNote';
import '../App.css'
import StickyNotesForm from './StickyNotesForm';
 import { deleteStickyNote } from '../actions/stickyNotes';
 import { editStickyNote } from '../actions/stickyNotes'

 class StickyNotesList extends React.Component{
   state = {numberOfStickey: 0}

   componentDidUpdate(prevProps, prevState){
    if(prevProps.stickyNotes.length !== this.props.stickyNotes.length) 
      this.setState({ numberOfStickey: this.props.stickyNotes.length})
   
      if(prevState.numberOfStickey !== this.state.numberOfStickey)
       this.setState({ numberOfStickey: this.state.numberOfStickey})
  }
  addForm=() =>{
    this.setState({numberOfStickey : this.state.numberOfStickey + 1})
  }
  
  deleteStickey=(id) =>{
    this.props.dispatch(deleteStickyNote(id))
    this.setState({ numberOfStickey: this.state.numberOfStickey - 1})
  }
  
  displayStickey = () =>{
    if(this.state.numberOfStickey === 0){
      return(
        <div className="place">
          <button onClick={this.addForm}>+</button>
          <StickyNotesForm key={0} sn={null} />
        </div>
      )
    }else{
      debugger
      let noteArr = []
        for(let i = 0; i< this.state.numberOfStickey; i++){
            noteArr.push(<div className="place">
              <button onClick={this.addForm}>+</button><button onClick= {()=>this.deleteStickey(this.props.stickyNotes[i].id)}>X</button>
              <StickyNotesForm key={i} sn={this.props.stickyNotes[i]} />
            </div>
            )
        }
        return(noteArr)
    }
  } 
  

  render(){
    return(
      <div id="container">
        {this.displayStickey()
}     </div>
    )
  }
 }
 
  
  

const mapStateToProps = (state) => {
  return { stickyNotes: state.stickyNotes }
}


export default connect(mapStateToProps)(StickyNotesList)