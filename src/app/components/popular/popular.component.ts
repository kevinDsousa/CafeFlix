import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
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

  @ViewChild('movieListContainer') movieListContainer!: ElementRef;


  constructor(private moviesService: MovieService, private renderer: Renderer2) {
    this.getMovies();
  }

  ngOnInit(): void {}

  getMovies(): void {
    this.moviesService.getPopularMovie().subscribe((movies) => {
      this.moviesList = movies.results;
    });
  }

  handleLeft(): void {
    if (this.currentPosition > 0) {
      this.currentPosition--;
      this.scrollMovieList();
    }
  }

  handleRight(): void {
    if (this.currentPosition < this.moviesList.length - 1) {
      this.currentPosition++;
      this.scrollMovieList();
    }
  }

  scrollMovieList(): void {
    const movieWidth = 90;
    const translateX = -this.currentPosition * movieWidth;
    const movieList = document.querySelector('.movie-list') as HTMLElement;
    movieList.style.transform = `translateX(${translateX}px)`;
  }

}
