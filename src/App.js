import React from 'react';
import StickyNotesForm from './components/StickyNotesForm';
import StickyNotesList from './components/StickyNotesList';
import './App.css'
const App = () =>(
  <div className="App">
    <div className="container">
      <StickyNotesList />
    </div>
  </div>
)
export default App;
