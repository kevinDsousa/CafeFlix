import { Component ,OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/shared/movie.model';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
})
export class PopularComponent implements OnInit {

  // public movies: Movie[] = [];

  // constructor(private moviesService: MovieService){}

  ngOnInit(): void {

  }
}
