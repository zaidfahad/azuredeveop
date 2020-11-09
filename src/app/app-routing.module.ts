import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AzureDeveopComponent } from './azure-deveop/azure-deveop.component';
import {AppComponent} from '../app/app.component';
const routes: Routes = 
[
  { path: 'azuredevop', component: AzureDeveopComponent },
  {path:'',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
