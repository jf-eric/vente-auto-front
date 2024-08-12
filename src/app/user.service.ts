import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    rootUrl = 'http://localhost:8080/';

    create(user: User): Observable<any> {
        console.log(user);
        return this.http.post(this.rootUrl + 'vente-auto-back/users/', user);
    }

}
