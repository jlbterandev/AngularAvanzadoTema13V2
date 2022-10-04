import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[
  {
    path: 'home', loadChildren: ()=> import('./modules/home/home.module').then(m => m.HomeModule),
    data: { preload: true }
  },
  {
    path: 'contacts', loadChildren: ()=> import('./modules/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'profile/:param', loadChildren: ()=> import('./modules/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: '', redirectTo: 'contacts', pathMatch: 'full'
  }
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
