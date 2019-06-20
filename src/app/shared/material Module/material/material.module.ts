import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, MatNativeDateModule,
   MatTableModule, MatDrawerContainer, MatSidenavModule,MatSortModule  } from '@angular/material';


@NgModule({
  imports: [
    MatCheckboxModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatTableModule,
    MatSidenavModule,
    MatSortModule,

],
  exports: [
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatTableModule,
    MatSidenavModule,
    MatSortModule,
    

  ],

})
export class MaterialModule { }
