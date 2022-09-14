import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../../models/contacto.class';
import { useRef } from 'react';

const ContactoForm = ({ add, length }) => {
    const nameref = useRef('')
    const emailref = useRef('')

    function addContacto(e) {
        e.preventDefault();
        const newContacto = new Contacto(
            nameref.current.value,
            emailref.current.value,
            false
        )
        add(newContacto)
    }
    return (
        <form onSubmit={addContacto}>
            <div className='d-flex justify-content-center align-items-center mb-4'>
                <div className='form-outline flex-fill'>
                    <label>Nombre</label>
                    <input type="text" ref={nameref} placeholder='nombre de contacto' required autoFocus id='inputName' className='form-control form-control-sm' />
                    <label >e-mail</label>
                    <input type="text" ref={emailref} placeholder='email de contacto' required id='inputEmail'   className='form-control form-control-sm'/>
                    <button type='submit' className='btn btn-success btn-sm ms-2'><i class="bi bi-person-plus"> </i>{length > 0 ? 'Nuevo contacto' : 'Crear tu primer contacto'}</button>
                </div>
            </div>

        </form>
    )
}

ContactoForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.func.isRequired
}

export default ContactoForm
