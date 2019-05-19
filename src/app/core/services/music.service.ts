import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { UrlConfig } from 'src/app/config/url-config';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  constructor(private httpClient: HttpClient) {

    }


  searchArtist(searchParam: string, key: string): Observable<any> {

    const resource = UrlConfig.SEARCH_ARTIST_URL.replace('__ARTIST_NAME__', searchParam).replace('__API_KEY__', key);

    // return this.httpClient.get(resource).pipe(map(res => res.json()));

    return this.httpClient.get(resource).pipe(map(res => res));
    // this.httpClient.get();

  }
}
