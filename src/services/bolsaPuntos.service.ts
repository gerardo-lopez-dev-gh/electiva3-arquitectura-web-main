import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BolsasPuntosService {

  private baseUrl = 'http://localhost:8090/bolsas';

  constructor(private http: HttpClient) { }

  getBolsas(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  getPuntosAVencer(dias: string, clienteId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/puntos-a-vencer?dias=${dias}&clienteId=${clienteId}`);
  }

  getBolsasByDocumento(documento: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?documento=${documento}`);
  }

  deleteBolsa(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  crearBolsa(clienteId: string, puntajeAsignado: number, puntajeUtilizado?: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/asignar/${clienteId}/${puntajeAsignado}`, { puntajeUtilizado });
  }
}
