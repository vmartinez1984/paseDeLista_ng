export interface MateriaDto {
  materia: string;
  fechaInicio: Date;
  fechaFin: Date;
  horarios: HorarioDto[];
}

export interface HorarioDto {
  dia: string;
  horaInicial: string;
  horaFinal: string;
  tolerancia: number;
  corte: number;
}
