import { Component, inject, ChangeDetectorRef, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MateriaService } from '../../../services/materia.service';
import { MatDialog } from '@angular/material/dialog';
import { FormualarioDeMateria } from '../formualario-de-materia/formualario-de-materia';
import { HorarioDto, MateriaDto } from '../../../interfaces/materia-dto';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-lista-de-materias',
  imports: [
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    DatePipe,
    MatProgressSpinnerModule,
  ],
  templateUrl: './lista-de-materias.html',
  styleUrl: './lista-de-materias.css',
})
export class ListaDeMaterias implements OnInit {
  readonly dialog = inject(MatDialog);
  agregarMateria() {
    const dialogRef = this.dialog.open(FormualarioDeMateria, {});
    dialogRef.afterClosed().subscribe((result) => {
      //console.log(result);
      this.obtenenerTodos()
    });
  }

  constructor(
    private materiaService: MateriaService,
    private cdr: ChangeDetectorRef,
  ) {}

  //datePipe = inject(DatePipe);

  obtenenerTodos() {
    this.estaCargando = true;
    this.materiaService.obtenerTodos().subscribe({
      next: (materias) => {
        this.materias = materias;
        this.materias.forEach((materia) => {
          materia.horarios = this.completarSemana(materia.horarios);
        });

        console.log(this.materias);
        this.estaCargando = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al obtener materias:', err);
        this.estaCargando = false;
        this.cdr.detectChanges();
      },
    });
  }

  semana: string[] = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    //"sabado","domingo"
  ];

  completarSemana(horarios: HorarioDto[]): HorarioDto[] {
    return this.semana.map((dia) => {
      const existente = horarios.find((h) => h.dia === dia);

      if (existente) return existente;

      // valor por defecto (ajústalo a tu lógica)
      return {
        dia,
        horaInicial: '',
        horaFinal: '',
        tolerancia: 0,
        corte: 0,
      };
    });
  }

  ngOnInit() {
    this.obtenenerTodos();
  }

  agregarMinutos(hora: string, tolerancia: number) {
    const [h, m] = hora.split(':').map(Number);
    const fecha = new Date();
    fecha.setHours(h, m, 0, 0);
    fecha.setMinutes(fecha.getMinutes() + tolerancia);
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');

    return `${horas}:${minutos}`;
  }

  estaCargando = false;
  materias: MateriaDto[] = [];
}
