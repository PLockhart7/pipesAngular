import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'pikachu';
  nombreUpper: string = 'PIKACHU';
  nombreCompleto: string = 'pIkAchU';

  fecha: Date = new Date(); //dia de hoy


}
