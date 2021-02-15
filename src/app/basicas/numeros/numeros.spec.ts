import { incrementar } from './numeros';

describe('Prueba de numeros', () => {


  it('Debe retornar 100 si el numero ingresado es mayor a 100', () => {

    const resp = incrementar(300);

    expect(resp).toBe(100);

  });

  it('Debe de retorar el numero + 1 si no es mayor a 100', () => {

    const numero = 40;

    const resp = incrementar(numero);

    expect(resp).toBe(numero + 1);
  });
});
