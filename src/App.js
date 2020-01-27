import React, { useState } from 'react';
import Presupuestro from './components/Presupuesto'
import Formulario from './components/Formulario';
import Listado from './components/Listado'


function App() {

  /*=================================================================================
  *	 STATE
  * --------------------------------------------------------------------------------*/
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarinicial, actualizarPregunta] = useState(true);
  const [gastos, guardarGasto] = useState([]);

  // Cuando agreguemos un gasto
  const agregarNuevoGasto = gasto => {
    guardarGasto([
      ...gastos,
      gasto
    ])
  }

  return (
    <div className="container">
      <h1 className="txt-a-c txt-w">
        <i className="a-pie-chart af-m"></i>
        &nbsp;PRESUPUESTA.me
      </h1>
      <div className="vm-4">
        <div className="card">
          <div className="card-body">

             
            {mostrarinicial ? (
              <div>
                <h5>¿Tu presupuesto? - Gasto semanal</h5>
                <Presupuestro 
                  guardarPresupuesto={guardarPresupuesto}
                  guardarRestante={guardarRestante}
                  actualizarPregunta={actualizarPregunta}
                />
              </div>
            ) : (
              <div className="col-row">
                <div className="col-6">
                  <Formulario 
                    agregarNuevoGasto={agregarNuevoGasto}
                  />
                </div>
                <div className="col-6">
                  <h3>Lista de gastos</h3>
                  <hr />
                  <Listado 
                    gastos={gastos}
                  />
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
