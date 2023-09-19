import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/shared/movie.model';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {
  ngOnInit(): void {
}
  constructor(private router: ActivatedRoute, private moviesService: MovieService) {}

  @Input() movie!: Movie;

  public readonly URLIMAGE: string = environment.URLIMAGE

  public showDataCard: boolean = false;

  getMovie(id: string) {
    this.moviesService.getDetailsMovies(id).subscribe((movie) => {
      console.log(movie);
    })
  }

  /**
   * Mostra valores com base no hover
   * @param $event Evento de hover mostra template
   */
  showValues($event: MouseEvent): void {
    this.showDataCard = true;
  }

  /**
   * Esconde valores com base no hover
   * @param $event Evento de hover esconde template
   */
  hideValues($event: MouseEvent): void {
    this.showDataCard = false
  }

}
