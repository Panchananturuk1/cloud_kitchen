import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },

  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  // {
  //   path: 'hero',
  //   loadChildren: () => import('./pages/hero/hero.module').then( m => m.HeroPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pickup-call',
    loadChildren: () => import('./pages/pickup-call/pickup-call.module').then( m => m.PickupCallPageModule)
  },
  {
    path: 'add-call',
    loadChildren: () => import('./pages/add-call/add-call.module').then( m => m.AddCallPageModule)
  },
  {
    path: 'pickup-calls',
    loadChildren: () => import('./pages/pickup-calls/pickup-calls.module').then( m => m.PickupCallsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
