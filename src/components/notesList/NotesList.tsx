import React from 'react';
import { useEffect, useState } from 'react';
import INote from '../../intefaces/iNote';
import { getNoteUtil } from '../../utils/noteUtil';
import NoteContainer from '../noteContainer/NoteContainer';
import './styles/notesList.sass'


interface INotesList{
  filter: string
}
const NotesList = (props: INotesList) =>{

  const [notes, setNotes] = useState<Array<INote>>();

  useEffect(() =>{
    if(props.filter){
      setNotes(getNoteUtil().filter((item: INote) => {
        const tag = item.tags.filter((item: string) => item === props.filter)
        return tag.length > 0 && item  
      }))
    } else{
      setNotes(getNoteUtil())
    }
  }, [props.filter])
  
  return(
    <div className='notesList'>
      {
        notes && notes?.length > 0 ? 
        notes?.map(item =>{
          return(
            <React.Fragment key={item.id}>
              <NoteContainer note={item}/>
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