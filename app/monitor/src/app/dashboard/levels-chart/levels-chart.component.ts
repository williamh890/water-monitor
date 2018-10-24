import { Component, Input } from '@angular/core';

import { WaterLevel } from '../../models/level.model';

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
        backgroundColor: 'rgb(63, 81, 181, 0.1)',
        borderColor: 'rgb(63, 81, 181)',
        pointBackgroundColor: 'rgb(63, 81, 181)',
        pointBorderColor: 'rgb(63, 81, 181)',
        pointHoverBackgroundColor: 'rgb(63, 81, 181)',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];

    public lineChartLegend = true;
    public lineChartType = 'line';
}
