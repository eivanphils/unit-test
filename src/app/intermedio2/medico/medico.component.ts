import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.sass']
})
export class MedicoComponent implements OnInit {
  medicos: any[] = [];

  constructor(
    private medicoService: MedicoService
  ) { }

  ngOnInit(): void {
  }

  saludarMedico(name: string) {
    return `Hola ${name}`;
  }

  obternerMedicos() {
    this.medicoService.getMedicos()
        .subscribe( (medicos: any[]) => this.medicos = medicos);
  }

}
