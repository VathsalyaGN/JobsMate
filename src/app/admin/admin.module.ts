import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EditRecruiterComponent } from './edit-recruiter/edit-recruiter.component';
import { RecruiterListComponent } from './recruiter-list/recruiter-list.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../shared/material Module/material/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    RecruiterListComponent,
    EditRecruiterComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
