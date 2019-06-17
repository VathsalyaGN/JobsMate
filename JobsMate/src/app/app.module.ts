
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
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
import { FilterComponent } from './filter/filter.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SearchdataItemComponent } from './searchdata-item/searchdata-item.component';
import { SearchComponent } from './search/search.component';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import { PostjoblistComponent } from './postjoblist/postjoblist.component';


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
    SearchJobComponent,
    FilterComponent,
    SearchdataItemComponent,
    SearchComponent,
    PostjoblistComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatCardModule,
    MatSortModule,
    MatDividerModule
  ],
  exports:[
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


