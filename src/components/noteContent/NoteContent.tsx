import './styles/noteContent.sass'

interface INoteContent{
  isOpen: boolean
}
const NoteContent = (props: INoteContent) =>{
  
  return(
    <div className='note__content' style={{display: props.isOpen ? 'flex' : 'none'}}>
        <p className='note__desc'>description</p>
        <div className='note__tags'>
          <button>#tag1</button>
          <button>#tag2</button>
          <button>#tag3</button>
        </div>
    </div>
  )
}

export default NoteContent;