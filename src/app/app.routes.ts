import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { InventarioComponent } from './inventario/inventario.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'inicio',
        pathMatch: 'full'
      },
    {
        path : "inicio",
        component : InicioComponent
    },
    {
        path : "inventario",
        component : InventarioComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }