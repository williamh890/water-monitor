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

    breakpoint: number;

    constructor(public levelsSevice: LevelsService) {}

    ngOnInit() {
        this.breakpoint = (window.innerWidth <= 700) ? 1 : 2;

        const levels$ = this.levelsSevice.getLevels();
        this.chartLevels$ = levels$.pipe(
            map(resp => resp.map(l => l.toPoint()))
        );
        this.currentLevel$ = levels$.pipe(
            filter(resp => !!resp),
            map(levels => levels[0])
        );
    }

    onResize(event) {
      this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 2;
    }
}
