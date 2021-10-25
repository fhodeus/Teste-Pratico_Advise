import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';

import { PokeApiService } from 'src/app/services/poke-api.service';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  id!: string;
  pokemon!: Pokemon;

  
  constructor(private activatedRoute: ActivatedRoute,private PokeApiService: PokeApiService
  ) {

   }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams:any) => {
      this.id = queryParams['id'];
      console.log('Url Id: ', this.id);
    })

    this.PokeApiService.getPokeApibyId(this.id).subscribe((response: Pokemon) => {
      this.pokemon = response;
    })
  }

}
