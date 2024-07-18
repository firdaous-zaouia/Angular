import { Component, OnInit } from '@angular/core';
import { POKEMONS} from './mock-pokemon-list';
import { Pokemon } from './pokemon';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  })
export class AppComponent implements OnInit{
  pokemonsList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(){
    console.table(this.pokemonsList);
  }
  selectPokemon(pokemonId: string){

    const Pokemon: Pokemon | undefined = this.pokemonsList.find(pokemon => pokemon.id == +pokemonId);
    if(Pokemon){
      console.log(`vous avez cliqué sur le pokémon ${Pokemon.name}`);
      this.pokemonSelected = Pokemon;
    }else{
      console.log(`vous avez cliqué sur le pokémon qui n'exixte pas.`);
      this.pokemonSelected = Pokemon;
      
    }
    
  }
}
