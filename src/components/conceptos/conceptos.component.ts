import { Component, OnInit } from '@angular/core';
import { ConceptosService } from '../../services/concepto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.component.html',
  styleUrls: ['./conceptos.component.css']
})
export class ConceptosComponent implements OnInit {
  conceptos: any[] = [];
  selectedConcepto: any = { id: null, descripcion: '', puntosRequeridos: 0 };

  constructor(private conceptosService: ConceptosService) {}

  ngOnInit(): void {
    this.loadConceptos();
  }

  loadConceptos(): void {
    this.conceptosService.getAllConceptos().subscribe(data => {
      this.conceptos = data;
    });
  }

  openModal(concepto: any): void {
    this.selectedConcepto = concepto
  }

  closeModal(): void {
    this.selectedConcepto = { id: null, descripcion: '', puntosRequeridos: 0 };
  }

  deleteConcepto(id: number): void {
    this.conceptosService.deleteConcepto(id).subscribe(() => {
      this.loadConceptos();
      
    });
  }

  confirmar() {
    if (this.selectedConcepto.id) {
      Swal.fire({
        title: "Actualización exitosa",
        text: "Has completado la creación!",
        icon: "success"
      });
      this.conceptosService.addConcepto(this.selectedConcepto).subscribe(() => {
        this.loadConceptos();
        this.closeModal();
      });
    } else {
      this.conceptosService.addConcepto(this.selectedConcepto).subscribe(() => {
        this.loadConceptos();
        this.closeModal();
      });
    }
  }
}
