import './styles/noteContent.sass'
import { v4 as uuidv4 } from 'uuid'; 

interface INoteContent{
  isOpen: boolean,
  desc: string,
  tags: Array<string>
}
const NoteContent = (props: INoteContent) =>{
  
  return(
    <div className='note__content' style={{display: props.isOpen ? 'flex' : 'none'}}>
        <p className='note__desc'>{props.desc}</p>
        <div className='note__tags'>
          {
            props.tags.map(item =>{
              return(
                <button key={uuidv4()}>{item}</button>
              )
            })
          }
        </div>
    </div>
  )
}

export default NoteContent;