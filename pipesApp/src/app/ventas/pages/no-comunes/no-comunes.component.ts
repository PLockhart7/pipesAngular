import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Pepe';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'

  }

    //i18nPlural
    clientes: string[] = ['Maria','Pedro','Juan','Periko'];
    clientesMapa = {
      '=0': 'no tenemos ningún cliente esperando.',
      '=1': 'tenemos 1  cliente esperando.',
      '=2': 'tenemos 2  clientes esperando.',
      'other': 'tenemos # clientes esperando.'



    }

    cambiarCliente(){
        this.nombre = 'Melissa';
        this.genero = 'femenino';
    }

    borrarCliente(){
      this.clientes.pop();
    }

    //keyValue Pipe
    persona = {
      nombre: 'Pepe',
      edad: 32,
      direccion: 'casa melon'
    }

    //JsonPipe
    heroes = [
      {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
]

//Async pipe
miObservable = interval(1000); //0,2,3,4,5

valorPromesa = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve('Tenemos data de promesa')
  }, 3500);
});

}
