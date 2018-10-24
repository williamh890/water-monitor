import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LevelsService } from './services/levels.service';
import { AppComponent } from './app.component';
import { LevelsChartModule } from './levels-chart/levels-chart.module';
import { CurrentLevelComponent } from './current-level/current-level.component';


@NgModule({
    declarations: [
        AppComponent,
        CurrentLevelComponent
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
