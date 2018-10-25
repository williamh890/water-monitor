import { Component } from '@angular/core';

import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';

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

  constructor(
    private snackBar: MatSnackBar,
    private levelsSevice: LevelsService
  ) {}

  onNewMonitorFile(monitorFile: string) {
    this.monitorFile = monitorFile;

    const levels$ = this.levelsSevice.getLevels(monitorFile);
    this.chartLevels$ = levels$.pipe(
      map(resp => resp.map(l => l.toPoint())),
      catchError(() => {
        this.openSnackBar(`Can't load file '${this.monitorFile}'...`, 'Error');
        this.monitorFile = '';
        return [];
      })
    );

    this.currentLevel$ = levels$.pipe(
      filter(resp => !!resp),
      map(levels => levels[0])
    );
  }

  onDashboardReset() {
    this.monitorFile = '';
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
