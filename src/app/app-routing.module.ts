import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GoalsubmitComponent } from './goalsubmit/goalsubmit.component';
const routes: Routes = [ 
{ path:'login', component: LoginComponent
 }, {
 path:'goalsub', component:GoalsubmitComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
;