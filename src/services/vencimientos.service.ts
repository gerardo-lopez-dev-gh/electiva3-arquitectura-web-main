import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VencimientosService {
  private apiUrl = 'http://localhost:8090/parametros-vencimiento';

  constructor(private http: HttpClient) {}

  getVencimientos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createVencimiento(vencimiento: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, vencimiento);
  }

  updateVencimiento(id: number, vencimiento: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, vencimiento);
  }

  deleteVencimiento(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
