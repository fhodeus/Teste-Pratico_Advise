import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { empty, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PokeApi } from 'src/app/models/PokeApi';
import { Pokemon } from 'src/app/models/pokemon';
import { PokeApiService } from 'src/app/services/poke-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges {
  httpClient: any;

  constructor(private PokeApiService: PokeApiService) { }

  @Input() initialPage = 1;
  @Input() currentPage = 1;
  @Input() maxPages!: number;

  @Input() PokemonName = "ditto";

  @Input() data: any;
  
  async ngOnInit(): Promise<void> {

    await this.getPokemonList()

    this.setPage(this.initialPage);
  }

  ngOnChanges(changes: SimpleChanges) {

    this.setPage(this.currentPage);
  }

  setPage(page: number) {

    if (page <= this.maxPages && page > 0)
      this.currentPage = page
  }

  async getPokemonList() {
    await this.PokeApiService.getPokeApi().subscribe((response: PokeApi) => {
      this.data = response;
     
      var notround = response.results.length / 5
      var round = Math.round(notround)
      notround < round ? this.maxPages = round : this.maxPages = round + 1 
    })
  }

  onSubmit(e: any): void {
    this.PokeApiService.getPokeApibyName(this.PokemonName).subscribe((response: Pokemon) => {
      this.data.results = [response];
      this.maxPages = 1
    })
    e.preventDefault()
  }

  onChange(e: any): void {
    this.PokemonName = e.target.value
  }

  

}
