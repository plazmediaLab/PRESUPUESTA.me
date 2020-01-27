import React, { Fragment, useState } from 'react';
import MensajeError from './MensajeError';

const Presupuesto = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

  /*=================================================================================
  *	 STATE
  * --------------------------------------------------------------------------------*/
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);
  /* ============================================================================= */

  // Función que lee el presupuesto
  const definirPresupuesto = e => {
    guardarCantidad(parseInt(e.target.value, 10))
  }

  // Submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    // Validar la cantidad del presupuesto
    if (cantidad < 1 || isNaN( cantidad )) {
      guardarError(true);
      return;
    }

    // Al pasar la validación
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  }

  return (
    <Fragment>
          {error ? <MensajeError mensaje='$ Introduce una cantidad valida' /> : null}

          <hr />
          <form
            onSubmit={agregarPresupuesto}
          >
            <div className="form-item">
              <input
                type="text"
                className="input-100"
                placeholder="Introduce la cantidad de tu presupuesto"
                onChange={definirPresupuesto}
              />
              <input
                type="submit"
                className="btn btn-br btn-secondary btn-100 mt-2"
                value="Definir Presupuesto"
              />
            </div>
          </form>
    </Fragment>
  );
};

export default Presupuesto