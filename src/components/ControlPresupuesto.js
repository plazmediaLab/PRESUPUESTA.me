import React, { Fragment } from 'react'; 
import { revisarPresupuesto } from '../helpers'; 
import PropTypes from 'prop-types';


const ControlPresupuesto = ({ presupuesto, restante }) => {

  return (
    <Fragment>
      <div className="msn msn-info">
        Presupuesto: ${ presupuesto } 
      </div>
      <div className={`mt-2 ${revisarPresupuesto(presupuesto, restante)}`}>
        Restante: ${ restante }
      </div>
    </Fragment>
  );
};


ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
}

export default ControlPresupuesto