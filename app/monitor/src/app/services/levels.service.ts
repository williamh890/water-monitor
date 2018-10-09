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

    public getLevels(): Observable<any[]> {
        return this.http.get<any[]>('/assets/levels.json').pipe(
            map(resp => resp
                .map(toLevelModel)
                .map(l => l.toPoint())
            )
        );
    }
}

const toLevelModel = level_entry => {
    const {date, level } = level_entry;
    const [ year, month, day ] = date;

    const dateObj = new Date(year, month - 1, day);

    return new WaterLevel(level, dateObj);
};
