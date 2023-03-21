import INote from "../intefaces/iNote";

export const setNoteUtil = (note: INote) =>{
  const notes = localStorage.getItem('notes');
  if(notes){
    localStorage.setItem('notes', JSON.stringify([...JSON.parse(notes), note]));
  } else {
    localStorage.setItem('notes', JSON.stringify([note]));
  }
}

export const getNoteUtil = () =>{
  const notes = localStorage.getItem('notes');
  return notes ? JSON.parse(notes) : null;
}
