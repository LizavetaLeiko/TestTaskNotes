import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import INote from '../../intefaces/iNote';
import { setNoteUtil } from '../../utils/noteUtil';
import { setTagsUtil } from '../../utils/tagsUtil';
import './styles/createNoteForm.sass'

interface ICreateNoteForm{
  isOpen: boolean,
  handleAddNewNote: (note: INote) => void
}
const CreateNoteForm = (props: ICreateNoteForm) =>{

  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [tags, setTags] = useState<Array<string>>([]);


  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setTitle(event.target.value)
  }
  const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>)=>{
    setDesc(event.target.value)
    const tags = event.target.value.split(' ').filter(item => item[0] === '#')
    setTags(tags)
  }

  const handleCreateNote = (e: any)=>{
    e.preventDefault();
    if(title && desc){
      setNoteUtil({title: title, description: desc, tags: tags, id: uuidv4() })
      setTagsUtil(tags)
      props.handleAddNewNote({title: title, description: desc, tags: tags, id: uuidv4() })
      setTitle('')
      setDesc('')
    }
  }

  return( <form action="addNote" className='form'>
    <h1 className='form__title'> Create Note</h1>
    <div className='form__content' style={{display: props.isOpen ? 'flex' : 'none'}}>
      <label htmlFor="title" className='form__label'> Title</label>
      <input type="text" id="title" className='form__text_input' value={title} placeholder='Title' onChange={handleTitle}/>
      <label htmlFor="description" className='form__label'> Description</label>
      <textarea value={desc} name="" id="description" rows={7} className='form__textarea' placeholder='Note text' onChange={handleDescription}/>
      <button className='form__btn' onClick={handleCreateNote}>Сreate note</button>
    </div>
  </form>
  )
}

export default CreateNoteForm;