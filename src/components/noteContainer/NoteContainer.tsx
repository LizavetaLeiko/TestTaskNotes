import { useState } from 'react';
import INote from '../../intefaces/iNote';
import NoteContent from '../noteContent/NoteContent';
import './styles/noteContainer.sass'

interface INoteContainer{
  note: INote
}
const NoteContainer = (props: INoteContainer) =>{

  const [noteIsOpen, setNoteIsOpen] = useState<boolean>(false);

  const handleNoteIsOpen =()=>{
    setNoteIsOpen(!noteIsOpen)
  }
  
  return(
    <div className='note' >
        <h2 className='note__title' onClick={handleNoteIsOpen}>{props.note.title}</h2>
        <NoteContent isOpen={noteIsOpen} desc={props.note.description} tags={props.note.tags}/>
        <div className='note__btns'>
          <button><img src="../../assets/icons/edit.svg" alt=""/></button>
          <button><img src="../../assets/icons/delete.svg" alt=""/></button>
        </div>
    </div>
  )
}

export default NoteContainer;