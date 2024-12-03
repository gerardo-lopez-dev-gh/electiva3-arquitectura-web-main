import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConceptosService {
  private apiUrl = 'http://localhost:8090/conceptos';

  constructor(private http: HttpClient) { }

  getAllConceptos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getConceptoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addConcepto(concepto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, concepto);
  }

  deleteConcepto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
