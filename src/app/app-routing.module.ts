import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputformComponent } from './inputform/inputform.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'form', component: InputformComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
