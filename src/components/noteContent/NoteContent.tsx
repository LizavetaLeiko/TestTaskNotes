import './styles/noteContent.sass'
import { v4 as uuidv4 } from 'uuid'; 
import INote from '../../intefaces/iNote';
import { useState } from 'react';
import { setTagsUtil } from '../../utils/tagsUtil';
import { changeNoteUtil } from '../../utils/noteUtil';

interface INoteContent{
  isOpen: boolean,
  note: INote,
  handleNoteIsOpen: () => void,
  isEditable: boolean,
}
const NoteContent = (props: INoteContent) =>{

  const [title, setTitle] = useState<string>(props.note.title);
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setTitle(e.target.value)
  }
  const [desc, setDesc] = useState<string>(props.note.description);
  const [tags, setTags] = useState<Array<string>>([]);
  const handleDesc = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
    setDesc(e.target.value)
    setTags(e.target.value.split(' ').filter(item => item[0] === '#'))
  }

  const changeCreateNote = ()=>{
    if(title && desc){
      changeNoteUtil({title: title, description: desc, tags: tags, id: props.note.id })
      setTagsUtil(tags)
    }
    window.location.reload()
  }
  
  return(
    <div className='note__content'>
      {
        props.isEditable ?
        <input type='text' className='note__title__input' value={title} onChange={handleTitle}/>
        :
        <h2 className='note__title' onClick={props.handleNoteIsOpen}>{props.note.title}</h2>
      }
        <div style={{display: props.isOpen ? 'block' : 'none'}}>
          {
            props.isEditable ?
            <textarea className='note__desc__input' value={desc} onChange={handleDesc}/>
            :
            <p className='note__desc'>{props.note.description}</p>
          }
          
          <div className='note__tags'>
          {
            props.note.tags.map(item =>{
              return(
                <button key={uuidv4()}>{item}</button>
              )
            })
          }
          </div>
        </div>
        {
          props.isEditable && <button className='note__saveBtn' onClick={changeCreateNote}>Save</button>
        }
    </div>
  )
}

export default NoteContent;