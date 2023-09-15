import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/shared/movie.model';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit{
  moviesList: Movie[] = [];
  currentPosition = 0;


  constructor(private moviesService: MovieService) {
    this.getMovies();
  }

  ngOnInit(): void {}

  /**
   * Pega os filmes mais bem avaliados
   */
  getMovies(): void {
    this.moviesService.getPopularMovie().subscribe((movies) => {
      this.moviesList = movies.results;
    });
  }

  /**
   * Funcionalidade do botão que move o carrosel para esquerda
   */
  handleLeft(): void {
    if (this.currentPosition > 0) {
      this.currentPosition--;
      this.scrollMovieList();
    }
  }

  /**
   * Funcionalidade do botão que move o carrosel para
   */
  handleRight(): void {
    if (this.currentPosition < this.moviesList.length - 1) {
      this.currentPosition++;
      this.scrollMovieList();
    }
  }

  /**
   * Funcionalidade de scroll
   */
  scrollMovieList(): void {
    const movieWidth = 90;
    const translateX = -this.currentPosition * movieWidth;
    const movieList = document.querySelector('.movie-list') as HTMLElement;
    movieList.style.transform = `translateX(${translateX}px)`;
  }

}
