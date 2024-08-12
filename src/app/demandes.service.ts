import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Demande} from './demande';

@Injectable({
  providedIn: 'root'
})
export class DemandesService {
    rootUrl = 'http://localhost:8080/';

    getAll(): Observable<any> {
        return this.http.get(this.rootUrl + 'vente-auto-back/demandes');
    }

    getById(id: number): Observable<any> {
        return this.http.get(this.rootUrl + 'vente-auto-back/demandes/' + id);
    }
    create(demande: Demande): Observable<any> {
        return this.http.post(this.rootUrl + 'vente-auto-back/demandes/', demande);
    }
    constructor(private http: HttpClient) {
    }

}
