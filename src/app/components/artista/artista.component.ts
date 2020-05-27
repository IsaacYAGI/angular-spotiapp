import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loading:boolean;

  constructor(
    private activeRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.loading = true;
    this.activeRoute.params.subscribe( params => {
      console.log(params)
      this.getArtista(params['id']);
    })
   }

  ngOnInit(): void {
  }

  getArtista(id: string){
    this.spotifyService.getArtista(id).subscribe(data => {
      this.artista = data;
      this.loading = false;
    });
  }

}
