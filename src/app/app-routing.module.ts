import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSeatComponent } from './Views/list-seat/list-seat.component';
import { HomeComponent } from './Views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'poltronas/:id',
    component: ListSeatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
