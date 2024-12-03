import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsoPuntosService {
  private baseUrl = 'http://localhost:8090/usos';

  constructor(private http: HttpClient) { }

  crearUsoPuntos(idCliente: number, fechaCarga: string, puntos: number, conceptoId: number): Observable<any> {
    const body = new URLSearchParams();
    body.set('idCliente', idCliente.toString());
    body.set('fechaCarga', fechaCarga);
    body.set('puntos', puntos.toString());
    body.set('conceptoId', conceptoId.toString());

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.post<any>(this.baseUrl, body.toString(), { headers });
  }
}
