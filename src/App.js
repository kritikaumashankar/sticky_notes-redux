import React from 'react';
import StickyNotesForm from './components/StickyNotesForm';
import StickyNotesList from './components/StickyNotesList';

const App = () =>(
  <div className="App">
    <StickyNotesForm />
    <StickyNotesList />
  </div>
)
export default App;