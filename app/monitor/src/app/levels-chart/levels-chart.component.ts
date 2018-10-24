import { Component, Input } from '@angular/core';

import { WaterLevel } from '../models/level.model';

@Component({
    selector: 'app-levels-chart',
    templateUrl: './levels-chart.component.html',
    styleUrls: ['./levels-chart.component.css']
})
export class LevelsChartComponent {
    @Input() levels: any[];

    public lineChartOptions = {
        responsive: true,
        scales: {
            xAxes: [{
                type: 'time'
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Water Level (Gallons)'
                }
            }]
        },
        elements: {
            point: {
                radius: 5,
                hitRadius: 10,
                hoverRadius: 10,
                hoverBorderWidth: 2
            }
        }
    };

    public lineChartColors = [{
        backgroundColor: 'rgb(127, 189, 255, 0.2)',
        borderColor: 'rgb(0, 123, 255)',
        pointBackgroundColor: 'rgb(0, 86, 178)',
        pointBorderColor: 'rgb(0, 86, 178)',
        pointHoverBackgroundColor: 'rgb(0, 86, 178)',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];

    public lineChartLegend = true;
    public lineChartType = 'line';
}
