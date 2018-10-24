import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

import { MonitorSelectComponent } from './monitor-select.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    MonitorSelectComponent
  ],
  exports: [
    MonitorSelectComponent
  ]
})
export class MonitorSelectModule { }
