<script setup>
import FavoriteIcon from './FavoriteIcon.vue'

defineProps({
  pokemons: {
    type: Array,
    required: true
  },
  isFavorite: Function
})

defineEmits(['select', 'toggle-favorite'])
</script>

<template>
  <div class="pokemones-list no-scrollbar">
    <div
        v-for="(pokemon, index) in pokemons"
        :key="pokemon.name"
        class="bg-white p-2 flex items-center justify-between"
    >
      <span
          @click="$emit('select', pokemon.name)"
          class="pokemon-list-row"
      >
        {{ pokemon.name }}
      </span>

      <FavoriteIcon
          :isFavorite="isFavorite(pokemon.name)"
          @click="$emit('toggle-favorite', pokemon)"
          class="cursor-pointer"
      />
    </div>
  </div>
</template>
