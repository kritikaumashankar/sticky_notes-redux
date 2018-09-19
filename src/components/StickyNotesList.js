import React from 'react';
import { connect } from 'react-redux';
import StickyNote from './StickyNote';


const StickyNotesList = ({ stickyNotes }) => (
  <div>
    { stickyNotes.map( (sn) => {
      return (
        <div>
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