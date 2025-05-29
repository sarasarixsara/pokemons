import {defineStore} from "pinia";
import {fetchAllPokes, getPokemonDetails} from "../../utils/api.js";

export const usePokemonesStore = defineStore('pokemones', {
        state: () => ({
            allPokemon: [],
            loading: false,
            error: null,
            detailsById: {},
            search: ''
        }),
        actions: {
            async loadAllPokemon() {
                this.loading = true,
                    this.error = null
                try {
                    this.allPokemon = await fetchAllPokes()
                } catch (error) {
                    this.error = 'Error al cargar los Pokemon'
                    console.error(error)
                } finally {
                    this.loading = false
                }
            },
            async getPokemonDetails(pokemonName) {
                if (this.detailsById[pokemonName]) {
                    return this.detailsById[pokemonName]
                }
                try {
                    const data = await getPokemonDetails(pokemonName)
                    const parsedData = {
                        name: data.name,
                        weight: data.weight,
                        height: data.height,
                        types: data.types.map(t => t.type.name),
                        image: data.sprites.other['official-artwork'].front_default
                    }
                    this.detailsById[pokemonName] = parsedData
                    return parsedData
                } catch (e) {
                    this.errorDetails = `Error al obtener detalles de ${pokemonName}`
                    console.error(e)
                    return null
                }
            },
            setSearchTerm(term) {
                this.search = term
            }

        }
    }
)
