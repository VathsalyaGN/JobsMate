import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { AppliedJobsComponent } from './job-seekers/applied-jobs/applied-jobs.component';
import { JobSeekersComponent } from './job-seekers/job-seekers.component';
// import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'JobSeeker',loadChildren:'./job-seekers/job-seekers.module#JobSeekersModule'}
  //{path: 'apply/:id', component: AppliedJobsComponent},
  // {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  // {path: 'vendor', loadChildren: './vendor/vendor.module#VendorModule'},
  // {path: 'customer', loadChildren: './customer/customer.module#CustomerModule'}

  // {path: 'header', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
