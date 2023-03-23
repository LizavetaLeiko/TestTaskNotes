import INote from "../intefaces/iNote";

export const setNoteUtil = (note: INote) =>{
  const notes = localStorage.getItem('notes');
  if(notes){
    localStorage.setItem('notes', JSON.stringify([note, ...JSON.parse(notes)]));
  } else {
    localStorage.setItem('notes', JSON.stringify([note]));
  }
}

export const getNoteUtil = () =>{
  const notes = localStorage.getItem('notes');
  return notes ? JSON.parse(notes) : null;
}

export const changeNoteUtil = (note: INote) =>{
  const notes = localStorage.getItem('notes');
  if(notes){
    localStorage.setItem('notes', JSON.stringify(JSON.parse(notes).map((item: INote, i: number)=>{
      if(item.id === note.id){
        item = note
      }
      return item
    }))
    )
  }
}

export const deleteNoteUtil = (id: string) =>{
  const notes = localStorage.getItem('notes');
  if(notes){
    localStorage.setItem('notes', JSON.stringify(JSON.parse(notes).filter((item: INote)=>item.id !== id))
    )
  }
}
