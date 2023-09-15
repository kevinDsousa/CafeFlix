import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/shared/movie.model';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
})
export class CardMovieComponent {

  public readonly URLIMAGE: string = environment.URLIMAGE

  @Input() movie!: Movie;

  public showDataCard: boolean = false;

  /**
   * Mostra valores com base no hover
   * @param $event Evento de hover mostra template
   */
  showValues($event: MouseEvent): void {
    this.showDataCard = true;
    console.log(this.showDataCard);
  }

  /**
   * Esconde valores com base no hover
   * @param $event Evento de hover esconde template
   */
  hideValues($event: MouseEvent): void {
    this.showDataCard = false
    console.log(this.showDataCard);
  }

}
