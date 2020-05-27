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
  topTracks: any[] = [];
  error: boolean;
  mensajeError: string = "";

  constructor(
    private activeRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.cargarVista();
   }

  ngOnInit(): void {
  }

  cargarVista(){
    this.loading = true;
    this.error = false;
    this.activeRoute.params.subscribe( params => {
      console.log(params)
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  getArtista(id: string){
    this.spotifyService.getArtista(id).subscribe(data => {
      this.artista = data;
      this.loading = false;
    },(err) => {
      this.error = true;
      this.mensajeError = err.error.error.message;
      this.loading = false
    });
  }

  getTopTracks(id: string){
    this.spotifyService.getTopTracks(id).subscribe(data => {
      this.topTracks = data;
    }, (err) => {
      this.error = true;
      this.mensajeError = err.error.error.message;
      this.loading = false
    });
  }

}
