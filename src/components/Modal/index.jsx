import React from 'react'
import './styles.css'

const Modal = ({children}) => {
  const closeModal = () => {
    const modal = document.getElementById('modal')
    modal.classList.add('hide')
  }

  return (
    <div id='modal' className='hide'>
      <div className='fade' onClick={closeModal}></div>
      <div className='modalContent'>
        <h2>Editar Usuário</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal