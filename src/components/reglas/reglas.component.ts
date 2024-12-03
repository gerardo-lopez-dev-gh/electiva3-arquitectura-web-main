// src/app/reglas/reglas.component.ts
import { Component, OnInit } from '@angular/core';
import { ReglasService } from '../../services/reglas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reglas',
  templateUrl: './reglas.component.html',
  styleUrls: ['./reglas.component.css']
})
export class ReglasComponent implements OnInit {
  reglas: any[] = [];
  selectedRegla: any = {};

  constructor(private reglasService: ReglasService) {}

  ngOnInit(): void {
    this.loadReglas();
  }

  loadReglas(): void {
    this.reglasService.getAllReglas().subscribe(data => {
      this.reglas = data;
    });
  }

  openModal(regla: any): void {
    this.selectedRegla = { ...regla }; 
  }

  closeModal(): void {
    this.selectedRegla = {};
  }

  saveRegla(): void {
    if (this.selectedRegla.id) {
      // Update existing regla
      this.reglasService.updateRegla(this.selectedRegla.id, this.selectedRegla).subscribe(() => {
        Swal.fire({
          title: 'Actualización exitosa',
          text: 'La regla ha sido actualizada!',
          icon: 'success'
        });
        this.loadReglas();
      });
    } else {
      // Create new regla
      this.reglasService.addRegla(this.selectedRegla).subscribe(() => {
        Swal.fire({
          title: 'Creación exitosa',
          text: 'La regla ha sido creada!',
          icon: 'success'
        });
        this.loadReglas();
      });
    }

    document.getElementById('staticBackdrop')?.click();
  }

  deleteRegla(id: number): void {
    this.reglasService.deleteRegla(id).subscribe(() => {
      Swal.fire({
        title: 'Eliminación exitosa',
        text: 'La regla ha sido eliminada!',
        icon: 'success'
      });
      this.loadReglas();
    });
  }
}
