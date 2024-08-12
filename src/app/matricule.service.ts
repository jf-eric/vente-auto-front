import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatriculeService {
    rootUrl = 'http://localhost:8080/';
    getAll(): Observable<any> {
        return this.http.get(this.rootUrl + 'vente-auto-back/matricules');
    }
    getById(id: number): Observable<any> {
        return this.http.get(this.rootUrl + 'vente-auto-back/matricules/' + id);
    }

  constructor(private http: HttpClient) { }
}
