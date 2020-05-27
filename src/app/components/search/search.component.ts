import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string = "";

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino: string): void{
    this.loading = true;
    this.error = false;

    this.spotifyService.getArtistas(termino).subscribe( (data: any) => {
      this.artistas = data;
      this.loading = false;
    }, (err) => {
      console.log(err);
      this.error = true;
      this.mensajeError = err.error.error.message;
      this.loading = false
    });
  }
}
