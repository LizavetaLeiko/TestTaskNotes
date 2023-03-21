import INote from "../intefaces/iNote";

const createNoteUtil = (note: INote) =>{
  const notes = localStorage.getItem('notes');
  if(notes){
    localStorage.setItem('notes', JSON.stringify([...JSON.parse(notes), note]));
  } else {
    localStorage.setItem('notes', JSON.stringify([note]));
  }
}
export default createNoteUtil;