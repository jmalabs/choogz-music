import { CONFIG } from './../../config/config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor( private http: HttpClient) {

    }

    getUserProfile(userName: string): Observable<any> {
        return this.http.get(`http://api.github.com/users/${userName}?client_id=${CONFIG.clientId}&client_secret=${CONFIG.clientId}`);
    }

}
