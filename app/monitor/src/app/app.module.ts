import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LevelsService } from './services/levels.service';
import { AppComponent } from './app.component';
import { LevelsChartModule } from './levels-chart/levels-chart.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LevelsChartModule,
        HttpClientModule
    ],
    providers: [
        LevelsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
