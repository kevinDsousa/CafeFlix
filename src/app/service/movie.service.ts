import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Movie } from "../shared/movie.model";
import { environment } from "src/environments/environment.development";

@Injectable({providedIn: 'root'})
export class MovieService {

  private readonly URLAPI: string = environment.URLAPI
  private readonly APIKEY: string = environment.APIKEY
  // private readonly APITOKEN: HttpHeaders = environment.APITOKEN

  constructor(private http: HttpClient) { }

  public getPopularBanner(): Observable<any> {
    return this.http.get(`${this.URLAPI}/trending/all/week`, {
      params: new HttpParams().set(this.APIKEY, 'chave')
    });
  }

  public getPopularMovie(): Observable<any> {
    const params = new HttpParams().set('api_key', this.APIKEY);
    return this.http.get<Movie[]>(`${this.URLAPI}/movie/popular`, { params });
  }


  public getPopularId() { }

  public getPopularTop() { }
}
