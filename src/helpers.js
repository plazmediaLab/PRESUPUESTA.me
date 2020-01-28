export const revisarPresupuesto = (presupuesto, restante) => {
  let clase;

  if ((presupuesto / 4) > restante) {
    clase = 'msn msn-error';
  }else if ((presupuesto / 2) > restante) {
    clase = 'msn msn-warning';    
  }else(
    clase = 'msn msn-ok'
  )

  return clase;
};