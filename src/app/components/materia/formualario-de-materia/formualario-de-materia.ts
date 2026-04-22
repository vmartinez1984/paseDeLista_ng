import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MateriaDto } from '../../../interfaces/materia-dto';
import { MateriaService } from '../../../services/materia.service';

@Component({
  selector: 'app-formualario-de-materia',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTimepickerModule,
    ReactiveFormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './formualario-de-materia.html',
  styleUrl: './formualario-de-materia.css',
})
export class FormualarioDeMateria {
  formGroup: FormGroup;
  readonly dialogRef = inject(MatDialogRef<FormualarioDeMateria>)

  constructor(
    private formBuilder: FormBuilder,
    private service: MateriaService,
  ) {
    this.formGroup = this.formBuilder.group({
      materia: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      horaDeEntrada1: '',
      horaDeSalida1: '',
      horaDeEntrada2: '',
      horaDeSalida2: '',
      horaDeEntrada3: '',
      horaDeSalida3: '',
      horaDeEntrada4: '',
      horaDeSalida4: '',
      horaDeEntrada5: '',
      horaDeSalida5: '',
      retardo1: '',
      retardo2: '',
      retardo3: '',
      retardo4: '',
      retardo5: '',
      corte1: '',
      corte2: '',
      corte3: '',
      corte4: '',
      corte5: '',
    });
  }

  guardar() {
    if (this.formGroup.valid) {
      let materiaDto: MateriaDto = {
        materia: this.formGroup.value.materia,
        fechaInicio: this.formGroup.value.fechaInicio,
        fechaFin: this.formGroup.value.fechaFin,
        horarios: [
          {
            dia: 'lunes',
            horaInicial: this.obtenerHora(this.formGroup.value.horaDeEntrada1),
            horaFinal: this.obtenerHora( this.formGroup.value.horaDeSalida1),
            tolerancia: this.formGroup.value.tolerancia1,
            corte: this.formGroup.value.corte1,
          },
          {
            dia: 'martes',
            horaInicial: this.obtenerHora( this.formGroup.value.horaDeEntrada2),
            horaFinal: this.obtenerHora( this.formGroup.value.horaDeSalida2),
            tolerancia: this.formGroup.value.tolerancia2,
            corte: this.formGroup.value.corte2,
          },
          {
            dia: 'miercoles',
            horaInicial: this.obtenerHora( this.formGroup.value.horaDeEntrada3),
            horaFinal: this.obtenerHora( this.formGroup.value.horaDeSalida3),
            tolerancia: this.formGroup.value.tolerancia3,
            corte: this.formGroup.value.corte3,
          },
          {
            dia: 'jueves',
            horaInicial: this.obtenerHora( this.formGroup.value.horaDeEntrada4),
            horaFinal: this.obtenerHora( this.formGroup.value.horaDeSalida4),
            tolerancia: this.formGroup.value.tolerancia4,
            corte: this.formGroup.value.corte4,
          },
          {
            dia: 'viernes',
            horaInicial: this.obtenerHora( this.formGroup.value.horaDeEntrada5),
            horaFinal: this.obtenerHora( this.formGroup.value.horaDeSalida5),
            tolerancia: this.formGroup.value.tolerancia5,
            corte: this.formGroup.value.corte5,
          },
        ],
      };
      console.log(materiaDto);
      this.service.agregar(materiaDto).subscribe({
        next: (data)=>{
          //console.log(data)
          this.dialogRef.close()
        }
      })
    }
  }

  obtenerHora(fecha: Date){
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');

    const horaLocal = `${horas}:${minutos}`;

    return horaLocal;
  }
}
