import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Gasto from './Gasto';


const Listado = ({ gastos }) => (
    <Fragment>
      <ul className="list-group mt-2">
        {gastos.map(gasto => (
          <Gasto 
            key={gasto.id}
            gasto={gasto}
          />
        ))}
      </ul>
    </Fragment>
);



Listado.propTypes = {
  gastos: PropTypes.array.isRequired,
}

export default Listado