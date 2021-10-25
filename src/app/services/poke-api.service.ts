import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { PokeApi } from '../models/PokeApi';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getPokeApi(): Observable<PokeApi> {
    return this.httpClient.get<PokeApi>(this.url + "?offset=0&limit=23")
  }

  getPokeApibyName(pokemon:string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(this.url + pokemon)
  }

  getPokeApibyId(id:string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(this.url + id)
  }
  

}
