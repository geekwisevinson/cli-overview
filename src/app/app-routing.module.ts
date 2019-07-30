import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {DashComponent} from './features/dash.component';
import {RandomGuard} from './guards/random.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dash', component: DashComponent, canActivate: [RandomGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
