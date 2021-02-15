import { from, EMPTY, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const service = new MedicosService(null);

    beforeEach( () => {
      componente = new MedicosComponent(service);
    });


    it('Init: Debe de cargar los medicos', () => {
      const medicos = ['medico1', 'medico2', 'medico3'];

      spyOn(service, 'getMedicos').and.callFake(() => {

        return from([medicos]);
      });

      componente.ngOnInit();

      expect(componente.medicos.length).toBeGreaterThan(0);
    });


    it('Debe de llamar al servidor para agregar un médico', () => {
      const espia = spyOn(service, 'agregarMedico').and.callFake( medico => {
        return EMPTY;
      });

      componente.agregarMedico();

      expect(espia).toHaveBeenCalled();
    });

    it('Debe de agregar un nuevo médico al arreglo de medicos', () => {
      const medico = { id: 1, nombre: 'Phils'};

      spyOn(service, 'agregarMedico').and.returnValue(from( [medico] ));

      componente.agregarMedico();

      expect(componente.medicos.findIndex(i => i.id === medico.id)).toBeGreaterThanOrEqual(0);
    });

    it('Si falla el agregar medico, la propiedad mensajeError, debe ser igual al mensaje del servicios', () => {
      const mensaje = 'No se a podido agregar al medico';

      spyOn(service, 'agregarMedico').and.returnValue(throwError(mensaje));

      componente.agregarMedico();

      expect(componente.mensajeError).toBe(mensaje);
    });


});
