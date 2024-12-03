import { Component, OnInit } from '@angular/core';
import { VencimientosService } from '../../services/vencimientos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vencimientos',
  templateUrl: './vencimientos.component.html',
  styleUrls: ['./vencimientos.component.css']
})
export class VencimientosComponent implements OnInit {
  vencimientos: any[] = [];
  selectedVencimiento: any = {};

  constructor(private vencimientosService: VencimientosService) {}

  ngOnInit(): void {
    this.loadVencimientos();
  }

  loadVencimientos(): void {
    this.vencimientosService.getVencimientos().subscribe(data => {
      this.vencimientos = data;
    });
  }

  openModal(vencimiento: any = {}): void {
    this.selectedVencimiento = { ...vencimiento };
    // Trigger modal open (assuming you have a way to do this)
  }

  saveVencimiento(): void {
    if (this.selectedVencimiento.id) {
      this.vencimientosService.updateVencimiento(this.selectedVencimiento.id, this.selectedVencimiento).subscribe(() => {
        this.loadVencimientos();
        Swal.fire({
          title: "Actualización exitosa",
          text: "Has completado la creación!",
          icon: "success"
        });
      });
    } else {
      this.vencimientosService.createVencimiento(this.selectedVencimiento).subscribe(() => {
        this.loadVencimientos();
      });
    }
  }

  deleteVencimiento(id: number): void {
    this.vencimientosService.deleteVencimiento(id).subscribe(() => {
      this.loadVencimientos();
    });
  }
}
