import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Offre} from './offre';

@Injectable({
    providedIn: 'root'
})
export class OffresService {

    rootUrl = 'http://localhost:8080/';

    getAll(): Observable<any> {
        return this.http.get(this.rootUrl + 'vente-auto-back/examples');
    }

    getAllMatricules(): Observable<any> {
        return this.http.get(this.rootUrl + 'vente-auto-back/matricules');
    }

    getById(id: number): Observable<any> {
        return this.http.get(this.rootUrl + 'vente-auto-back/examples/' + id);
    }

    create(offre: Offre): Observable<any> {
        return this.http.post(this.rootUrl + 'vente-auto-back/examples/', offre);
    }

    deleteById(id: number): Observable<any> {
        return this.http.delete(this.rootUrl + 'vente-auto-back/examples/' + id);
    }

    constructor(private http: HttpClient) {
    }
}
