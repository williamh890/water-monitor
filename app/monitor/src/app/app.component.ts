import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LevelsService } from './services/levels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    levels$: Observable<any[]>;

    constructor(public levelsSevice: LevelsService) {}

    ngOnInit() {
        this.levels$ = this.levelsSevice.getLevels();
        this.levels$.subscribe(v => console.log(v));
    }
}
