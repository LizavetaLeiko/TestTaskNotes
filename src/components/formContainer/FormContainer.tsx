import { useState } from 'react';
import CreateNoteForm from '../createNoteForm/CreateNoteForm';
import arrow from '../../assets/icons/row.svg'
import './styles/formContainer.sass'
import INote from '../../intefaces/iNote';

interface IFormContainer{
  handleAddNewNote: (note: INote) => void,
}
const FormContainer = (props: IFormContainer) =>{
  
  const [formIsOpen, setFormIsOpen] = useState<boolean>(true);

  const handleVisability = () =>{
    setFormIsOpen(!formIsOpen)
  }
  return(
    <div className='container'>
      <button className='container__btn' style={{transform: formIsOpen ? 'rotate(180deg)' : 'rotate(0deg)'}} onClick={handleVisability}>
        <img src={arrow.toString()} alt=""/>
      </button>
      <CreateNoteForm isOpen={formIsOpen} handleAddNewNote={props.handleAddNewNote}/>
    </div>
  )
}

export default FormContainer;