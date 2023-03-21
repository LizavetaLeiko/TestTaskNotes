import INote from "../intefaces/iNote";

const createNote = (note: INote) =>{
  const notes = localStorage.getItem('notes');
  if(notes){
    const notesArr = JSON.parse(notes);
    localStorage.setItem('notes', JSON.stringify([...notesArr, note]));
  } else {
    localStorage.setItem('notes', JSON.stringify([note]));
  }
}
export default createNote;