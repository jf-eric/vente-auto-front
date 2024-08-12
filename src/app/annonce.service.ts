import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


class Annonce {
}

@Injectable(
)
export class AnnonceService {
    constructor(private http: HttpClient) {
    }

    baseUrl: string = 'http://localhost:8080/vente-auto-back/examples';

    createAnnonce(annonce: Annonce) {
        return this.http.post(this.baseUrl, annonce);
    }
}


