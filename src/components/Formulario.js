import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid'
import MensajeError from './MensajeError'


const Formulario = ({guardarGasto, guardarCrearGasto}) => {
  guardarCrearGasto(true)

  /*=================================================================================
  *	 STATE
  * --------------------------------------------------------------------------------*/
  const [nombre, guardarNombre] = useState('');
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(0);
  /* ============================================================================= */

  const agregarGasto = e => {
    e.preventDefault();
    
    // Validar
    if (cantidad < 1 || isNaN( cantidad ) || nombre.trim() === '') {
      guardarError(true)
      return;
    }

    guardarError(false);
    // Construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }
    // Pasar el gasto al componente
    guardarGasto(gasto);
    guardarCrearGasto(true);
    // Resetear rl form
    guardarNombre('');
    guardarCantidad(0);
  }

  return (
    <form
      onSubmit={agregarGasto}
    >
      <h3>Agrega tus gastos</h3>

      {error ? <MensajeError mensaje='Todos los campos son obligatorios'/> : null}

      <hr />

      <div className="form-item">
        <label>Nombre del gasto</label>
        <input 
          type="text"
          placeholder="Elm. Transporte"
          className="input-100"
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>
      <div className="form-item">
        <label>Cantidad de gasto</label>
        <input 
          type="number"
          placeholder="Elm. 300"
          className="input-100"
          value={cantidad}
          onChange={e => guardarCantidad(parseInt( e.target.value) )}
        />
      </div>
      <div className="form-item jc-end">
        <input 
          type="submit"
          value="Agregar gasto"
          className="btn-interactive btn-blue"
        />
      </div>
    </form>
  );
};


Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario