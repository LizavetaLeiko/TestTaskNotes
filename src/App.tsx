import React, { useEffect, useState } from 'react';
import "./app.sass"
import FormContainer from './components/formContainer/FormContainer';
import NotesList from './components/notesList/NotesList';
import Tags from './components/tags/Tags';
import INote from './intefaces/iNote';
import { getNoteUtil } from './utils/noteUtil';

function App() {

  const [filter, setFilter] = useState<string>('');

  const handleFilter =(value: string) =>{
    setFilter(value)
  }

  const [notes, setNotes] = useState<Array<INote>>([]);

  useEffect(() =>{
    const noteArr = getNoteUtil();
    if(filter){
      setNotes(noteArr.filter((item: INote) => {
        const tag = item.tags.filter((item: string) => item === filter)
        return tag.length > 0 && item  
      }))
    } else{
      setNotes(noteArr)
    }
  }, [filter])

  const handleAddNewNote = (note: INote)=>{
    setNotes([note, ...notes])
  }
  const handleDeleteNote = (id: string)=>{
    setNotes(notes.filter((item: INote)=>item.id !== id))
  }

  return (
    <div id='app'>
      <FormContainer handleAddNewNote={handleAddNewNote}/>
      <Tags handleFilter={handleFilter}/>
      <NotesList handleDeleteNote={handleDeleteNote} filter={filter} notes={notes}/>
    </div>
  );
}

export default App;
