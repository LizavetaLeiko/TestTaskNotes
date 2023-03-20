import './styles/createNoteForm.sass'

interface ICreateNoteForm{
  isOpen: boolean,
}
const CreateNoteForm = (props: ICreateNoteForm) =>{

  return( <form action="addNote" className='form'>
    <h1 className='form__title'> Create Note</h1>
    <div className='form__content' style={{display: props.isOpen ? 'flex' : 'none'}}>
      <label htmlFor="title" className='form__label'> Title</label>
      <input type="text" id="title" className='form__text_input' placeholder='Title' />
      <label htmlFor="description" className='form__label'> Description</label>
      <textarea name="" id="description" rows={7} className='form__textarea' placeholder='Note text' />
      <button className='form__btn'>Сreate note</button>
    </div>
  </form>
  )
}

export default CreateNoteForm;