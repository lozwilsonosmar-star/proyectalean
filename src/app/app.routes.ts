import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankpageComponent } from './layout/Blankpage/blankpage.component';




export const routes: Routes = [

    // Aquí rutas directas a componentes específicos pagina de inicio antes del login
    {
  path: '', component: BlankpageComponent
    },
    


    // Aquí se cargan las rutas hijas de autenticación
    {
  path: 'login',
  loadChildren: () => import('./features/auth/auth.routesComponent').then (c => c.USUARIOPASSWORD) 
   },
    // Aquí se cargan las rutas hijas de la aplicación principal
];




@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }