import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            
            loadChildren: () => import('../buscar-carwash/buscar-carwash.module').then( m => m.BuscarCarwashPageModule)
          },
          {
            path: 'details',
            loadChildren: () => import('../details/details.module').then( m => m.DetailsPageModule)
          },
          {
            path: 'gestionar',
            loadChildren: () => import('../gestionar-servicio/gestionar-servicio.module').then( m => m.GestionarServicioPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () => import('../registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () => import('../usuario/usuario.module').then( m => m.UsuarioPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
