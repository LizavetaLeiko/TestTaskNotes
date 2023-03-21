import React from 'react';
import "./app.sass"
import FormContainer from './components/formContainer/FormContainer';
import NotesList from './components/notesList/NotesList';

function App() {
  return (
    <div id='app'>
      <FormContainer/>
      <NotesList/>
    </div>
  );
}

export default App;
