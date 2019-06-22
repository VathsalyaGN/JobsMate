import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { MaterialModule } from '../shared/material Module/material/material.module';
import { JobSeekersComponent } from './job-seekers.component';
import { JobSeekerRoutingModule } from './job-seeker-routing.module';
import { JobSearchPipe } from './job-search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from '../filter/filter.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AppliedJobsComponent,
    ProfileComponent,
    SearchJobComponent,
    JobSeekersComponent,
    JobSearchPipe,
    FilterComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    JobSeekerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    SearchJobComponent,
    JobSeekersComponent,
    MaterialModule,
  ]
})
export class JobSeekersModule { }
