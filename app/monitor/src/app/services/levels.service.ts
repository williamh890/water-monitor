import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LevelsService {
  constructor(private http: HttpClient) { }

    public getLevels(): Observable<any[]> {
        return this.http.get<any[]>('/assets/levels.json');
    }
}
