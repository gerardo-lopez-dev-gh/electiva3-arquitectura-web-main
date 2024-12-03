import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-abm-clientes',
  templateUrl: './abm-clientes.component.html',
  styleUrls: ['./abm-clientes.component.css']
})
export class AbmClientesComponent {
  cliente = {
    nombre: '',
    apellido: '',
    numeroDocumento: '',
    tipoDocumento: '',
    nacionalidad: '',
    email: '',
    telefono: '',
    fechaNacimiento: ''
  };

  constructor(private router: Router,private clienteService: ClienteService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.clienteService.getClienteById(id).subscribe(cliente => {
          this.cliente = cliente;
        }, error => {
          console.error('Error al cargar los datos del cliente', error);
        });
      }
    });
  }

  onSubmit(): void {
    this.clienteService.createCliente(this.cliente).subscribe(response => {
      console.log('Cliente creado', response);
      Swal.fire({
        title: "Creación exitosa",
        text: "Has completado la creación!",
        icon: "success"
      });
      this.router.navigate(['/clientes']);
    }, error => {
      console.error('Error al crear el cliente', error);
      Swal.fire({
        title: "Error en creación",
        text: "No se ha podido completar la creación.",
        icon: "error"
      });
    });
  }
}
