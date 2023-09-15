import { Component } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/shared/movie.model';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent {
  moviesList: Movie[] = [];
  currentPosition = 0;


  constructor(private moviesService: MovieService) {
    this.getMovies();
  }

  ngOnInit(): void {}

  /**
   * Pega os filmes mais bem avaliados
   */
  public getMovies(): void {
    this.moviesService.getTopRated().subscribe((movies) => {
      this.moviesList = movies.results
    });
  }

  /**
   * Funcionalidade do botão que move o carrosel para esquerda
   */
  public handleLeft(): void {
    if (this.currentPosition > 0) {
      this.currentPosition--;
      this.scrollMovieList();
    }
  }

  /**
   * Funcionalidade do botão que move o carrosel para
   */
  public handleRight(): void {
    if (this.currentPosition < this.moviesList.length - 1) {
      this.currentPosition++;
      this.scrollMovieList();
    }
  }

  /**
   * Funcionalidade de scroll
   */
  public scrollMovieList(): void {
    const movieWidth = 90;
    const translateX = -this.currentPosition * movieWidth;
    const movieList = document.querySelector('.movie-rated-list') as HTMLElement;
    movieList.style.transform = `translateX(${translateX}px)`;
  }
}
