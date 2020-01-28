import React, { useState, useEffect } from 'react';
import Presupuestro from './components/Presupuesto'
import Formulario from './components/Formulario';
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'


function App() {

  /*=================================================================================
  *	 STATE
  * --------------------------------------------------------------------------------*/
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarinicial, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  // useEffect que actualiza el restante
  useEffect(() => {
    if (creargasto) {

      // Agregar el nuevo gasto
      guardarGastos([
        ...gastos,
        gasto
      ]);

      // Restar del presupuesto los gastos
      const presupuestoRestante = restante - gasto.cantidad
      guardarRestante(presupuestoRestante);

      // Resetear a false
      guardarCrearGasto(false)  
    }
    

  }, [gasto, gastos, restante]);

  return (
    <div className="container">
      <h1 className="txt-a-c txt-w">
        <i className="a-pie-chart af-m"></i>
        &nbsp;PRESUPUESTA.me
      </h1>
      <div className="vm-4">
        <div className="card box-shadow-lg">
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
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="col-6">
                  <h3>Lista de gastos</h3>
                  <hr />

                  <ControlPresupuesto 
                    presupuesto={presupuesto}
                    restante={restante}
                  />

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
