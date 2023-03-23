import { useState } from 'react';
import INote from '../../intefaces/iNote';
import deleteIcon from '../../assets/icons/delete.svg'
import editIcon from '../../assets/icons/edit.svg'
import { deleteNoteUtil } from '../../utils/noteUtil';
import { deleteTagsUtil } from '../../utils/tagsUtil';
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

  const handleDeleteNote=(id: string, tags: Array<string>)=>{
    deleteNoteUtil(id)
    deleteTagsUtil(tags)
  }
  
  return(
    <div className='note' >
        <NoteContent isOpen={noteIsOpen} note={props.note} handleNoteIsOpen={handleNoteIsOpen} isEditable={isEditable}/>
        <div className='note__btns'>
          <button onClick={handleIsEditable}><img src={editIcon.toString()} alt=""/></button>
          <button onClick={()=>handleDeleteNote(props.note.id, props.note.tags)}><img src={deleteIcon.toString()} alt=""/></button>
        </div>
    </div>
  )
}

export default NoteContainer;