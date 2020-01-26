import React from 'react';
import Presupuestro from './components/Presupuesto'


function App() {
  return (
    <div className="container">
      <h1 className="txt-a-c txt-w">
        <i className="a-pie-chart af-m"></i>
        &nbsp;PRESUPUESTA.me
      </h1>
      <div className="vm-4">
        <Presupuestro />
      </div>
    </div>
  );
}

export default App;
