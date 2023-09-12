import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Movie } from "../shared/movie.model";

@Injectable({providedIn: 'root'})
export class MovieService {

   movieTest = {
    "adult": false,
    "backdrop_path": "/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
    "genre_ids": [
      28,
      878,
      27
    ],
    "id": 615656,
    "original_language": "en",
    "original_title": "Meg 2: The Trench",
    "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
    "popularity": 5133.953,
    "poster_path": "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
    "release_date": "2023-08-02",
    "title": "Meg 2: The Trench",
    "video": false,
    "vote_average": 7,
    "vote_count": 1595
  }

  private readonly urlApi: string = 'https://api.themoviedb.org/3'

  constructor(private http: HttpClient) { }

  // public getPopularBanner(): Observable<any> {
  //   return this.http.get(`${this.urlApi}/trending/all/week?api_key=chave`)
  // }

  public getPopularMovie(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.urlApi}/movie/popular?api_key=chaveapi&page=1`)
  }

  public getPopularId() { }

  public getPopularTop() { }
}
