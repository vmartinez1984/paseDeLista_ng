import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MateriaDto } from '../interfaces/materia-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MateriaService {
  apikey = '02945d48-ec75-43ed-b0b8-1eec056446aa';
  baseUrl: string = 'https://api-pasedelista.onrender.com/api';
  url = `${this.baseUrl}/grupos?apikey=${this.apikey}`;

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<MateriaDto[]> {
    return this.http.get<MateriaDto[]>(this.url);
  }

  agregar(materia: MateriaDto): Observable<any> {
    return this.http.post<any>(this.baseUrl +"/grupos/crear", materia);
  }
}
