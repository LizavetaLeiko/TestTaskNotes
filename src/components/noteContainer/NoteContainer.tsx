import { useState } from 'react';
import NoteContent from '../noteContent/NoteContent';
import './styles/noteContainer.sass'

const NoteContainer = () =>{

  const [noteIsOpen, setNoteIsOpen] = useState<boolean>(false);

  const handleNoteIsOpen =()=>{
    setNoteIsOpen(!noteIsOpen)
  }
  
  return(
    <div className='note' >
        <h2 className='note__title' onClick={handleNoteIsOpen}>Note title</h2>
        <NoteContent isOpen={noteIsOpen}/>
        <div className='note__btns'>
          <button><img src="../../assets/icons/edit.svg" alt=""/></button>
          <button><img src="../../assets/icons/delete.svg" alt=""/></button>
        </div>
    </div>
  )
}

export default NoteContainer;