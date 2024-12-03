// src/app/services/reglas.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReglasService {
  private apiUrl = 'http://localhost:8090/reglas';

  constructor(private http: HttpClient) {}

  getAllReglas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getReglaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addRegla(regla: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, regla);
  }

  updateRegla(id: number, regla: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, regla);
  }

  deleteRegla(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
