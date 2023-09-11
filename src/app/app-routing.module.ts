import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AllStudentComponent } from './all-student/all-student.component';
import { authenticationguardGuard } from './authenticationguard.guard';
import { notifyguardGuard } from './notifyguard.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate :[authenticationguardGuard],children:[
  {path:'home', component:HomeComponent},
  {path:'create-student', component:CreateStudentComponent, canDeactivate:[notifyguardGuard]},
  {path:'all-student', component:AllStudentComponent},
  
  ]},
  {path:"", component:LoginComponent},
  {path:'**', component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
