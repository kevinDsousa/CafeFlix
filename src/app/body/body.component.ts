import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../services/filmes.service';
import { Filmes } from '../shared/filmes.module';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  providers: [FilmesService]
})
export class BodyComponent implements OnInit {

  public filmes: Array<Filmes> = [];
  public baseUrl: string = 'https://image.tmdb.org/t/p/original/'

  constructor(private filmesService: FilmesService){}

  ngOnInit(){
    this.filmes = this.filmesService.getFilmes()
  }
}
