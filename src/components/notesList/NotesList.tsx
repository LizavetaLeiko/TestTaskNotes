import React from 'react';
import INote from '../../intefaces/iNote';
import NoteContainer from '../noteContainer/NoteContainer';
import './styles/notesList.sass'


interface INotesList{
  filter: string,
  notes: Array<INote> | null,
  handleDeleteNote: (id: string) => void
}
const NotesList = (props: INotesList) =>{
  
  return(
    <div className='notesList'>
      {
        props.notes && props.notes?.length > 0 ? 
        props.notes?.map(item =>{
          return(
            <React.Fragment key={item.id}>
              <NoteContainer note={item} handleDeleteNote={props.handleDeleteNote}/>
            </React.Fragment>
          )
        })
        :
        <p className='notesList__message'>There is no notes. <br/> You can create a new one!</p>
      }
    </div>
  )
}

export default NotesList;