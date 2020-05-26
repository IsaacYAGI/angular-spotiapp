import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = 'TOKEN';
  constructor(private http: HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers: headers})
                    .pipe( map( (data) => data['albums'].items));
  }

  getArtista(termino: string){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=20`,{headers: headers})
                    .pipe( map( (data) => data['artists'].items ));
  }
}