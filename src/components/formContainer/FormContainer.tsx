import { useState } from 'react';
import CreateNoteForm from '../createNoteForm/CreateNoteForm';
import './styles/formContainer.sass'

const FormContainer = () =>{
  
  const [formIsOpen, setFormIsOpen] = useState<boolean>(true);

  const handleVisability = () =>{
    setFormIsOpen(!formIsOpen)
  }
  return(
    <div className='container'>
      <button className='container__btn' onClick={handleVisability}>
        <img src="../../assets/icons/row.svg" alt=""/>
      </button>
      <CreateNoteForm isOpen={formIsOpen}/>
    </div>
  )
}

export default FormContainer;