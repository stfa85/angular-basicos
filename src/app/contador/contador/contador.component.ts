import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>
<button (click)=" Acumular(+1)"> +1 </button>

<span> {{numero}} </span>

<button (click)=" Acumular(-1)"> -1 </button>`
})
export class ContadorComponent{
    titulo: string = 'Contador app';
    numero: number = 10;
    base : number = 5;
  
    Acumular(valor:number){
    this.numero +=valor
}
}