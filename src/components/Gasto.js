import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const Gasto = ({gasto}) => {
  return (
    <Fragment>
      <li className="list-item jc-spaceB">
        <p>{gasto.nombre}</p>
        <span className="tag-c tag-primary">$ {gasto.cantidad}</span>
      </li>
    </Fragment>
  );
};


Gasto.propTypes = {
  gasto: PropTypes.object.isRequired,
}

export default Gasto