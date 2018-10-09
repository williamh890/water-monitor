import { Component } from '@angular/core';

import { LevelsService } from './services/levels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    levels$ = this.levels.getLevels();

    constructor(public levels: LevelsService) {}
}
