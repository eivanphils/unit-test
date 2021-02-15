import { obtenerRobots } from "./arreglos";

xdescribe('Prueba de arreglos', () => {

  it('Debe retornar al menos 3 robots', () => {

    const resp = obtenerRobots();

    expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe de existir Megan y Ultron', () => {

    const resp = obtenerRobots();

    expect(resp).toContain('Megaman');
    expect(resp).toContain('Ultron');
  });
});
