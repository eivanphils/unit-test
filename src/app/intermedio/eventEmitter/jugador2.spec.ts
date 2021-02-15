import { Jugador2 } from './jugador2';

describe('Jugador 2 emit', () => {

  let jugador: Jugador2;
  let nuevoHp: number;

  beforeEach(() => {
    jugador = new Jugador2();
    nuevoHp = 0;
  });

  it('Debe de emitir un evento cuando recibe daño', () => {

    jugador.hpCambia.subscribe( hp => nuevoHp = hp);

    jugador.recibeDanio(1000);

    expect(nuevoHp).toBe(0);
  });

  it('Debe de emitir un nuevo evento y sobrevivir cuando recibe daño', () => {

    jugador.hpCambia.subscribe( hp => nuevoHp = hp);

    jugador.recibeDanio(50);

    expect(nuevoHp).toBe(50);
  });

});
