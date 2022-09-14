import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class';
const ContactoComponent = ({ contacto, cambiar, quitar }) => {

    /*  useEffect(() => {
         console.log('')
     });
  */

    function pintarEstado() {
        if (contacto.estado) {
            return (<i onClick={() => cambiar(contacto)} className='bi-toggle-on' style={{ color: 'green' }}></i>)
        } else {
            return (<i onClick={() => cambiar(contacto)} className='bi-toggle-off' style={{ color: 'green' }}></i>)
        }
    }


    return (
        <tr>
            <td>{contacto.nombre}</td>
            <td>{contacto.email}</td>
            <td>{pintarEstado()}            </td>
            <td><span className="fwtable-bold">{contacto.estado ? 'CONECTADO' : 'DESCONECTADO' }</span></td>
            <td> <i className='bi-trash' style={{ color: 'tomato' }} onClick={() => quitar(contacto)}></i></td>


        </tr>
    )

};

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    cambiar: PropTypes.func.isRequired,
    quitar: PropTypes.func.isRequired

}

export default ContactoComponent
