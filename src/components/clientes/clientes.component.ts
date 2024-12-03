import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: any[] = [];
  nombre: string = '';
  apellido: string = '';
  fechaNacimiento: string = '';

  constructor(private router: Router, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getAllClientes();
  }

  getAllClientes(): void {
    this.clienteService.getAllClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  searchClientes(): void {
    this.clienteService.getClientesByFilters(this.nombre, this.apellido, this.fechaNacimiento).subscribe(data => {
      this.clientes = data;
    });
  }
  deleteCliente(id: string): void{
    this.clienteService.deleteCliente(id).subscribe(response => {
      Swal.fire({
        title: "Registro eliminado",
        text: "Se ha eliminado el registro.",
        icon: "error"
      });
    })
  }

  navigateTo(): void {
    this.router.navigate(['clientes/abmClientes']);
  }

  navigateToId(id: number): void {
    this.router.navigate(['clientes/abmClientes', id]);
  }
}
