import { Component, OnInit, } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/shared/movie.model';

@Component({
  selector: 'app-upcoming-premieres',
  templateUrl: './upcoming-premieres.component.html',
  styleUrls: ['./upcoming-premieres.component.css']
})
export class UpcomingPremieres implements OnInit {
  moviesList: Movie[] = [];
  currentPositionRated = 0;

  constructor(private moviesService: MovieService) {
    this.getMovies();
  }

  ngOnInit(): void {}

  /**
   * Pega os filmes mais bem avaliados
   */
  public getMovies(): void {
    this.moviesService.upcomingPremieres().subscribe((movies) => {
      this.moviesList = movies.results;
    });
  }

  /**
   * Funcionalidade do botão que move o carrosel para esquerda
   */
  public handleLeft(): void {
    if (this.currentPositionRated > 0) {
      this.currentPositionRated--;
      this.scrollMovieList();
    }
  }

  /**
   * Funcionalidade do botão que move o carrosel para
   */
  public handleRight(): void {
    if (this.currentPositionRated < this.moviesList.length - 1) {
      this.currentPositionRated++;
      this.scrollMovieList();
    }
  }

  /**
   * Funcionalidade de scroll
   */
  public scrollMovieList(): void {
    const movieWidth = 90;
    const translateX = -this.currentPositionRated * movieWidth;
    const movieList = document.querySelector('.movie-top-list') as HTMLElement;
    movieList.style.transform = `translateX(${translateX}px)`;
  }
}
