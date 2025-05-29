import {useFavoriteStore} from "@/stores/favorites.js";
import {usePokemonesStore} from "@/stores/pokemones.js";

export function usePokemons (){
    const favoriteStore = useFavoriteStore()
    const pokemonStore = usePokemonesStore()
    const getPokemonDetail = async (name) => {
        return await pokemonStore.getPokemonDetails(name);
    }
    const toggleFavorite = (pokemon) => {
        const name = pokemon.name
        if (favoriteStore.isFavorite(name)) {
            favoriteStore.deleteFavorite(pokemon)
        } else {
            favoriteStore.addFavorite(pokemon)
        }
    }
    return {
        getPokemonDetail, toggleFavorite
    }
}