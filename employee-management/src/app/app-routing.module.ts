import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { LoginComponent } from './components/login/login.component';
import { AutentikasiGuard } from './validasi/autentikasi.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'list-employee', component: ListEmployeeComponent},
  {path: 'detail-employee', component: DetailEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
