import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/shared/movie.model';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
})
export class CardDetailComponent implements OnInit {
  moviesList: Movie[] = [];
  id:number = this.route.snapshot.params['id']
  public readonly URLIMAGE: string = environment.URLIMAGE
  public moviesDetails: any
  public movieCast: any

  constructor(private moviesService: MovieService, private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.getMoviesId(this.id)

    // this.route.params.subscribe(
    //   (param: any) => {console.log(param)},
    //   (erro: Error) => {console.log(erro)},
    //   () => {console.log('processo concluido')}
    //   )
  }
  /**
   * Pega os filmes por id
   */
  public getMoviesId(id: number): void {
    const newID: string = id.toString();
    this.moviesService.getDetailsMovies(newID).subscribe((response) => {
      this.moviesDetails = response;
    });
  }

  /**
   * Funcao que pega o obsevable de casts
   * @param id identificador
   */
  public getCast(id: string) {
    this.moviesService.getMovieCast(id).subscribe((result) => {
      console.log(result, 'getCastResult##');
      this.movieCast = result;
    });
  }


}
