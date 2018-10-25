import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { LevelsChartModule } from './levels-chart/levels-chart.module';
import { CurrentLevelComponent } from './current-level/current-level.component';
import { DashboardComponent } from './dashboard.component';

import { LevelsService } from '../services/levels.service';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,

    LevelsChartModule,
  ],
  declarations: [
    CurrentLevelComponent,
    DashboardComponent
  ],
  providers: [
    LevelsService
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
