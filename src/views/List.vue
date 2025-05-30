<script setup>
import {usePokemonesStore} from "@/stores/pokemones.js";
import {storeToRefs} from 'pinia'
import {useRoute} from 'vue-router'
import {computed, onMounted, ref, watch} from "vue";
import Loader from "@/components/Loader.vue";
import MainLayout from "@/views/MainLayout.vue";
import {useFavoriteStore} from "@/stores/favorites.js";
import BottomBar from "@/components/BottomBar.vue";
import PokemonList from "@/components/PokemonList.vue";
import {usePokemons} from '@/composables/usePokemons'
import Dialog from "@/components/Dialog.vue";
import NotFound from "@/components/NotFound.vue";

const favoriteStore = useFavoriteStore()
const pokemonStore = usePokemonesStore()
const route = useRoute()
const isFavoritesRoute = computed(() => route.path.includes('favorites'))
const {favoritePokemons} = storeToRefs(favoriteStore)
const {allPokemon} = storeToRefs(pokemonStore)
const details = ref({})
const openModal = ref(false)
let searchTerm = ref('')


const pokemonsToShow = computed(() => {
  const list = isFavoritesRoute.value ? favoritePokemons.value : allPokemon.value
  const searchTerm = pokemonStore.search.trim().toLowerCase()
  return searchTerm ? list.filter(p => p.name.toLowerCase().includes(searchTerm)) : list
})
const filteredPokemons = computed(() => {
  if (!searchTerm.value) return pokemonsToShow.value;
  return pokemonsToShow.value.filter(p =>
      p.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});
const emptySearch = () => {
  pokemonStore.search = ''
}
onMounted(() => {
      if (pokemonStore.allPokemon.length === 0) {
        pokemonStore.loadAllPokemon()
      }
    }
)
const {getPokemonDetail, toggleFavorite} = usePokemons()
const handleSelect = async (pokemon) => {
  details.value = await getPokemonDetail(pokemon)
  openModal.value = true;
}
defineEmits(['click'])
</script>

<template>
  <div v-if="pokemonStore.loading">
    <Loader/>
  </div>
  <div v-else>
    <MainLayout>
      <PokemonList v-if="filteredPokemons.length > 0" :pokemons="pokemonsToShow" @select="handleSelect"
                   :isFavorite="(name) => favoriteStore.isFavorite(name)" @toggle-favorite="toggleFavorite"/>
      <div v-else>
        <NotFound event="click" @click="emptySearch"/>
      </div>
      <BottomBar v-if="pokemonStore.search === '' "/>
    </MainLayout>
    <Dialog v-if="openModal === true" @close="openModal=false" :pokemon="details "
            :isFavorite="(name) => favoriteStore.isFavorite(name)" @toggle-favorite="toggleFavorite"/>
  </div>
</template>
