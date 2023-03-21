import NoteContainer from '../noteContainer/NoteContainer';
import './styles/notesList.sass'

const NotesList = () =>{
  
  return(
    <div className='notesList'>
      <NoteContainer/>
      <NoteContainer/>
      <NoteContainer/>
      <NoteContainer/>
    </div>
  )
}

export default NotesList;