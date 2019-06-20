
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { LoginComponent } from './shared/components/login/login.component';
import { ChangePwdComponent } from './shared/components/change-pwd/change-pwd.component';
import { MessageComponent } from './shared/components/message/message.component';
import { MaterialModule } from './shared/material Module/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import { ImageSliderComponent } from './shared/components/image-slider/image-slider.component' ;
import { SearchJobComponent } from './job-seekers/search-job/search-job.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JobSeekersModule } from './job-seekers/job-seekers.module';
import { JobSeekersComponent } from './job-seekers/job-seekers.component';
import { JobSeekerRoutingModule } from './job-seekers/job-seeker-routing.module';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ChangePwdComponent,
    MessageComponent,
    ImageSliderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    //JobSeekersModule,
    //JobSeekerRoutingModule
  ],
  exports:[
    ReactiveFormsModule,        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


