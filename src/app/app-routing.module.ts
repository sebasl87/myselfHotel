import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children:[
      {
      path:"",
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'first',
        loadChildren: () => import('./home/first/first.module').then( m => m.FirstPageModule)
      },
      {
        path:"index",
        loadChildren: () => import('./home/index/index.module').then( m => m.IndexPageModule)
      },
      {
        path:"index/:id",
        loadChildren: () => import('./home/index/index.module').then( m => m.IndexPageModule)
      },
      {
        path: 'misdatos/:id',
        loadChildren: () => import('./home/misdatos/misdatos.module').then( m => m.MisdatosPageModule)
      },
      {
        path: 'misreservas/:id',
        loadChildren: () => import('./home/misreservas/misreservas.module').then( m => m.MisreservasPageModule)
      },
      {
        path: 'checkin/:id',
        loadChildren: () => import('./home/checkin/checkin.module').then( m => m.CheckinPageModule)
      },
      {
        path: 'consumos/:id',
        loadChildren: () => import('./home/consumos/consumos.module').then( m => m.ConsumosPageModule)
      },
      {
        path: 'checkout/:id',
        loadChildren: () => import('./home/checkout/checkout.module').then( m => m.CheckoutPageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('./home/info/info.module').then( m => m.InfoPageModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
