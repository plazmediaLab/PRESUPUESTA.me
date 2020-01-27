import React from 'react';


const MensajeError = ({mensaje}) => {
  return <p className="msn msn-error vm-3"><i className="a-info-warning mr-2"></i> {mensaje}</p>;
};

export default MensajeError