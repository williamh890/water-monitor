import { Component, OnInit, Input } from '@angular/core';

import { WaterLevel } from '../../models/level.model';

@Component({
  selector: 'app-current-level',
  templateUrl: './current-level.component.html',
  styleUrls: ['./current-level.component.css']
})
export class CurrentLevelComponent implements OnInit {
    @Input() currentLevel: WaterLevel;

  constructor() { }

  ngOnInit() {
  }

}
