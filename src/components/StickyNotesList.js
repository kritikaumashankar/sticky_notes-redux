import React from 'react';
import { connect } from 'react-redux';
import StickyNote from './StickyNote';
import '../App.css'


const StickyNotesList = ({ stickyNotes }) => (
  <div>
    { stickyNotes.map( (sn) => {
      console.log(sn.id)
      console.log(sn.description)
      return (
        <div className="place">
        <StickyNote key={sn.id} {...sn} />
        </div>
      )
     })
    }
  </div>
)

const mapStateToProps = (state) => {
  return { stickyNotes: state.stickyNotes }
}

export default connect(mapStateToProps)(StickyNotesList)