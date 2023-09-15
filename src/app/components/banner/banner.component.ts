import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/shared/movie.model';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent implements OnInit {

  public readonly URLIMAGE: string = environment.URLIMAGE
  public readonly randomBgImg: number = Math.floor(Math.random() * 10)

  moviesList: Movie[] = [];

  constructor(private moviesService: MovieService) {
    this.getBanner();
  }

  ngOnInit(): void {}

  /**
   * Pega o banner via api
   */
  public getBanner(): void {
    this.moviesService.getPopularBanner().subscribe((banner) => {
      this.moviesList = banner.results;
    })
  }
}
