import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { LevelsService } from './services/levels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    chartLevels$: Observable<any[]>;
    currentLevel$: Observable<any>;

    constructor(public levelsSevice: LevelsService) {}

    ngOnInit() {
        const levels$ = this.levelsSevice.getLevels();
        this.chartLevels$ = levels$.pipe(
            map(resp => resp.map(l => l.toPoint()))
        );
        this.currentLevel$ = levels$.pipe(
            filter(resp => !!resp),
            map(levels => levels[0])
        );
    }
}
