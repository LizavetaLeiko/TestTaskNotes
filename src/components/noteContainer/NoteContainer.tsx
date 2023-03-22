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

  const [isEditable, setIsEditable] = useState<boolean>(false);

  const handleIsEditable = () =>{
    setIsEditable(!isEditable)
    setNoteIsOpen(true)
  }
  
  return(
    <div className='note' >
        <NoteContent isOpen={noteIsOpen} note={props.note} handleNoteIsOpen={handleNoteIsOpen} isEditable={isEditable}/>
        <div className='note__btns'>
          <button onClick={handleIsEditable}><img src="../../assets/icons/edit.svg" alt=""/></button>
          <button><img src="../../assets/icons/delete.svg" alt=""/></button>
        </div>
    </div>
  )
}

export default NoteContainer;