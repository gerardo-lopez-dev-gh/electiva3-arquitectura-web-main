import { Component, OnInit } from '@angular/core';
import { UsoPuntosService } from '../../services/usoPuntos.service';
import { ClienteService } from '../../services/cliente.service';
import { ConceptosService } from '../../services/concepto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-uso-puntos',
  templateUrl: './uso-puntos.component.html',
  styleUrls: ['./uso-puntos.component.css']
})
export class UsoPuntosComponent implements OnInit {
  idCliente: number | undefined;
  fechaCarga: string = '';
  puntos: number | undefined;
  conceptoId: number | undefined;
  clientes: any[] = [];
  conceptos: any[] = [];

  constructor(
    private usoPuntosService: UsoPuntosService,
    private clienteService: ClienteService,
    private conceptoService: ConceptosService
  ) {}

  ngOnInit(): void {
    this.loadClientes();
    this.loadConceptos();
  }

  loadClientes(): void {
    this.clienteService.getAllClientes().subscribe((data: any[]) => {
      this.clientes = data;
    });
  }

  loadConceptos(): void {
    this.conceptoService.getAllConceptos().subscribe((data: any[]) => {
      this.conceptos = data;
    });
  }

  confirmarUso(): void {
    if (this.idCliente && this.puntos && this.fechaCarga && this.conceptoId) {
      this.usoPuntosService.crearUsoPuntos(this.idCliente, this.fechaCarga, this.puntos, this.conceptoId).subscribe(response => {
        Swal.fire({
          title: "Uso de puntos exitoso",
          text: "Se han utilizado los puntos correctamente.",
          icon: "success"
        });
      }, error => {
        Swal.fire({
          title: "Uso de puntos fallido",
          text: "No se ha podido completar el proceso.",
          icon: "error"
        });
      });
    } else {
      Swal.fire({
        title: "Atención!!",
        text: "Complete todo los campos",
        icon: "warning"
      });
    }
  }
}
