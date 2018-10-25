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
  const { date, level } = level_entry;
  const [ year, month, day ] = date;

  const dateObj = new Date(year, month - 1, day);

  return new WaterLevel(inchToGallons(level), dateObj);
};

const inchToGallons = inches =>
  -0.00296 * inches ** 3 +
    0.2176 * inches ** 2 +
    22.14 * inches ** 1 - 15.59;

