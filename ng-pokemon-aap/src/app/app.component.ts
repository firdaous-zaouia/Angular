import { Component, OnInit } from '@angular/core';
import { POKEMONS} from './mock-pokemon-list';
import { Pokemon } from './pokemon';



@Component({
  selector: 'app-root',
  template: `<h1>Liste de Pokémon</h1>`
  })
export class AppComponent implements OnInit{
  pokemonsList: Pokemon[] = POKEMONS;

  ngOnInit(){
    console.table(this.pokemonsList);
    this.selectPokemon(this.pokemonsList[0]);
  }
  selectPokemon(pokemon: Pokemon){
    console.log(`vous avez cliqué sur le pokémon ${pokemon.name}}`);
  }
}
