import React, { Fragment } from 'react';


const Gasto = ({gasto}) => {
  return (
    <Fragment>
      <li className="list-item i-line">{gasto.nombre} | {gasto.cantidad}</li>
    </Fragment>

    // TODO · Solucionar CSS list group 01/26/2020 
  );
};

export default Gasto