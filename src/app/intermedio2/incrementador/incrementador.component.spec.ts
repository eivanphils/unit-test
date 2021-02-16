import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {

      component.leyenda = 'Mi titulo nuevo';

      fixture.detectChanges();

      const compiled: HTMLElement = fixture.nativeElement;

      expect(compiled.querySelector('h3').textContent).toContain('Mi titulo nuevo');

    });

    it('Debe de mostrar en el input el valor del progreso', (done) => {
      component.cambiarValor(20);

      fixture.detectChanges();

      fixture.whenStable().then(() => {
        const compiled: HTMLElement = fixture.nativeElement;

        expect(compiled.querySelector('input').value).toBe('70');
        done();
      });

    });

    it('Debe de incrementar/disminuir en 5, con el click en los botones correspondientes', () => {
      const compiled: HTMLElement = fixture.nativeElement;

      const botones = compiled.querySelectorAll('button');

      botones[0].click();
      expect(component.progreso).toBe(45);

      botones[1].click();
      expect(component.progreso).toBe(50);
    });

    it('Debe de mostrar el progesor en el titulo', () => {
      const compiled: HTMLElement = fixture.nativeElement;

      const botones = compiled.querySelectorAll('button');

      botones[0].click();

      fixture.detectChanges();

      expect(compiled.querySelector('h3').textContent).toContain('45');

    });
});
