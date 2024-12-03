import { Component, OnInit } from '@angular/core';
import { BolsasPuntosService } from '../../services/bolsaPuntos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bolsas',
  templateUrl: './bolsas.component.html',
  styleUrls: ['./bolsas.component.css']
})
export class BolsasComponent implements OnInit {
  bolsas: any[] = [];
  puntosAVencer: any[] = [];
  bolsaSeleccionada: any;
  selectedBolsa: any;
  idCliente: any;
  dias: any;
  nuevoClienteId: string = '';
  monto: number | null = null;

  constructor(private bolsasService: BolsasPuntosService) { }

  ngOnInit(): void {
    this.getBolsas();
  }

  getBolsas(): void {
    this.bolsasService.getBolsas().subscribe((data: any[]) => {
      this.bolsas = data;
    });
  }

  mostrarDetalles(bolsa: any): void {
    this.bolsaSeleccionada = bolsa;
  }

  getPuntosAVencer(dias: string, clienteId: string): void {
    this.bolsasService.getPuntosAVencer(dias, clienteId).subscribe((data: any[]) => {
      this.puntosAVencer = data;
    });
  }

  buscar(id: string, dias: string): void {
    if (dias != null && id != null) {
      this.bolsasService.getPuntosAVencer(dias, id).subscribe((data: any[]) => {
        this.bolsas = data;
      });
      this.dias = null;
      this.idCliente = null;
    } else {
      this.bolsasService.getBolsas().subscribe((data: any[]) => {
        this.bolsas = data;
      });
      this.dias = null;
      this.idCliente = null;
    }
  }

  eliminarBolsa(id: number): void {
    this.bolsasService.deleteBolsa(id).subscribe(() => {
      this.getBolsas();
    });
  }

  abrirModalCreacion(): void {
    this.nuevoClienteId = '';
    this.monto = null;
  }

  crearBolsa(): void {
    if (this.nuevoClienteId && this.monto !== null) {
      this.bolsasService.crearBolsa(this.nuevoClienteId, this.monto)
        .subscribe(() => {
          this.getBolsas();
          Swal.fire({
            title: "Bolsa Creada",
            text: "Se ha cargado los puntos correctamente.",
            icon: "success"
          });
        });
    }
  }
}
