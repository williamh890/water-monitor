import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

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
        HttpClientModule,

        MatCardModule,
        MatGridListModule,
        MatProgressBarModule,
        MatDividerModule,
        MatListModule,
        MatButtonModule
    ],
    providers: [
        LevelsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
