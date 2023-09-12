import { Component, OnInit} from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/shared/movie.model';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
})
export class ListMoviesComponent implements OnInit{
  filmes!: Movie[];

  constructor(private moviesService: MovieService) {
    this.getMovies()
  }

  ngOnInit(): void {}

  getMovies(): void {
    this.moviesService.getPopularMovie().subscribe((movies) => {
      this.filmes = movies;
      console.log(this.filmes);
    });
  }
}
