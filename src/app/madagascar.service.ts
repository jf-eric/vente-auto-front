import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MadagascarService {
    getAll(): Observable<any> {
        return this.http.get('assets/madagascar.json');
    }


    constructor( private http: HttpClient) { }
}
