import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'
import ContactoComponent from '../pure/contacto'
import ContactoForm from '../pure/forms/contactoForm'

const ListadoComponent = () => {

    const c1 = new Contacto('juan perez', 'jpinfo@gmail.com', false)
    const c2 = new Contacto('maria brahin', 'mariabrahin1@gmail.com', true)
    const c3 = new Contacto('juana di marco', 'dimarcojuana@gmail.com', false)
    const [contactos, setContactos] = useState([c1, c2, c3])

    function cambiarEstado(contacto) {
        const index = contactos.indexOf(contacto)
        const tcons = [...contactos]
        tcons[index].estado = !tcons[index].estado
        setContactos(tcons)
    }

    function eliminarContacto(contacto) {
        const index = contactos.indexOf(contacto)

        const tcons = [...contactos]
        tcons.splice(index, 1)
        setContactos(tcons)
    }

     function agregarContacto(contacto) {
         const tcons = [...contactos]
         tcons.push(contacto)
         setContactos(tcons)
     }



    const Tabla = () => {
        return (
            <table className='table table-dark table-striped'>
                <thead >
                    <tr>
                        <td>Nombre</td>
                        <td>Correo electronico</td>
                        <td>Cambiar estado</td>
                        <td>Estado</td>
                        <td>Eliminar</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        contactos.map((contacto, index) => {
                            return (
                                <ContactoComponent
                                    key={index}
                                    contacto={contacto}
                                    cambiar={cambiarEstado}
                                    quitar={eliminarContacto}>
                                </ContactoComponent>
                            )
                        }
                        )}
                </tbody>
            </table>
        )
    }

    let tablaContactos;

    if (contactos.length > 0) {
        tablaContactos = <Tabla></Tabla>
    } else {
        tablaContactos = (
            <div>
                <p>Agenda vacía</p>
            </div>
        )
    }

    return (
        <div>
            <div className='col-md-12'>
                <div className="card">
                    <div className="card-header">
                        Listado de contactos
                    </div>
                    <div className="card-body">
                        <div className='d-flex justify-content-center mb-4'>

                        {tablaContactos}
                        </div>

                        <ContactoForm add={agregarContacto} length={contactos.length}></ContactoForm>
                    </div>
                </div>
            </div>
        </div>
    )


}

// ListadoComponent.propTypes = {}

export default ListadoComponent