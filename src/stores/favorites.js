import { defineStore } from "pinia"

export const useFavoriteStore = defineStore('favorites', {
    state: () => ({
        favoritePokemons: []
    }),
    actions: {
        addFavorite(pokemon) {
            if (!this.favoritePokemons.some(p => p.name === pokemon.name)) {
                this.favoritePokemons.push(pokemon)
            }
        },
        deleteFavorite(pokemon) {
            this.favoritePokemons = this.favoritePokemons.filter(p => p.name !== pokemon.name)
        },
        isFavorite(pokemonName) {
            return this.favoritePokemons.some(p => p.name === pokemonName)
        }
    },
    persist: {
        key: 'my-favorites',
        storage: localStorage,
        paths: ['favoritePokemons']
    }
})
