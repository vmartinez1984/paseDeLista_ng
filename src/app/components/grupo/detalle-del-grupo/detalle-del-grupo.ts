import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Carlos', weight: 1.0079, symbol: '7'},
  {position: 2, name: 'Poncho', weight: 4.0026, symbol: '8'},
  {position: 3, name: 'La Mariana', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'El Yoni', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Pablo', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'El Alan', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
]
@Component({
  selector: 'app-detalle-del-grupo',
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './detalle-del-grupo.html',
  styleUrl: './detalle-del-grupo.css',
})
export class DetalleDelGrupo {
  displayedColumns: string[] = ['position', 'name', 'symbol', 'acciones'];
  dataSource = ELEMENT_DATA;
}
