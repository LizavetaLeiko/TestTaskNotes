import React from 'react';
import "./app.sass"
import FormContainer from './components/formContainer/FormContainer';
import NotesList from './components/notesList/NotesList';
import Tags from './components/tags/Tags';

function App() {
  return (
    <div id='app'>
      <FormContainer/>
      <Tags/>
      <NotesList/>
    </div>
  );
}

export default App;
