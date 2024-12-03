import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

  getAllClientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/clientes`);
  }

  getClientesByFilters(nombre?: string, apellido?: string, fechaNacimiento?: string): Observable<any[]> {
    let params = new HttpParams();
    if (nombre) {
      params = params.set('nombre', nombre);
    }
    if (apellido) {
      params = params.set('apellido', apellido);
    }
    if (fechaNacimiento) {
      params = params.set('fechaNacimiento', fechaNacimiento);
    }
    return this.http.get<any[]>(`${this.apiUrl}/clientes/clientes-por-nombre-apellido-cumpleanios`, { params });
  }

  createCliente(cliente: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/clientes', cliente);
  }

  getClienteById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/clientes/${id}`);
  }

  updateCliente(cliente: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/clientes/${cliente.id}`, cliente);
  }

  deleteCliente(id:string): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/clientes/${id}`)
  }

}
