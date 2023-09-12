import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class MovieService {
  readonly urlApi: string = 'https://api.themoviedb.org/3'

  constructor(private http: HttpClient){}

  public getPopularBanner(): Observable<any>{
    return this.http.get(`${this.urlApi}/trending/all/week?api_key=chave`)
  }

  public getPopularMovie(): Observable<any>{
    return this.http.get(`${this.urlApi}/movie/popular?api_key=chave&page=1`)
  }

  public getPopularId(){}

  public getPopularTop(){}
}
