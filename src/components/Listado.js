import React, { Fragment } from 'react';
import Gasto from './Gasto';


const Listado = ({ gastos }) => (
    <div>
      <ul className="list-group mt-2">
        {gastos.map(gasto => (
          <Gasto 
            key={gasto.id}
            gasto={gasto}
          />
        ))}
      </ul>
    </div>
);

export default Listado