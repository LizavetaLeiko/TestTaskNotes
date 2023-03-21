import React, { useState } from 'react';
import "./app.sass"
import FormContainer from './components/formContainer/FormContainer';
import NotesList from './components/notesList/NotesList';
import Tags from './components/tags/Tags';

function App() {

  const [filter, setFilter] = useState<string>('');

  const handleFilter =(value: string) =>{
    setFilter(value)
  }

  return (
    <div id='app'>
      <FormContainer/>
      <Tags handleFilter={handleFilter}/>
      <NotesList filter={filter}/>
    </div>
  );
}

export default App;
