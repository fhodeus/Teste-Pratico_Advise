import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnChanges {
  
  @Input() pagina!: number;
  @Input() pokemonResults!: Pokemon[] ;

  pokemonShow!: Pokemon[];
  
  constructor(private PokemonService: PokemonService) { }

  ngOnChanges(changes: SimpleChanges): void {

    this.pokemonShow = this.pokemonResults.slice((this.pagina * 5) - 5 , this.pagina * 5)
    this.pokemonGetId()
  }

  ngOnInit(): void {
    this.pokemonShow = this.pokemonResults.slice((this.pagina * 5) - 5 , this.pagina * 5)
    this.pokemonGetId()
  }

  pokemonGetId(){
    for(let pokemon in this.pokemonShow){
      if(!this.pokemonShow[pokemon].id)
      this.pokemonShow[pokemon].id = this.pokemonShow[pokemon].url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/","")
    }
  }
  
}
