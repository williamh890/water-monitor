import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WaterLevel } from '../models/level.model';


@Injectable({
  providedIn: 'root'
})
export class LevelsService {
  constructor(private http: HttpClient) { }

  public getLevels(levelsFile: string): Observable<any[]> {
    return this.http.get<any[]>(`/assets/${levelsFile}`).pipe(
      map(resp => resp
        .map(toLevelModel)
      )
    );
  }
}

const toLevelModel = level_entry => {
  console.log(level_entry);
  const { date, level_cm } = level_entry;

  const levelInches = cmToInches(level_cm);
  const dateObj = new Date(date);

  const gals = Math.round(inchToGallons(levelInches) * 100) / 100;

  return new WaterLevel(gals, dateObj);
};

const cmToInches = cm => cm / 2.54;

const inchToGallons = inches =>
  -0.00296 * inches ** 3 +
    0.2176 * inches ** 2 +
    22.14 * inches ** 1 - 15.59;

