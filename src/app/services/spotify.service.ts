import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = 'TOKEN';
  constructor(private http: HttpClient) { }


  getQuery(query: string): Observable<object>{
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(url, {headers:headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( (data) => data['albums'].items));
  }

  getArtista(termino: string){

    return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=20`)
      .pipe( map( (data) => data['artists'].items ));
  }
}
