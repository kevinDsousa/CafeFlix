import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/movie.model';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public readonly URLIMAGE: string = environment.URLIMAGE

  @Input() movie!: Movie;

  public showDataCard: boolean = false;

  constructor() {}

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
