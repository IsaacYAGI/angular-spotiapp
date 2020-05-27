import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string = "";
  
  constructor(
    private spotifyService: SpotifyService
  ) { 
    
    this.callService();
   
  }

  ngOnInit(): void {
    
  }

  callService(){
    this.loading = true;
    this.error = false;
    this.spotifyService.getNewReleases()
    .subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.loading = false
    }, (err) => {
      this.error = true;
      this.mensajeError = err.error.error.message;
      this.loading = false
    });
  }

  retryCall(){
    //Regenerar token y volver a llamar a callService()
    this.callService();
  }

}
