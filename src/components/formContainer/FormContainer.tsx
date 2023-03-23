import { useState } from 'react';
import CreateNoteForm from '../createNoteForm/CreateNoteForm';
import arrow from '../../assets/icons/row.svg'
import './styles/formContainer.sass'

const FormContainer = () =>{
  
  const [formIsOpen, setFormIsOpen] = useState<boolean>(true);

  const handleVisability = () =>{
    setFormIsOpen(!formIsOpen)
  }
  return(
    <div className='container'>
      <button className='container__btn' style={{transform: formIsOpen ? 'rotate(180deg)' : 'rotate(0deg)'}} onClick={handleVisability}>
        <img src={arrow.toString()} alt=""/>
      </button>
      <CreateNoteForm isOpen={formIsOpen}/>
    </div>
  )
}

export default FormContainer;