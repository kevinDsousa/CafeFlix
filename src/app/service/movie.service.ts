import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Movie } from "../shared/movie.model";
import { environment } from "src/environments/environment.development";

@Injectable({providedIn: 'root'})
export class MovieService {

  private readonly URLAPI: string = environment.URLAPI
  private readonly APIKEY: string = environment.APIKEY

  constructor(private http: HttpClient) { }

  /**
   * Função que solicita o banner para api
   * @returns Retorna um observable e passa as informações para frente
   */
  public getPopularBanner(): Observable<any> {
    return this.http.get(`${this.URLAPI}/trending/all/week?api_key=${this.APIKEY}`);
  }

  /**
   * Função que pega os filmes mais populares
   * @returns Retorna um observable e passa as informações para frente
   */
  public getTopRated(): Observable<any> {
    return this.http.get<Movie[]>(`${this.URLAPI}/movie/top_rated?api_key=${this.APIKEY}`);
   }

  /**
   * Função que solicita todos os filmes populares
   * @returns Retorna um observable e passa as informações para frente
   */
  public getPopularMovie(): Observable<any> {
    const params = new HttpParams().set('api_key', this.APIKEY);
    return this.http.get<Movie[]>(`${this.URLAPI}/movie/popular`, { params });
  }
  /**
   * Função que solicita os filmes que estão em estreia
   * @returns Retorna um observable e passa as informações para frente
   */
  public upcomingPremieres():Observable<any> {
    return this.http.get(`${this.URLAPI}/movie/upcoming?api_key=${this.APIKEY}&page=1`);
  }

  /**
   * Função que solicita os filmes em alta
   * @returns Retorna um observable e passa as informações para frente
   */
  nowPlaying():Observable<any> {
    return this.http.get(`${this.URLAPI}/movie/now_playing?api_key=${this.APIKEY}`);
  }

  /**
   * Função que solicita o trailer do filme com base no data
   * @param data Dados para serem enviados no corpo da request
   * @returns Retorna um observable e passa as informações para frente
   */
  getTrailer(data:any): Observable<any>{
    return this.http.get(`${this.URLAPI}/movie/${data}/videos?api_key=${this.APIKEY}`);
  }
  
  /**
   * Função que solicita os filmes que estão em estreia
   * @returns Retorna um observable e passa as informações para frente
   */
  public upcomingPremieres():Observable<any> {
    return this.http.get(`${this.URLAPI}/movie/upcoming?api_key=${this.APIKEY}&page=1`);
  }

  /**
   * Função que solicita os filmes em alta
   * @returns Retorna um observable e passa as informações para frente
   */
  nowPlaying():Observable<any> {
    return this.http.get(`${this.URLAPI}/movie/now_playing?api_key=${this.APIKEY}`);
  }

  /**
   * Função que solicita o trailer do filme com base no data
   * @param data Dados para serem enviados no corpo da request
   * @returns Retorna um observable e passa as informações para frente
   */
  getTrailer(data:any):Observable<any>{
    return this.http.get(`${this.URLAPI}/movie/${data}/videos?api_key=${this.APIKEY}`);
  }

  /**
   * Função que pega os filmes mais populares
   * @returns Retorna um observable e passa as informações para frente
   */
  public getPopularTop() {
    return this.http.get(`${this.URLAPI}/movie/top_rated?api_key=${this.APIKEY}`)
   }
}
