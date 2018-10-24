import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { LevelsService } from './services/levels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chartLevels$: Observable<any[]>;
  currentLevel$: Observable<any>;

  monitorFile = '';

  constructor(public levelsSevice: LevelsService) {}

  onNewMonitorFile(monitorFile: string) {
    console.log(monitorFile);
    this.monitorFile = monitorFile;

    const levels$ = this.levelsSevice.getLevels(monitorFile);
    this.chartLevels$ = levels$.pipe(
      map(resp => resp.map(l => l.toPoint()))
    );
    this.currentLevel$ = levels$.pipe(
      filter(resp => !!resp),
      map(levels => levels[0])
    );
  }
}
