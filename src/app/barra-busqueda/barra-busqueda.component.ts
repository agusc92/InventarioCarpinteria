import { Component,EventEmitter,Input,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'barra-busqueda',
  standalone: true,
  imports: [FormsModule],
  styleUrls:['./barra-busqueda.scss'],
  template: '<div><label>buscar</label><input name="objetivo" (input)="onValorCambiado()" [(ngModel)]="valor" type="text"></div>',
  /*el ngmodel se encarga de extrael el valor del input y colocarlo en la variable valor. tuve que declararla e inicializarca por
  cuestiones de valores ininciales*/ 
})
export class BarraBusquedaComponent {
valor : string = "";
@Output() valorCambiado:EventEmitter<string> = new EventEmitter <string>();

onValorCambiado(){
 
 this.valorCambiado.emit(this.valor);
}
}
