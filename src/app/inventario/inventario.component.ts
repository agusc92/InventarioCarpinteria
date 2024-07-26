import { Component } from '@angular/core';
import { Placa } from './Placa';
import { BarraBusquedaComponent } from '../barra-busqueda/barra-busqueda.component';
@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [BarraBusquedaComponent],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss'
})
export class InventarioComponent {
  placas : Placa[]= [
    {
      nombre: "Roble",
      material : "Fibrofacil",
      alto: 275,
      ancho : 183,
      marca : "Massisa",
      imagen : "string",
      stock : 10,
      espesor : 18,
      sector: "1",
    },
    {
      nombre: "cedro",
      material : "Fibrofacil",
      alto: 275,
      ancho : 183,
      marca : "faplac",
      imagen : "string",
      stock : 5,
      espesor : 18,
      sector: "3",
    },
    {
      nombre: "fenolico de pino",
      material : "fenolico",
      alto: 244,
      ancho : 122,
      marca : "Massisa",
      imagen : "string",
      stock : 3,
      espesor : 15,
      sector: "2,3",
    }
  ]
}
