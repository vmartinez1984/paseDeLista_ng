import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Programación móvil', weight: 1.0079, symbol: '7'},
  {position: 2, name: 'Programación web', weight: 4.0026, symbol: '8'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
]

@Component({
  selector: 'app-lista-de-grupos',
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './lista-de-grupos.html',
  styleUrl: './lista-de-grupos.css',
})
export class ListaDeGrupos {
  displayedColumns: string[] = ['position', 'name', 'symbol', 'acciones'];
  dataSource = ELEMENT_DATA;
}
