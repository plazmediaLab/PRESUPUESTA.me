import React, { Fragment } from 'react';

const Presupuesto = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5>$...</h5>
            <form>
              <div className="form-item">
                <input
                  type="text"
                  className="input-100"
                  placeholder="Introduce la cantidad de tu presupuesto"
                />
                <input
                  type="submit"
                  className="btn btn-br btn-secondary btn-100 mt-2"
                  value="Definir Presupuesto"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Presupuesto