import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { LevelsChartComponent } from './levels-chart.component';

@NgModule({
    imports: [
        CommonModule,
        ChartsModule
    ],
    declarations: [LevelsChartComponent],
    exports: [LevelsChartComponent]
})
export class LevelsChartModule { }
