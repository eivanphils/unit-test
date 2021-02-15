import { message } from './string';

describe('Pruebas de string', () => {

  it('Debe de regresar un string', () => {
    const resp = message('Phils');

    expect(typeof resp ).toBe('string');
  });

  const name = 'Phils';
  it('Debe retornar un saludo con el nombre ' + name, () => {

    const resp = message(name);

    expect(resp).toContain(name);
  });





});
