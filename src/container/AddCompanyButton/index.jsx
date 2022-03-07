import React from 'react'
import './style.scss'

const AddCompanyButton = (props) => {
  return (
    <div className='AddCompany' onClick={props.openModal}>
        <p className='Text'>+ Adicionar Empresa</p>
    </div>
  )
}

export default AddCompanyButton;