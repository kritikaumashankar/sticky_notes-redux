import React from 'react';
import StickyNotesForm from './components/StickyNotesForm';
import StickyNotesList from './components/StickyNotesList';
import './App.css'
const App = () =>(
  <div className="App">
     <h3>Add a sticky note</h3>
    <StickyNotesForm sn={null}/>
    <div className="container">
    <StickyNotesList />
    </div>
  </div>
)
export default App;
