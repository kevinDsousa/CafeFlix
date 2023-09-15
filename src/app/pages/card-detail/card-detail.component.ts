import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/shared/movie.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  moviesList: Movie[] = [];

  constructor(private moviesService: MovieService) {
    this.getMovies();
  }

  /**
   * Pega os filmes
   */
  public getMovies(): void {
    this.moviesService.getDetailsMovies('346698').subscribe((movies) => {
      this.moviesList = movies;
      console.log(this.moviesList);
    })
  }
  ngOnInit(): void {}
}
