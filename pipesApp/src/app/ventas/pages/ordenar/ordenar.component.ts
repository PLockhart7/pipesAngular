import { Color, Heroe } from './../../interfaces/ventas.interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  enMayusculas: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela:true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela:false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela:false,
      color: Color.verde
    },
    {
      nombre: 'DareDevil',
      vuela:false,
      color: Color.rojo
    },
    {
      nombre: 'Green Lantern',
      vuela:true,
      color: Color.verde
    },
  ]



  cambiar(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;

  }


}
