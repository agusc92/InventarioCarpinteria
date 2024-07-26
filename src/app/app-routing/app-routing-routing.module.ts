import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';
import { InventarioComponent } from '../inventario/inventario.component';

const routes: Routes = [
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
