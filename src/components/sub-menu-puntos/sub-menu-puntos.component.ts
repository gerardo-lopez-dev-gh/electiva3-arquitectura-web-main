import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-menu-puntos',
  templateUrl: './sub-menu-puntos.component.html',
  styleUrls: ['./sub-menu-puntos.component.css']
})
export class SubMenuPuntosComponent {

  constructor(private router: Router){
    
  }

  menus =[
    {id:1,nombre:'Conceptos de uso',descripcion:'Administración de los diferentes conceptos',color:'#0083AD'},
    {id:2,nombre:'Reglas de asignación',descripcion:'Administración de reglas de asignación',color:'#3C79B8'},
    {id:3,nombre:'Vecimientos',descripcion:'Administración de fechas de vencimientos de puntos',color:'#766AB1'},
    {id:4,nombre:'Bolsas de puntos',descripcion:'Puntos de clientes',color:'#A05898'},
    {id:5,nombre:'Uso de puntos',descripcion:'Utilizar puntos de usuarios',color:'#FFA17A'},
  ]

  navigateTo(id:number){
    switch(id){
      case 1:
        this.router.navigate(['/puntos/conceptos']);
        break;
      case 2:
        this.router.navigate(['/puntos/reglas']);
        break;
      case 3:
        this.router.navigate(['/puntos/vencimientos']);
        break;
      case 4:
        this.router.navigate(['/puntos/bolsas']);
        break;
      case 5:
        this.router.navigate(['/puntos/usoPuntos']);
        break;
    }
  }


  
}
