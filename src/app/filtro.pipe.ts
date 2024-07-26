import { Pipe, PipeTransform } from '@angular/core';
import { Placa } from './inventario/Placa';

@Pipe({
  name: 'filtro',
  standalone: true
})
export class FiltroPipe implements PipeTransform {

  transform(value: Placa[], arg: string): Placa[] {
     const placasFiltradas : Placa[] =[];
     for(const placa of value){
      if(placa.nombre.toLowerCase().includes(arg.toLowerCase())
      ||placa.material.toLowerCase().includes(arg.toLowerCase())){
        placasFiltradas.push(placa)
      }
     }
    return placasFiltradas;
  }

}
