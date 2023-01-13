import { Component, OnInit } from '@angular/core'
import { Pokemon } from './pokemon'
import { POKEMONS } from './mock-pokemon-list'

@Component({
  selector: 'app-root',
  //template: `<h1>Liste</h1>`
  templateUrl: 'app.component.html',
})
export class AppComponent {
  pokemonsList: Pokemon[] = POKEMONS
  pokemonSelected: Pokemon | undefined

  ngOnInit() {
    console.log(this.pokemonsList)
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonsList.find(
      (pokemon) => pokemon.id === +pokemonId
    )
    this.pokemonSelected = pokemon
    if (pokemon) {
      console.log(`vous avez selectionner ${pokemon.name}`)
    } else {
      console.log(`le pokemon n'existe pas`)
    }
  }
}
