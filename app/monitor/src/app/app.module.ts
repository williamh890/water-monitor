import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LevelsChartModule } from './levels-chart/levels-chart.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LevelsChartModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
