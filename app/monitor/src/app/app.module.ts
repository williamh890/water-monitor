import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MonitorSelectModule } from './monitor-select/monitor-select.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DashboardModule,
    MonitorSelectModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
